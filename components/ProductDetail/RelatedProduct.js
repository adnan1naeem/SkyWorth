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
    Button,
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
    const itemsPerPage = isLg ? 4 : isMd ? 3 : isSm ? 2 : isxs ? 1 : 1;

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
    const handleNavigation = (product) => {
        console.log(product)
        router.push(`/product/${product.id}`);
    }
    return (
        <Box sx={{ padding: 4, marginBottom: '30px' }}>
            <Typography fontSize={'26px'} onClick={() => router.push(`/product`)} sx={{ borderBottom: '1px solid #00000050', cursor: 'pointer', paddingBottom: '8px', marginBottom: '20px', fontWeight: 300 }} gutterBottom>
                All Products
            </Typography>
            <Box display="flex" alignItems="center">
                <IconButton onClick={handlePrev} sx={{ color: '#2969B0' }} disabled={startIndex === 0}>
                    <ArrowBackIcon />
                </IconButton>
                <Grid container spacing={2}>
                    {products.slice(startIndex, startIndex + itemsPerPage).map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                            <Card sx={{ display: 'flex', alignItems: { xs: "center", sm: 'center', md: "center", lg: "flex-start" }, flexDirection: { xs: "column", sm: 'column', md: 'column', lg: 'column' }, borderRadius: 0, boxShadow: 'none', marginBottom: 2 }}  onClick={() => handleNavigation(product)}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 'auto', cursor: 'pointer' }}
                                    image={product?.image[0]}
                                    alt={product.name}
                                />
                                <CardContent sx={{ alignSelf: 'center', textAlign: 'center' }}>
                                    <Typography fontSize={'16spx'} fontWeight={"400"} fontFamily={"Kanit"} sx={{ alignContent: 'center', paddingLeft: '5px', cursor: 'pointer' }} component="h2">
                                        {product.name}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        onClick={() => handleNavigation(product)}
                                        sx={{
                                            fontSize: '14px',
                                            borderRadius: '50px',
                                            borderWidth: '1px',
                                            borderColor: '#212121',
                                            marginTop: "20px",
                                            textTransform: 'none',
                                            border: '0.7px solid black',
                                            backgroundColor: 'white',
                                            color: '#212121',
                                            fontFamily: 'Kanit',
                                            fontWeight: '300',
                                            padding: '10px 30px',
                                            '&:hover': {
                                                backgroundColor: '#016AC8',
                                                color: '#fff',
                                            },
                                        }}
                                    >
                                        View Product
                                    </Button>
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
