import { createTheme } from '@mui/material'


export const themes = createTheme({
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
    contrastThreshold: 4.5
  },
})
