import React from 'react'
import { 
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@mui/material'
import { useNavigate } from 'react-router'

const ProductCard = ({product}) => {

  // const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCart = () => {
    navigate('/addToCart', { state: { product } })
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia 
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
          sx={{objectFit: 'contain'}}
        />
        <CardContent>
            <Typography variant='h6' component="div" noWrap>
                {product.title}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{overflow: "hidden", height: 60}}>
                {product.description}
            </Typography>
            <Typography sx={{ marginTop: '10px' }}>
                ${product.price}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size='small' onClick={handleCart}>View</Button>
            <Button size='small'>Add to Cart</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ProductCard
