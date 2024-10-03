import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Result from "../../components/Search/Result";
import SearchBar from "../../components/Search/SearchBar";
import { products } from "../../components/Product/ProductData.json";
import ProductCard from "../../components/Product/ProductCard";
import PaginationComponent from "../../components/Product/PaginationComponent";

const Search = () => {
  const router = useRouter();
  const { query } = router.query;

  const handleFilterChange = (updatedFilters) => {
    setSelectedFilters(updatedFilters);
    setPage(1);
  };

  const filteredProducts = products.filter((product) => {
    if (product.name.toLowerCase().includes(query?.toLowerCase() || "")) {
      return true;
    }
    return false;
  });
  console.log(filteredProducts, "hello");




  return (
    <Box sx={{ p: 3 }}>
      <Result resultSearch={query} />
      {filteredProducts.length > 0 ? (
        <Grid item xs={12} sm={9} sx={{mt:'8%'}}>
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} sx={{textAlign:'-webkit-center'}} key={product.id}>
                <ProductCard product={product} onClick={() => handleOpenModal(product)} handleNavigation={() => handleNavigation(product)} />
              </Grid>
            ))}
          </Grid>
         
        </Grid>
      ) : (
        <SearchBar />
      )}
    </Box>
  );
};

export default Search;
