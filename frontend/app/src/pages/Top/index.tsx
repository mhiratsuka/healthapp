import { Box, Typography, Button, Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FC, ElementType } from 'react'

import { Layout } from '@/components/Layout'
import { Main } from '@/style/ts/tokens'

export const Top: FC = () => {
  return (
    <Layout title={'top'}>
      <Nav>
        <Link href='/'>
          <Box component='img' src='/icon.svg' sx={{ width: '35px' }} />
        </Link>
        <Link href='/login' color={Main}>
          Log in
        </Link>
      </Nav>
      <MainContainer>
        <HeadingContainer>
          <Typography variant='h1'>Monitor Your pet health</Typography>
          {/* FIXME add login */}
          <Link href='/journal'>
            <Button variant='contained' color='success' size='large'>
              Start moniPetHealth
            </Button>
          </Link>
        </HeadingContainer>
        <ImageContainer>
          <Image component='img' src='/top-pet.svg' alt='top image'></Image>
        </ImageContainer>
      </MainContainer>
    </Layout>
  )
}

const Nav = styled('nav')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}))

const HeadingContainer = styled(Box)(({ theme }) => ({
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}))

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '40%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}))

const Image = styled(Box)<{ component: ElementType; src: string; alt: string }>(
  () => ({
    maxWidth: '100%',
    height: 'auto',
  })
)
