import React from 'react';
import { Box } from '@mui/material';
import ProductDisplay from './ProductDisplay';

const ProductDetail = (product) => {
  return (
    <Box>
      <ProductDisplay product={product}/>
    </Box>
  );
};

export default ProductDetail;
