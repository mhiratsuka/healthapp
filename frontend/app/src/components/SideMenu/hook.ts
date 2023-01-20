import { useMediaQuery } from '@mui/material'
import { Theme } from '@mui/material/styles'

export const useSideMenu = (): { isLargeScreen: boolean } => {
  return {
    isLargeScreen: useMediaQuery((theme: Theme) => theme.breakpoints.up('lg')),
  }
}
