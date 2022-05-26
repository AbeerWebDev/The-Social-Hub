import { Group } from '@mui/icons-material';
import { Article } from '@mui/icons-material';
import { Storefront } from '@mui/icons-material';
import { Settings } from '@mui/icons-material';
import { ModeNight } from '@mui/icons-material';
import { AccountBox } from '@mui/icons-material';
import { Person } from '@mui/icons-material';
import { Home } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react'

const Sidebar = () => {
  return (
    <Box 
    flex={1} 
    padding={2} 
    sx={{display: {xs: 'none', sm: 'block' }}}
    >
    <Box position='fixed'>
    <List>
          <ListItem disablePadding>
            <ListItemButton Component='a' href='#Home'>
              <ListItemIcon>
               <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton Component='a' href='#simple-list'>
              <ListItemIcon>
               <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton Component='a' href='#simple-list'>
              <ListItemIcon>
               <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton Component='a' href='#simple-list'>
              <ListItemIcon>
               <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton Component='a' href='#simple-list'>
              <ListItemIcon>
               <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton Component='a' href='#simple-list'>
              <ListItemIcon>
               <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton Component='a' href='#simple-list'>
              <ListItemIcon>
               <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
    </List>

    <ListItem disablePadding>
            <ListItemButton Component='a' href='#simple-list'>
              <ListItemIcon>
               <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
          </Box>
    </Box>
  )
}

export default Sidebar