import { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import { Box, SxProps } from '@mui/material'

export const Layout: FC<{ title: string; children?: ReactNode; mainSxProps?: SxProps }> = ({ title, children, mainSxProps }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Box component='main' height='100vh' sx={mainSxProps}>
        {children}
      </Box>
    </>
  )
}