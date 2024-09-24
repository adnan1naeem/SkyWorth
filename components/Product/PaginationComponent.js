import React from 'react';
import { Pagination, Grid } from '@mui/material';

const PaginationComponent = ({ page, onPageChange, totalProducts, productsPerPage }) => (
  <Grid container justifyContent="center" sx={{ mt: 4, mb: 4 }}>
    <Pagination
      count={Math.ceil(totalProducts / productsPerPage)}
      page={page}
      onChange={onPageChange}
      color="primary"
    />
  </Grid>
);

export default PaginationComponent;
