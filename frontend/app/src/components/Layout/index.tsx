import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'
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
      <Box component='main' sx={{ ...style }}>
        {children}
        <Box
          component='footer'
          sx={{
            textAlign: 'center',
            color: Main,
            padding: '1rem',
            fontSize: '1rem',
            position: { md: 'absolute' },
            bottom: { md: 0 },
            width: { md: '100%' },
          }}
        >
          © {year} moniPetHealth
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
