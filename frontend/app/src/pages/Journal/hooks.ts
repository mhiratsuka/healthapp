import axios from 'axios'
import { useState, useEffect } from 'react'
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form'

import { journalType } from './model'

export const UseJournal = (): {
  journals: journalType[]
  registeringJournalForm: {
    isOpen: boolean
    register: UseFormRegister<journalType>
    errors: FieldErrors<journalType>
    onSubmit: () => void
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

  console.log(watch())

  const handleRecordModalOpen = (): void => {
    setRecordModalOpen(true)
  }

  const handleRecordModalClose = (): void => {
    setRecordModalOpen(false)
    reset({})
  }

  const handleRegisteredJournal = (): void => {
    alert('Submit')
    handleSubmit(
      ({
        id,
        title,
        from_date,
        to_date,
        category,
        note,
        pet_id,
      }: journalType) => {
        alert('test')
      }
    )
    // handleSubmit(({title, from_date, to_date, note, category, pet_id}: journalType ) => {
    //   axios
    //   .post('http://localhost:8000/api/pets/1/journals')
    //   .then((res) => {
    //     console.log(res)
    //     setJournals(res.data.data)
    //   })
    //   .catch((e) => console.log(e))
    // })

    handleRecordModalClose()
  }

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/pets/1/journals')
      .then((res) => {
        console.log(res)
        setJournals(res.data.data)
      })
      .catch((e) => console.log(e))
  }, [])

  return {
    journals,
    registeringJournalForm: {
      isOpen: recordModalOpen,
      register,
      errors,
      onSubmit: () => handleRegisteredJournal(),
      onClose: () => handleRecordModalClose(),
      onOpen: () => handleRecordModalOpen(),
      disableCancelButton: !isDirty || !isValid,
      disableSubmitButton: !isDirty || !isValid,
    },
  }
}
