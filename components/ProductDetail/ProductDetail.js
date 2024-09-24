import React, { useState } from 'react';
import { Grid, Container, Box } from '@mui/material';
import Breadcrumb from '../BreadCrumb';
import ProductDisplay from './ProductDisplay';

const ProductDetail = (product) => {
  return (
    <Box>
      <ProductDisplay product={product}/>
    </Box>
  );
};

export default ProductDetail;
