import axios from 'axios'
import { useEffect, useState } from 'react'

import { petType } from './model'

export const usePets = (): {
  pets: petType[]
  confirmDialog: {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
  }
} => {
  const [pets, setPets] = useState([])
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const getPetData = (): void => {
    axios
      .get(`http://localhost:8000/api/users/1/pets`)
      .then((res) => {
        setPets(res.data.data)
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    getPetData()
  }, [])

  return {
    pets,
    confirmDialog: {
      isOpen: isConfirmOpen,
      onOpen: () => {
        setIsConfirmOpen(true)
      },
      onClose: () => {
        setIsConfirmOpen(false)
      },
    },
  }
}
