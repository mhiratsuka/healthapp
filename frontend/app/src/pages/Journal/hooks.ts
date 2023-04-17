import axios from 'axios'
import { useState, useEffect } from 'react'
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form'

import { currentTime } from '@/domain/time'

import { journalType, petType } from './model'

export const UseJournal = (): {
  pets: petType[]
  journals: journalType[]
  registeringJournalForm: {
    isOpen: boolean
    register: UseFormRegister<journalType>
    errors: FieldErrors<journalType>
    onSubmit: () => void
    onOpen: (value?: journalType) => void
    onClose: () => void
    disableCancelButton: boolean
    disableSubmitButton: boolean
    value: journalType
  }
  petSelection: {
    value?: { id: number; name: string }
    onChange: (option: { id: number; name: string }) => void
    options: Array<{ id: number; name: string }>
  }
} => {
  const [journals, setJournals] = useState([])
  const [recordModalOpen, setRecordModalOpen] = useState(false)
  const [pets, setPets] = useState([])
  const [selectPet, setSelectPet] = useState<{ id: number; name: string }>()

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm<journalType>({
    mode: 'onChange',
  })

  const handleRecordModalOpen = (): void => {
    setRecordModalOpen(true)
  }

  const handleRecordModalClose = (): void => {
    setRecordModalOpen(false)
    // FIXME: Fixed reset and types of from_date and to_date
    reset({
      title: '',
      from_date: currentTime(),
      to_date: currentTime(),
      category: '',
      note: '',
    })
  }

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/users/1/pets')
      .then((res) => {
        setPets(res.data.data)
        // console.log(res.data.data[0])
        // setSelectPet(
        //   selectPet ?? {
        //     id: res.data.data[0].id,
        //     name: res.data.data[0].name,
        //   }
        // )
      })
      .catch((e) => console.log(e))
    // }, [pets, selectPet])
  }, [])

  useEffect(() => {
    // selectPet !== undefined &&
    axios
      // .get(`http://localhost:8000/api/pets/${selectPet.id}/journals`)
      .get(`http://localhost:8000/api/pets/1/journals`)
      .then((res) => {
        setJournals(res.data.data)
      })
      .catch((e) => console.log(e))
  }, [])

  return {
    pets,
    journals,
    registeringJournalForm: {
      isOpen: recordModalOpen,
      register,
      errors,
      onSubmit: handleSubmit((data: journalType) => {
        // error fix
        axios
          // .post(`http://localhost:8000/api/pets/${selectPet.id}/journals`, {
          .post(`http://localhost:8000/api/pets/1/journals`, {
            ...data,
            // pet_id: selectPet.id,
            pet_id: 1,
          })
          .then((res) => {
            console.log(res)
            handleRecordModalClose()
          })
          .catch((e) => {
            console.log(e)
          })
      }),
      onClose: () => handleRecordModalClose(),
      onOpen: (value?: journalType) => {
        handleRecordModalOpen()
        reset(value ?? {})
      },
      disableCancelButton: !isDirty || !isValid,
      disableSubmitButton: !isDirty || !isValid,
      value: getValues(),
    },
    petSelection: {
      value: selectPet,
      onChange: setSelectPet,
      options: pets,
    },
  }
}
