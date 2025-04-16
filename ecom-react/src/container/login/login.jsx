// src/components/Login.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../store/users/userSlicer';
import { FormControl, Box, Typography, TextField, Button, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router';

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated, userInfo } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(formData));
    navigate('/product');
  };

  return (
    <div>
      <Box sx={{maxWidth: 400, margin: 'auto', py: 7, px: 4, borderRadius: 1, boxShadow: 3, marginTop: 5}}>
        {/* <Typography variant='h3' gutterBottom>Login</Typography> */}
        <Typography variant='h4' gutterBottom>Welcome back!</Typography>
        <Typography variant='body1' gutterBottom>Login to your account</Typography>

        {isAuthenticated && (<Alert severity='success'> Logged in as {userInfo?.username || 'User'}</Alert>)}

        <form onSubmit={handleSubmit}>
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
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
              required
              sx={{my : 4}}
            />
          </FormControl>

          <Button type="submit" sx={{width: "100%", backgroundColor: 'black', color: 'white', borderRadius: 3}} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
          <Typography>New here, <Link to={'/signup'}>Register yourself</Link></Typography>
          {error && <Alert severity='error'>{error}</Alert>}
        </form>
      </Box>
    </div>
  );
};

export default Login;
