import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import MenuIcon from '@mui/icons-material/Menu'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'
import SettingsIcon from '@mui/icons-material/Settings'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import { FC, useState } from 'react'

import { useSideMenu } from './hook'

export const SideMenu: FC<{ drawerWidth: number }> = ({ drawerWidth }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isLargeScreen, isOpen, onSettingClick } = useSideMenu()

  const handleMenuToggle = (): void => {
    setMenuOpen(!menuOpen)
  }

  const drawer = (
    <>
      <Toolbar>
        <Link href='/'>
          <Box component='img' src='/icon.svg' sx={{ width: '35px' }} />
        </Link>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='/journal'>
            <ListItemIcon>
              <MonitorHeartIcon />
            </ListItemIcon>
            <ListItemText primary='Record' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='/journal'>
            {/* TODO: Fixed later */}
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Setting' />
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isOpen} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary='Your pets' />
              </ListItemButton>
            </List>
          </Collapse>
        </ListItem>
      </List>
      {/* <Divider /> */}
      {/* <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='/journal'> */}
      {/* TODO: Fixed later */}
      {/* <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItemButton>
        </ListItem>
      </List> */}
    </>
  )

  return (
    <Box
      component='nav'
      aria-label='menu'
      width={isLargeScreen ? `${drawerWidth}px` : 'inherit'}
    >
      <IconButton
        color='inherit'
        aria-label='open menu'
        edge='start'
        onClick={handleMenuToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant={isLargeScreen ? 'permanent' : 'temporary'}
        open={menuOpen}
        onClose={handleMenuToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '.MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
