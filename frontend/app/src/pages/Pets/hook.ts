import axios from 'axios'
import { useEffect, useState } from 'react'

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
    onOpen: () => void
    onClose: () => void
  }
} => {
  const [pets, setPets] = useState<petType[]>([])
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)
  const [petId, setPetId] = useState<number | undefined>(undefined)
  const [isAddFormOpen, setIsAddFormOpen] = useState<boolean>(false)

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
      onOpen: () => {
        setIsAddFormOpen(true)
      },
      onClose: () => {
        setIsAddFormOpen(false)
      },
    },
  }
}
