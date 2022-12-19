import { FC } from 'react'
import { Box } from '@mui/material'
import { Layout } from '@/components/Layout'

export const Journal: FC = () => {
  return (
  <Layout title={'journal'}>
    <Box display='flex' flexDirection='column' width='100%'>
      Journal page
    </Box>
  </Layout>
  )
}
