import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductRequest } from '../../store/products/productSlicer';
import { Grid } from '@mui/material';
import ProductCard from '../../component/ProductCard';

const Product = () => {

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  console.log(products, loading, error)

  useEffect(() => {
    dispatch(fetchProductRequest())
  }, [dispatch])

  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <Grid container spacing={2} sx={{ width: '100%', maxWidth: '1100px', margin: '0 auto', marginTop: '40px', marginBottom: '40px' }}>
        {products && products.map((item) => (
          <Grid item key={item.id}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Product
