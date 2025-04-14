import React from 'react'
import { Box, Container, Grid, Typography, Link } from '@mui/material'

const Footer = () => {
    return (
        <>
            <Box
                component="footer"
                sx={{
                    backgroundColor: '#1976d2',
                    color: 'white',
                    py: 4,
                    mt: 'auto'
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} sx={{justifyContent: 'space-between'}}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">Company</Typography>
                            <Typography variant="body2">Building cool stuff with React & MUI.</Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">Quick Links</Typography>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Home
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                About
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Contact
                            </Link>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">Quick Links</Typography>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Home
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                About
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Contact
                            </Link>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">Follow Us</Typography>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                Twitter
                            </Link>
                            <Link href="#" color="inherit" underline="hover" display="block">
                                LinkedIn
                            </Link>
                        </Grid>
                    </Grid>

                    <Typography variant="body2" align="center" sx={{ mt: 4 }}>
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer
