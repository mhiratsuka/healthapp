import { Box } from '@mui/material'
import Link from '@mui/material/Link'
import { FC } from 'react'

import { Layout } from '@/components/Layout'

export const Top: FC = () => {
  return (
  <Layout title={'top'}>
    <nav>
      <Link href="/">
        <img src='/icon.svg' width='35px' />
      </Link>
      <div>Log in</div>
    </nav>
    <Box>Top page</Box>
  </Layout>
  )
}
