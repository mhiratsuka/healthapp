import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet'

import { EbGaramond, LibreBaskerville, Serif } from '@/style/ts/tokens'

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
      <Box component='main' sx={{ ...style }}>
        {children}
        <Box component='footer' sx={{ textAlign: 'center' }}>
          © {year} healthapp
        </Box>
      </Box>
    </>
  )
}

const style = {
  height: '100vh',
  fontFamily: `${LibreBaskerville}, ${EbGaramond}, ${Serif}`,
  margin: '2rem',
}
