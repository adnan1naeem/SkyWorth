import React, { useState } from 'react';
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    Grid,
    useMediaQuery,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';

const RelatedProducts = ({ products }) => {
    const [startIndex, setStartIndex] = useState(0);
    const isLg = useMediaQuery('(min-width:1280px)');
    const isMd = useMediaQuery('(min-width:920px)');
    const isSm = useMediaQuery('(min-width:630px)');
    const isxs = useMediaQuery('(max-width:620px)');
    const router = useRouter();
    // Set items per page based on screen size
    const itemsPerPage = isLg ? 4 : isMd ? 3 : isSm ? 2 :isxs?1: 1; // 4 for lg

    const handleNext = () => {
        if (startIndex + itemsPerPage < products.length) {
            setStartIndex((prev) => prev + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (startIndex - itemsPerPage >= 0) {
            setStartIndex((prev) => prev - itemsPerPage);
        }
    };
    const handleNavigation=(product)=>{
        console.log(product?.id)
        router.push(`/product/${product.id}`);
      }
    return (
        <Box sx={{ padding: 4, marginBottom: '30px' }}>
            <Typography variant="h5" fontSize={'26px'} sx={{ borderBottom: '1px solid #000000', paddingBottom: '8px' }} gutterBottom>
                Related Products
            </Typography>
            <Box display="flex" alignItems="center">
                <IconButton onClick={handlePrev} sx={{ color: '#2969B0' }} disabled={startIndex === 0}>
                    <ArrowBackIcon />
                </IconButton>
                <Grid container spacing={2}>
                    {products.slice(startIndex, startIndex + itemsPerPage).map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                            <Card onClick={()=>handleNavigation(product)} sx={{ display: 'flex', alignItems:{xs:"center",sm:'center',md:"center",lg:"flex-start"},flexDirection:{xs:"column",sm:'column',md:'column',lg:'row'}, borderRadius: 0, boxShadow: 'none', marginBottom: 2 }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: '100px', height: '100px', objectFit: 'contain' }}
                                    image={product.image}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ alignContent: 'center', paddingLeft: '5px' }} fontSize={14} component="h2">
                                        {product.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <IconButton onClick={handleNext} sx={{ color: '#2969B0' }} disabled={startIndex + itemsPerPage >= products.length}>
                    <ArrowForwardIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default RelatedProducts;
