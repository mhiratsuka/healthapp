import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FC } from 'react'

import { Layout } from '@/components/Layout'
import { LinkTag } from '@/components/LinkTag'

export const Top: FC = () => {
  return (
    <Layout title={'top'}>
      <Nav>
        <LinkTag link='/'>
          <img src='/icon.svg' width='35px' />
        </LinkTag>
        <LinkTag link='/login'>Log in</LinkTag>
      </Nav>
      <Box>Top page</Box>
    </Layout>
  )
}

const Nav = styled('nav')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))
