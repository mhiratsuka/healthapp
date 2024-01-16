import axios from 'axios'
import { useEffect, useState } from 'react'
import { UseFormRegister, FieldErrors, useForm } from 'react-hook-form'

import { petType } from './model'

export const usePets = (): {
  pets: petType[]
  confirmDialog: {
    isOpen: boolean
    onOpen: (id: number) => void
    onClose: () => void
    onSubmit: () => void
  }
  addingPetForm: {
    isOpen: boolean
    onOpen: (value?: petType) => void
    onClose: () => void
    register: UseFormRegister<petType>
    errors: FieldErrors<petType>
    onSubmit?: () => void
    value: petType
    disableSaveButton: boolean
    isEdit: boolean
  }
} => {
  const [pets, setPets] = useState<petType[]>([])
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)
  const [petId, setPetId] = useState<number | undefined>(undefined)
  const [isAddFormOpen, setIsAddFormOpen] = useState<boolean>(false)

  const {
    register,
    getValues,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    reset,
  } = useForm<petType>({
    mode: 'onChange',
  })

  const getPetData = (): void => {
    axios
      .get(`http://localhost:8000/api/users/1/pets`)
      .then((res) => {
        setPets(res.data.data)
      })
      .catch((e) => console.log(e))
  }

  const deletePetData = (): void => {
    axios
      .delete(`http://localhost:8000/api/pets/${petId}`)
      .then((res) => {
        console.log(res)
        setPetId(undefined)
        getPetData()
      })
      .catch((e) => {
        console.log(e)
        setPetId(undefined)
      })
  }

  const postPetData = (data: petType): void => {
    axios
      .post(`http://localhost:8000/api/users/1/pets`, {
        ...data,
      })
      .then(() => {
        handleFormClose()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handleFormClose = (): void => {
    setIsAddFormOpen(false)
    reset({
      name: '',
      birthday: '',
      kind: '',
      sex_id: undefined,
    })
  }

  useEffect(() => {
    getPetData()
  }, [])

  return {
    pets,
    confirmDialog: {
      isOpen: isConfirmOpen,
      onOpen: (id: number) => {
        setIsConfirmOpen(true)
        setPetId(id)
      },
      onClose: () => {
        setIsConfirmOpen(false)
        setPetId(undefined)
      },
      onSubmit: () => {
        deletePetData()
      },
    },
    addingPetForm: {
      isOpen: isAddFormOpen,
      onOpen: (value?: petType) => {
        console.log(value)
        setIsAddFormOpen(true)
        if (value?.id !== undefined) {
          reset(value ?? {})
        }
      },
      onClose: () => {
        setIsAddFormOpen(false)
        handleFormClose()
      },
      register,
      errors,
      onSubmit: handleSubmit((data: petType) => {
        postPetData(data)
      }),
      value: getValues(),
      disableSaveButton: !isDirty || !isValid,
      isEdit: getValues('id') !== undefined,
    },
  }
}
