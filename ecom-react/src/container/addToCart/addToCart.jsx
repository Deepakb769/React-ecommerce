import React from 'react'
import { useLocation } from 'react-router'
import { Card, Typography, CardMedia, CardContent, Box } from '@mui/material'

const addToCart = () => {

    const location = useLocation()
    const { product} = location.state|| {}
    console.log(product)
    const [quantity, setQuantity] = React.useState(1)

    if(!product){
        return <Typography>('No product found')</Typography>
    }

  return (
    <div>
      <Card sx={{ display: 'flex', padding : '20px' }}>
        <CardMedia
            component='img'
            sx={{height: 300, width: 300, objectFit: 'contain'}}
            image={product.image}
        />
        <CardContent >
            <Typography variant='h4' sx={{ my: 4 }}>{product.title}</Typography>
            <Typography sx={{ fontSize : '18px', my: 4 }}>{product.description}</Typography>
            <Typography sx={{ my: 4 }}>${product.price}</Typography>
            <Typography sx={{ my: 4 }}>Quantity: </Typography>
            
        </CardContent>
      </Card>
    </div>
  )
}

export default addToCart
