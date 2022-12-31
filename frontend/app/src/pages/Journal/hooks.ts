import axios from 'axios'
import { useState, useEffect } from 'react'


export const UseJournal = () => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/users/1/pets')
      .then(response => setPets(response.data))
      .catch(error => console.log(error))
  }, [])

    return {
      pets
    }

}