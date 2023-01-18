import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'
import SettingsIcon from '@mui/icons-material/Settings'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import { FC, useState } from 'react'
const drawerWidth = 240

export const SideMenu: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = (): void => {
    setMenuOpen(!menuOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MonitorHeartIcon />
            </ListItemIcon>
            <ListItemText primary='Record' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Setting' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  )

  return (
    <>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={handleMenuToggle}
        // sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant='temporary'
        open={menuOpen}
        onClose={handleMenuToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '.MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      {/* <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer> */}
    </>
  )
}

// const MainContainer = styled(Box)<{ component: ElementType }>(() => ({
//   fontFamily: `${LibreBaskerville}, ${EbGaramond}, ${Serif}`,
//   margin: '2rem',
// }))

// const Footer = styled(Box)<{ component: ElementType }>(({ theme }) => ({
//   textAlign: 'center',
//   color: Main,
//   padding: '1rem',
//   fontSize: '1rem',
//   [theme.breakpoints.up('md')]: {
//     position: 'fixed',
//     bottom: 0,
//     width: '100%',
//   },
// }))
