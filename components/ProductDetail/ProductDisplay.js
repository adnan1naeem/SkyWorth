import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

const ProductDisplay = (product) => {
    const data = product?.product?.product;
    const [mainImage, setMainImage] = useState(data.image[0]);

    return (
        <Grid container spacing={4} sx={{ maxWidth: '1200px', margin: { xs: 'none', md: 'auto' }, padding: 2 }}>
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
                <Card sx={{ padding: { xs: 0, md: 2 }, boxShadow: 'none', background: 'transparent' }}>
                    <CardContent sx={{ paddingLeft: 0 }}>
                        <Typography sx={{ fontSize: 14, fontWeight: 400, backgroundColor: '#BEFFDA', padding: '5px 10px', width: 80, borderRadius: 20, textAlign: 'center', marginBottom: '20px' }} gutterBottom>
                            {"In Stock"}
                        </Typography>
                        <Typography sx={{ fontSize: { xs: "30px", sm: '35px', md: '40px', lg: '48px' }, lineHeight: 1, fontWeight: 400 }} gutterBottom>
                            {data?.name}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#2969B0', fontSize: 14, fontWeight: 400 }} gutterBottom>
                            Available Now
                        </Typography>
                        {data?.description &&
                            <Typography fontSize={14} gutterBottom>
                                {data?.description}
                            </Typography>}
                        {data?.features?.length > 0 && <ul style={{ marginLeft: 20, paddingLeft: 0 }}>
                            <Typography variant="h6" component="h2" gutterBottom>
                                Features:
                            </Typography>

                            {data?.features?.map((feature, index) => (
                                <li key={index}>
                                    <Typography fontSize={'14px'} sx={{ marginBottom: '5px' }}>{feature}</Typography>
                                </li>
                            ))}
                        </ul>}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ProductDisplay;
