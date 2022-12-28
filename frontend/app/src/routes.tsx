import { Routes, Route } from 'react-router-dom'

import { Journal } from '@/pages/Journal'
import { JournalDetail } from '@/pages/JournalDetail'
import { Login } from '@/pages/Login'
import { Top } from '@/pages/Top'


export const routes = (
  <Routes>
    <Route index element={<Top />} />
    <Route path='Login' element={<Login />} />
    <Route path='Journal' element={<Journal />} />
    <Route path='JournalDetail' element={<JournalDetail />} />
  </Routes>
)