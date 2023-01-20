import { useMediaQuery } from '@mui/material'
import { Theme } from '@mui/material/styles'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const UseJournal = (): { journals: any; isLargeScreen: boolean } => {
  const [journals, setJournals] = useState([])

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
    isLargeScreen: useMediaQuery((theme: Theme) => theme.breakpoints.up('lg')),
  }
}
