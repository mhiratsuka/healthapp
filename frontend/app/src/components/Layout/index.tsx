import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { FC, ElementType, ReactNode } from 'react'
import { Helmet } from 'react-helmet'

import { EbGaramond, LibreBaskerville, Serif, Main } from '@/style/ts/tokens'

import { useLayout } from './hook'

export const Layout: FC<{ title: string; children?: ReactNode }> = ({
  title,
  children,
}) => {
  const { year } = useLayout()
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title}</title>
      </Helmet>
      <MainContainer component='main'>
        {children}
        <Footer component='footer'>© {year} moniPetHealth</Footer>
      </MainContainer>
    </>
  )
}

const MainContainer = styled(Box)<{ component: ElementType }>(() => ({
  fontFamily: `${LibreBaskerville}, ${EbGaramond}, ${Serif}`,
  margin: '2rem',
}))

const Footer = styled(Box)<{ component: ElementType }>(({ theme }) => ({
  textAlign: 'center',
  color: Main,
  padding: '1rem',
  fontSize: '1rem',
  [theme.breakpoints.up('md')]: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
}))
