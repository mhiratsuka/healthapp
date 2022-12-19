import { FC } from 'react'
import { routes } from '@/routes'
import { themes } from '@/material/theme'
import { ThemeProvider } from '@mui/material'

const App: FC = () => {
  return (
    <ThemeProvider theme={themes}>
      {routes}
    </ThemeProvider>
  )
}

export default App