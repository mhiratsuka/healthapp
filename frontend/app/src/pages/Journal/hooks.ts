import axios from 'axios'
import { useState, useEffect } from 'react'
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form'

import { currentTime } from '@/domain/time'

import { journalType } from './model'

export const UseJournal = (): {
  journals: journalType[]
  registeringJournalForm: {
    isOpen: boolean
    register: UseFormRegister<journalType>
    errors: FieldErrors<journalType>
    onSubmit: () => Promise<void>
    onOpen: () => void
    onClose: () => void
    disableCancelButton: boolean
    disableSubmitButton: boolean
  }
} => {
  const [journals, setJournals] = useState([])
  const [recordModalOpen, setRecordModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<journalType>({
    mode: 'onChange',
  })

  const handleRecordModalOpen = (): void => {
    setRecordModalOpen(true)
  }

  const handleRecordModalClose = (): void => {
    setRecordModalOpen(false)
    // TODO: Fixed reset and types of from_date and to_date
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
      .get('http://localhost:8000/api/pets/1/journals')
      .then((res) => {
        setJournals(res.data.data)
      })
      .catch((e) => console.log(e))
  }, [journals])

  return {
    journals,
    registeringJournalForm: {
      isOpen: recordModalOpen,
      register,
      errors,
      onSubmit: handleSubmit((data: journalType) => {
        // TODO: pet_id
        axios
          .post('http://localhost:8000/api/pets/1/journals', {
            ...data,
            pet_id: 2,
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
      onOpen: () => handleRecordModalOpen(),
      disableCancelButton: !isDirty || !isValid,
      disableSubmitButton: !isDirty || !isValid,
    },
  }
}
