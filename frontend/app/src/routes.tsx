import { Routes, Route } from 'react-router-dom'
import { Top } from '@/pages/Top'
import { Login } from '@/pages/Login'
import { Journal } from '@/pages/Journal'
import { JournalDetail } from '@/pages/JournalDetail'


export const routes = (
  <Routes>
    <Route index element={<Top />} />
    <Route path='Login' element={<Login />} />
    <Route path='Journal' element={<Journal />} />
    <Route path='JournalDetail' element={<JournalDetail />} />
  </Routes>
)