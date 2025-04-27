import React from 'react'
import { 
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { setCounter } from '../store/products/productSlicer'

const ProductCard = ({product}) => {

  const dispatch = useDispatch()
  const {searchTerm} = useSelector((state) => state.product)
  const navigate = useNavigate()

  const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());

  if(!matchesSearch){
    return null;
  }

  const handleProduct = () => {
    navigate('/addToCart', { state: { product } })
  }

  const handleCart = () => {
    dispatch(setCounter())
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
            <Button size='small' onClick={handleProduct}>View</Button>
            <Button size='small' onClick={handleCart}>Add to Cart</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ProductCard
