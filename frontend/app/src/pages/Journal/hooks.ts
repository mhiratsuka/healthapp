import axios from 'axios'
import { useState, useEffect } from 'react'

import { journalType } from './model'

export const UseJournal = (): {
  journals: journalType[]
  registeringJournalForm: {
    isOpen: boolean
    onSubmit: () => void
    onOpen: () => void
    onClose: () => void
  }
} => {
  const [journals, setJournals] = useState([])
  const [recordModalOpen, setRecordModalOpen] = useState(false)

  const handleRecordModalOpen = (): void => {
    setRecordModalOpen(true)
  }

  const handleRecordModalClose = (): void => {
    setRecordModalOpen(false)
  }

  const handleRegisteredJournal = (): void => {
    alert('Submit')
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
      onSubmit: () => handleRegisteredJournal(),
      onOpen: () => handleRecordModalOpen(),
      onClose: () => handleRecordModalClose(),
    },
  }
}
