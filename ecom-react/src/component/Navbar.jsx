import React from 'react'
import { AppBar, Toolbar, Box, Typography, IconButton, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Navbar = () => {
  return (
    <>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{width : '20%'}}>
            Arbuzz
          </Typography>

          <Box sx={{ display : 'flex', width : '60%', alignItems : 'center' }}>
            <SearchIcon sx={{ color : 'grey', mr : '1' }} />
            <InputBase placeholder='Search...' sx={{ width: '100%', height : '25', backgroundColor: 'white', borderRadius: '15px', padding: '5px' }}/>
          </Box>

          <IconButton color='inherit' sx={{width : '20%'}}>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
        
    </>
  )
}

export default Navbar
