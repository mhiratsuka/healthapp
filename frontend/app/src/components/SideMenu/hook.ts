import { useMediaQuery } from '@mui/material'
import { Theme } from '@mui/material/styles'
import React, { useState } from 'react'

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
  const [selectedMenu, setSelectedMenu] = useState(1)

  const handleMenuToggle = (): void => {
    setMenuOpen(!menuOpen)
  }

  const handleSettingClick = (): void => {
    setOpen(!open)
  }

  const handleMenuClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ): void => {}

  return {
    isLargeScreen: useMediaQuery((theme: Theme) => theme.breakpoints.up('lg')),
    onMenuHandleToggle: handleMenuToggle,
    isMenuOpen: menuOpen,
    isSettingOpen: open,
    onSettingClick: handleSettingClick,
    selectedMenu,
    handleMenuClick,
  }
}
