import React, { useCallback } from 'react'
import { useState } from 'react'
import { AppBar, Toolbar, Box, Typography, IconButton, InputBase, Menu, MenuItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/users/userSlicer'
import { useNavigate } from 'react-router'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { debounce } from 'lodash'
import { setSearchTerm } from '../store/products/productSlicer'


const Navbar = () => {
  const { userInfo } = useSelector((state) => state.users);
  const { count } = useSelector((state) => state.product);
  const [anchor, setAnchor] = useState(null)
  const [searchInput, setSearchInputState] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(userInfo)
  console.log(count)


  const debounceSearch = useCallback(
    debounce((value) => {
      dispatch(setSearchTerm(value))
    }, 500)

  )

  const handleSearchChange = (e) => {
    setSearchInputState(e.target.value)
    debounceSearch(e.target.value)
  }

  const handleMenuOpen = (e) => {
    setAnchor(e.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchor(null)
  }

  const handleLogout = () => {
    dispatch(logout(userInfo))
    navigate('/')
  }

  return (
    <>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ width: '25%' }}>
            Arbuzz
          </Typography>

          <Box sx={{ display: 'flex', width: '50%', alignItems: 'center' }}>
            <SearchIcon sx={{ color: 'grey', cursor: 'pointer', mr: '1', position: 'relative', left: '35px', zIndex: '9' }} />
            <InputBase value={searchInput} onChange={handleSearchChange} sx={{ width: '100%', height: '25', backgroundColor: 'white', borderRadius: '15px', padding: '5px 8px' }} />
          </Box>

          <Box sx={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography variant='body1' sx={{ mr: 3 }}>
              {userInfo?.username || 'Guest'}
            </Typography>
            <IconButton color='inherit' sx={{ width: '25%' }}>
              <ShoppingCartIcon sx={{ px: 1 }} />
              {count > 0 && (
                <Typography
                  variant='caption'
                  sx={{
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    width: 20,
                    height: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: -5,
                    right: 30,
                    fontSize: '0.75rem',
                  }}
                >{count}</Typography>
              )}
              <AccountCircleIcon onClick={handleMenuOpen} sx={{ px: 1 }} />
            </IconButton>

            <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={handleMenuClose}>
              <MenuItem onClick={() => { handleLogout(), handleMenuClose() }}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
