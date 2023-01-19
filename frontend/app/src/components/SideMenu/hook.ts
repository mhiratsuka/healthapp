import { useMediaQuery } from '@mui/material'
import { Theme } from '@mui/material/styles'

export const useSideMenu = (): { isTablet: boolean } => {
  return {
    isTablet: useMediaQuery((theme: Theme) => theme.breakpoints.down('md')),
  }
}
