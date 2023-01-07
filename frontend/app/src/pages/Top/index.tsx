import { Box } from '@mui/material'
import { FC } from 'react'

import { Layout } from '@/components/Layout'

export const Top: FC = () => {
  return (
  <Layout title={'top'}>
    <nav>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>healthapp</div>
        <div>login</div>
      </Box>
    </nav>
    <Box>Top page</Box>
  </Layout>
  )
}
