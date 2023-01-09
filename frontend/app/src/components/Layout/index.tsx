import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet'

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
}
