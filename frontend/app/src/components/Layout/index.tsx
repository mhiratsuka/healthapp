import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet'

import { EbGaramond, LibreBaskerville, Serif } from '@/style/ts/tokens'

export const Layout: FC<{ title: string; children?: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title}</title>
      </Helmet>
      <Box component='main' sx={{ ...style }}>
        {children}
      </Box>
    </>
  )
}

const style = {
  height: '100vh',
  fontFamily: `${LibreBaskerville}, ${EbGaramond}, ${Serif}`,
}
