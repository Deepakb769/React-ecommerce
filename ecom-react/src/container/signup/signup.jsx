import React, { useState } from 'react'
import { FormControl, Box, Typography, TextField, Button, Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { registerRequest } from '../../store/users/userSlicer'

const Signup = () => {
  const dispatch = useDispatch()
  
  const {loading, error, userInfo} = useSelector((state) => state.users)
  const [formData, setFormData] = useState({
    username : '',
    email : '',
    password : ''
  })

  const handleChange = (e) => 
    setFormData({...formData, [e.target.name] : e.target.value})

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(registerRequest(formData))
  }

  return (
    <>
      <Box sx={{ maxWidth : 400, margin : '0 auto', border : 1, p: 4, borderRadius : 1, boxShadow : 4}}>
        <Typography variant='h3' gutterBottom>Register yourself</Typography>

        {error && <Alert severity='error'>{error}</Alert>}
        {userInfo && <Alert severity='success'>Welcome, {userInfo.username}!</Alert>}
        <form onSubmit={handleSignup}>
          <FormControl fullWidth margin='normal'>
            <TextField 
              type="text"
              name="username"
              value={formData.username}
              placeholder="Username"
              onChange={handleChange}
              required
              sx={{my : 4}}
            />
          </FormControl>

          <FormControl fullWidth margin='normal'>
            <TextField 
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your Email"
              onChange={handleChange}
              required
              sx={{my : 4}}
            />
          </FormControl>

          <FormControl fullWidth margin='normal'>
            <TextField 
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your desired Password"
              onChange={handleChange}
              required
              sx={{my : 4}}
            />
          </FormControl>
          <Button variant='contained' type='submit' color='primary' sx={{my : 4}} fullWidth>
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </form>

      </Box>
    </>
  )
}

export default Signup
