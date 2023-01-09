import { Box, Typography } from '@mui/material'
import { FC } from 'react'

import { Layout } from '@/components/Layout'

import { UseJournalDetail } from './hooks'

export const JournalDetail: FC = () => {
  const { journal } = UseJournalDetail()

  return (
    <Layout title={'journal detail'}>
      <Box>
        <Typography variant='h1'>JournalDetail page</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        ></Box>
      </Box>
    </Layout>
  )
}
