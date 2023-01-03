import axios from 'axios'
import { useState, useEffect } from 'react'



export const UseJournal = () => {
  const [pets, setPets] = useState([])

  useEffect(() => {

    axios.get('http://localhost:8000/api/users/1/pets')
      .then((res) => {
        console.log(res)
        setPets(res.data.data)
      })
      .catch((e) => console.log(e))
  }, [])

    return {
      pets
    }

}