import { Box, Button, Typography } from '@mui/material'
import { FC } from 'react'

import { Layout } from '@/components/Layout'
import { Primary } from '@/style/ts/tokens'


export const Journal: FC = () => {
  return (
  <Layout title={'journal'}>
    <Box display='flex' flexDirection='column' width='100%'>
      <Typography variant='h1' gutterBottom color={Primary}>Journal page</Typography>
      <Button>Test</Button>
    </Box>
  </Layout>
  )
}
