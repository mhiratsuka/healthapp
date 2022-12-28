import { ThemeProvider } from '@mui/material'
import { FC } from 'react'

import { themes } from '@/material/theme'
import { routes } from '@/routes'

const App: FC = () => {
  return (
    <ThemeProvider theme={themes}>
      {routes}
    </ThemeProvider>
  )
}

export default App