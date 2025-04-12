import React from 'react'
import { AppBar, Toolbar, Box, Typography, IconButton, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.users);
  console.log(userInfo)

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
            {/* <Typography variant='body1' sx={{ mr: 1 }}>
              {userInfo?.username || userInfo?.name || 'Guest'}
            </Typography> */}
            <IconButton color='inherit' sx={{ width: '20%' }}>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
