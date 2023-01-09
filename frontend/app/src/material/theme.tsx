import { createTheme, ThemeOptions } from '@mui/material'

import { typographyTheme } from './components/Typography'

const baseTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#006DCF',
    },
    secondary: {
      main: '#9B61A3',
    },
    warning: {
      main: '#FF8F48',
    },
    info: {
      main: '#00A0FF',
    },
    success: {
      main: '#0CA998',
    },
    contrastThreshold: 4.5,
  },
}

const themeOptions = [typographyTheme]

export const themes = createTheme(baseTheme, ...themeOptions)
