import React from 'react'
import { useState } from 'react'
import { AppBar, Toolbar, Box, Typography, IconButton, InputBase, Menu, MenuItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../store/users/userSlicer'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.users);
  const [anchor, setAnchor] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(userInfo)

  const handleMenuOpen = (e) => {
    setAnchor(e.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchor(null)
  }

  const handleLogout = () => {
    dispatch(logout(userInfo))
    navigate('/login')
  }

  return (
    <>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ width: '20%' }}>
            Arbuzz
          </Typography>

          <Box sx={{ display: 'flex', width: '60%', alignItems: 'center' }}>
            <SearchIcon sx={{ color: 'grey', mr: '1' }} />
            <InputBase placeholder='Search...' sx={{ width: '100%', height: '25', backgroundColor: 'white', borderRadius: '15px', padding: '5px' }} />
          </Box>

          <Box sx={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography variant='body1' sx={{ mr: 1 }}>
              {userInfo?.username || userInfo?.username || 'Guest'}
            </Typography> 
            <IconButton color='inherit' onClick={handleMenuOpen} sx={{ width: '20%' }}>
              <AccountCircleIcon />
            </IconButton>

            <Menu anchorEl={anchor} onClick={handleMenuClose}>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
