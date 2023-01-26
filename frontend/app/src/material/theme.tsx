import { createTheme, ThemeOptions } from '@mui/material'

import { Primary, Secondary, Warning, Info, Success } from '@/style/ts/tokens'

import { typographyTheme } from './components/Typography'

const baseTheme: ThemeOptions = {
  palette: {
    primary: {
      main: Primary,
    },
    secondary: {
      main: Secondary,
    },
    warning: {
      main: Warning,
    },
    info: {
      main: Info,
    },
    success: {
      main: Success,
    },
    contrastThreshold: 4.5,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '62.5%',
        },
      },
    },
  },
}

const themeOptions = [typographyTheme]

export const themes = createTheme(baseTheme, ...themeOptions)
