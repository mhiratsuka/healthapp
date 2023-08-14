import { useMediaQuery } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useState } from 'react'

export const useSideMenu = (): {
  isLargeScreen: boolean
  isOpen: boolean
  onSettingClick: () => void
} => {
  const [open, setOpen] = useState(false)

  const handleSettingClick = (): void => {
    setOpen(!open)
  }

  return {
    isLargeScreen: useMediaQuery((theme: Theme) => theme.breakpoints.up('lg')),
    isOpen: open,
    onSettingClick: handleSettingClick,
  }
}
