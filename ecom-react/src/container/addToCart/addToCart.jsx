import React from 'react'
import { useLocation } from 'react-router'
import { Card, Typography, CardMedia, CardContent, Box, Button } from '@mui/material'

const addToCart = () => {

    const location = useLocation()
    const { product} = location.state|| {}
    console.log(product)
    const [quantity, setQuantity] = React.useState(1)

    if(!product){
        return <Typography>('No product found')</Typography>
    }

    const handleDecrease = () => {
      setQuantity(prev => (prev > 1 ? prev - 1 : 1))
    }

    const handleIncrease = () => {
      setQuantity(prev => prev + 1)
    }

    const totalAmount = (product.price * quantity).toFixed(2);

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

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='body1' sx={{mr : 2}}>Quantity : </Typography>
              <Button variant='outlined' onClick={handleDecrease}>-</Button>
              <Typography sx={{mx : 2}}>{quantity}</Typography>
              <Button variant='outlined' onClick={handleIncrease}>+</Button>
            </Box>

            <Typography>
              Total: ${totalAmount}
            </Typography>            
        </CardContent>
      </Card>
    </div>
  )
}

export default addToCart
