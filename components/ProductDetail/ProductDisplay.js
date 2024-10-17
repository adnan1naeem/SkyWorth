import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';
import Breadcrumb from '../BreadCrumb';

const ProductDisplay = (product) => {
    let data = '';
    data = product?.product?.product;
    const [mainImage, setMainImage] = useState(null);
    useEffect(() => {
        setMainImage(data?.image[0])
    }, [product])

    return (
        <>
            <Container sx={{ maxWidth: '1200px', margin: { xs: 'none', md: 'none' } }}>
                <Breadcrumb products={data} paddingTop={{ xs: '28%', sm: '18%', md: '10%', lg: '5%', xl: '6%' }} />
            </Container>
            <Grid container spacing={4} sx={{ maxWidth: '1200px', margin: { xs: 'none', md: '0px auto' }, padding: 2 }}>
                <Grid item xs={12} md={6} sx={{ marginBottom: 2, paddingRight: { xs: 0, md: '32px' } }}>
                    <Card sx={{ padding: "20px", borderRadius: 0 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={mainImage}
                            alt="Product Image"
                            sx={{ objectFit: 'cover' }}
                        />
                    </Card>
                    <Box display="flex" justifyContent="center" mt={4}>
                        <Grid container spacing={1}>
                            {data?.image?.map((img, index) => (
                                <Grid item xs={2.4} key={index}>
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        style={{
                                            width: '100%',
                                            cursor: 'pointer',
                                            border: mainImage === img ? '2px solid blue' : 'none',
                                        }}
                                        onClick={() => setMainImage(img)}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ paddingLeft: { xs: 0, md: 2 } }}>
                    <Card sx={{ padding: { xs: 0, md: '0px 16px' }, boxShadow: 'none', background: 'transparent' }}>
                        <CardContent sx={{ padding: '0px 16px' }}>
                            <Typography sx={{ fontSize: { xs: "30px", sm: '35px', md: '40px', lg: '48px', }, lineHeight: 1, fontWeight: 300 }} gutterBottom>
                                {data?.name}
                            </Typography>
                            <Typography sx={{ color: '#2969B0', fontSize: 18, fontWeight: 600 }} gutterBottom>
                                Now Available :
                            </Typography>
                            {data?.description &&
                                <Typography fontSize={14} gutterBottom>
                                    {data?.description}
                                </Typography>}
                            {data?.features?.length > 0 && <ul style={{ marginLeft: 20, paddingLeft: 0 }}>
                                {data?.featurelist?.map((feature, index) => (
                                    <li key={index}>
                                        <Typography fontSize={'14px'} fontWeight={"300"} sx={{ marginBottom: '5px' }}>{feature}</Typography>
                                    </li>
                                ))}
                            </ul>}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid></>
    );
};

export default ProductDisplay;
