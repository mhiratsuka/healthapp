import { useMediaQuery } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useState } from 'react'

export const useSideMenu = (): {
  isLargeScreen: boolean
  onMenuHandleToggle: () => void
  isMenuOpen: boolean
  isSettingOpen: boolean
  onSettingClick: () => void
  selectedMenu: number
} => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)

  const handleMenuToggle = (): void => {
    setMenuOpen(!menuOpen)
  }

  const handleSettingClick = (): void => {
    setOpen(!open)
  }

  return {
    isLargeScreen: useMediaQuery((theme: Theme) => theme.breakpoints.up('lg')),
    onMenuHandleToggle: handleMenuToggle,
    isMenuOpen: menuOpen,
    isSettingOpen: open,
    onSettingClick: handleSettingClick,
  }
}
