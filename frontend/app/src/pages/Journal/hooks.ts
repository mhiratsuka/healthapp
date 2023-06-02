import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form'

import { currentTime, formatTime } from '@/domain/time'

import { journalType, journalType, petType } from './model'

export const UseJournal = (): {
  pets: petType[]
  journals: journalType[]
  registeringJournalForm: {
    isOpen: boolean
    register: UseFormRegister<journalType>
    errors: FieldErrors<journalType>
    onSubmit?: () => void
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
  confirmDialog: {
    isOpen: boolean
    value?: journalType
    onOpen: (value: journalType) => void
    onSubmit: () => void
    onClose: () => void
  }
} => {
  const [journals, setJournals] = useState([])
  const [recordModalOpen, setRecordModalOpen] = useState(false)
  const [pets, setPets] = useState([])
  const [selectPet, setSelectPet] = useState<{ id: number; name: string }>()
  const [confirmDialogValue, setConfirmDialogValue] = useState<journalType>()

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
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

  const updateData = (data: journalType): void => {
    axios
      .patch(`http://localhost:8000/api/journals/${data.id}`, {
        ...data,
      })
      .then((res) => {
        console.log(res)
        handleRecordModalClose()
        const updateJournal = journals.map((obj) => {
          if (obj.id === data.id) {
            return {
              ...obj,
              title: data.title,
              from_date: data.from_date,
              to_date: data.to_date,
              category: data.category,
              note: data.note,
            }
          }

          return obj
        })

        setJournals(updateJournal)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteData = (data: journalType): void => {
    axios
      .post(`http://localhost:8000/api/journals/${data.id}`, {})
      .then((res) => {
        console.log(res)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const postData = (data: journalType): void => {
    axios
      .delete(`http://localhost:8000/api/pets/1/journals /journals/:id`, {
        ...data,
        // pet_id: selectPet.id,
        pet_id: 1,
      })
      .then((res) => {
        console.log(res)
        console.log(data)
        handleRecordModalClose()
        const test = [...journals, data]
        console.log(test)
        console.log(journals)
      })
      .catch((e) => {
        console.log(e)
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
        if (data.id === undefined) {
          postData(data)
        } else {
          updateData(data)
        }
      }),
      onClose: () => handleRecordModalClose(),
      onOpen: (value?: journalType) => {
        handleRecordModalOpen()
        if (value.id !== undefined) {
          reset(value ?? {})
        }

        setValue('from_date', formatTime(getValues('from_date')))
        setValue('to_date', formatTime(getValues('to_date')))
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
    confirmDialog: {
      value: confirmDialogValue,
      isOpen: confirmDialogValue !== undefined,
      onOpen: setConfirmDialogValue,
      onSubmit: () => {
        alert('confirmDialog onSubmit')
      },
      onClose: () => setConfirmDialogValue(undefined),
    },
  }
}
