import { Box } from '@mui/material'
import { FC } from 'react'

import { Layout } from '@/components/Layout'

import { UseJournalDetail } from './hooks'


export const JournalDetail: FC = () => {
  const { journal } = UseJournalDetail()

  return (
    <Layout title={'journal detail'}>
      <Box>JournalDetail page</Box>
    </Layout>
  )
}

