import axios from 'axios'
import { useEffect, useState } from 'react'

import { petType } from './model'

export const usePets = (): {
  pets: petType[]
} => {
  const [pets, setPets] = useState([])

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
  }
}
