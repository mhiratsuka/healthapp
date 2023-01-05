import axios from 'axios'
import { useState, useEffect } from 'react'


export const UseJournalDetail = () => {
  const [journal, setJournal] = useState([])

  useEffect(() => {

    axios.get('http://localhost:8000/api/journals/1')
      .then((res) => {
        console.log(res)
        setJournal(res.data.data)
      })
      .catch((e) => console.log(e))
  }, [])

    return {
      journal
    }
}