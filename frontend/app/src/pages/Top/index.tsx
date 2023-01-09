import { Box } from '@mui/material'
import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'
import { FC } from 'react'

import { Layout } from '@/components/Layout'

export const Top: FC = () => {
  return (
    <Layout title={'top'}>
      <Nav>
        <Link href='/'>
          <img src='/icon.svg' width='35px' />
        </Link>
        <Link href='/login'>Log in</Link>
      </Nav>
      <Box>Top page</Box>
    </Layout>
  )
}

const Nav = styled('nav')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))
