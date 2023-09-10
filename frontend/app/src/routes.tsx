import { Routes, Route } from 'react-router-dom'

import { Error } from '@/pages/Error'
import { Journal } from '@/pages/Journal'
import { JournalDetail } from '@/pages/JournalDetail'
import { Login } from '@/pages/Login'
import { Pets } from '@/pages/Pets'

import { Top } from '@/pages/Top '

export const routes = (
  <Routes>
    <Route index element={<Top />} />
    <Route path='/login' element={<Login />} />
    <Route path='/journal' element={<Journal />} />
    <Route path='/journal/:id' element={<JournalDetail />} />
    <Route path='/pets' element={<Pets />} />
    <Route path='*' element={<Error />} />
  </Routes>
)
