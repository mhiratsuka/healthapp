import { useState } from 'react'

import { petType } from './model'

export const usePets = (): {
  pets: petType[]
} => {
  const [pets, setPets] = useState([])

  return {
    pets,
  }
}
