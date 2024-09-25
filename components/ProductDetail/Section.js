import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Tabs, Tab, Paper, Divider, Link } from '@mui/material';

const ProductDetailPage = ({product}) => {
    const [tabValue, setTabValue] = useState(0);
    console.log(product)
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box container spacing={4} sx={{ maxWidth: '1200px', margin: {xs:"none",md:'auto'}, padding: 2 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={0} sx={{ background: 'none', padding: {xs:'0px',md:'16px'} }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            indicatorColor="transparent"
                            textColor="inherit"
                            variant="fullWidth"
                            scrollButtons="auto"
                            sx={{
                                borderColor: 'divider',
                                backgroundColor: '#F4F4F4',
                                '& .Mui-selected': {
                                    backgroundColor: 'white',
                                    color: 'blue',
                                    borderTop: '3px solid blue',
                                },
                                '& .MuiTab-root': {
                                    color: 'black',
                                },
                            }}
                        >
                            <Tab label="Product Overview" sx={{ fontSize: { xs: 10, md: 14 }, fontWeight: 500 }} />
                            <Tab label="Specifications" sx={{ fontSize: { xs: 10, md: 14 }, fontWeight: 500 }} />
                            <Tab label="Downloads" sx={{ fontSize: { xs: 10, md: 14 }, fontWeight: 500 }} />
                        </Tabs>

                        <Box sx={{ padding: '16px 30px', borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0', background: 'white', borderBottom: '1px solid #e0e0e0', flex: 1 }}>
                            {tabValue === 0 && (
                                <Typography variant="body1" fontSize={'16px'} paragraph>
                                    {product?.overview}
                                </Typography>
                            )}
                            {tabValue === 1 && (
                                <Typography variant="body1" fontSize={'16px'} paragraph>
                                    {product?.specifications}
                                </Typography>
                            )}
                            {tabValue === 2 && (
                                <Typography variant="body1" fontSize={'16px'} paragraph>
                                    {product?.downloads}
                                </Typography>
                            )}
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} sx={{ paddingRight: { md: 0, lg: '7%' } }}>
                    <Typography variant="body2" sx={{ textAlign: 'center' }}>
                        <Link href="#" underline="none" color="inherit" sx={{ marginRight: '8px', fontSize: '14px' }}>
                            Free Shipping & Returns
                        </Link>
                        |
                        <Link href="#" underline="none" color="inherit" sx={{ marginX: '8px', fontSize: '14px' }}>
                            One Year Warranty
                        </Link>
                        |
                        <Link href="#" underline="none" color="inherit" sx={{ marginLeft: '8px', fontSize: '14px' }}>
                            Support Center
                        </Link>
                    </Typography>
                    <Divider sx={{ marginY: 2 }} />
                    <Box sx={{ border: '2px solid #cccccc', borderRadius: '0px', marginTop: '30px', }}>
                        <Box sx={{ flex: 1, padding: {xs:'20px 0px 10px 10px',md:'40px 0px 10px 30px'} }}>
                            <Typography variant="h6" fontSize={"22px"} fontFamily={'SKSans,sans-serif'} fontWeight={"400"} gutterBottom>
                                Have A Question?
                            </Typography>
                            <Typography variant="body2" fontSize={"18px"} fontFamily={'SKSans,sans-serif'} fontWeight={400} paragraph>
                                Our experts are ready to help you with any questions you have.
                            </Typography>
                            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', }}>
                            <Button sx={{ fontSize: { sm:'10px',md: '12px', lg: '16px' }, padding: {sm:'12px 30px'}, border: '2px solid #cccccc', color: 'black', borderRadius: 30, marginTop: '10px',alignSelf:'center' }} fontFamily={'SKSans,sans-serif'}>
                                Contact Us
                            </Button>

                        <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'flex-end', alignSelf: 'flex-end' }}>
                            <img src="https://www.skyworthusa.com/cdn/shop/files/support-chat_172x_crop_center.png?v=1688406493" alt="Customer Support" style={{ maxWidth: '150px', height: 'auto' }} />
                        </Box>
                        </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductDetailPage;
