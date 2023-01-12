import { Box, Typography, Button } from '@mui/material'
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
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box>
          <Typography variant='h1'>Monitor Your pet health</Typography>
          <Button>Start healthapp</Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            component='img'
            src='/top-pet.jpg'
            alt='top pet image'
            sx={{
              maxWidth: '100%',
              height: 'auto',
            }}
          ></Box>
        </Box>
      </Box>
      <Box></Box>
    </Layout>
  )
}

const Nav = styled('nav')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))
