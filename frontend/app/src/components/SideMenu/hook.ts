import { useMediaQuery } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useState } from 'react'

export const useSideMenu = ({
  pageNum,
}: {
  pageNum: number
}): {
  isLargeScreen: boolean
  onMenuHandleToggle: () => void
  isMenuOpen: boolean
  isSettingOpen: boolean
  onSettingClick: () => void
} => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [open, setOpen] = useState(pageNum > 0)

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
