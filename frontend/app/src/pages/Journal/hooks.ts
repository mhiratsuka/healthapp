import axios from 'axios'
import { useState, useEffect } from 'react'

export const UseJournal = (): {
  journals: any
  recordModalOpen: boolean
  handleRecordModalOpen: () => void
  handleRecordModalClose: () => void
} => {
  const [journals, setJournals] = useState([])
  const [recordModalOpen, setRecordModalOpen] = useState(false)

  const handleRecordModalOpen = (): void => {
    setRecordModalOpen(true)
  }

  const handleRecordModalClose = (): void => {
    setRecordModalOpen(false)
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
    recordModalOpen,
    handleRecordModalOpen,
    handleRecordModalClose,
  }
}
