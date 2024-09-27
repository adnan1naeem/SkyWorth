import React, { useState, useRef } from 'react';
import { Box, Typography, Grid, Tabs, Tab, Paper } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { tabContent, tabLabels } from './contactData'

const ProductDetailPage = ({ product }) => {
    const [tabValue, setTabValue] = useState(0);
    const tabContentRef = useRef(null);
    const isInView = useInView(tabContentRef, { once: true });

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const renderBoxes = (content) => {
        const boxes = content.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                    sx={{
                        padding: { xs: "20px", md: "20px", lg: "40px" },
                        border: '1px solid #e0e0e0',
                        minHeight: '300px',
                        backgroundColor: 'white',
                        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <motion.div
                        key={tabValue}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                    >
                        <Typography variant="h6" fontSize={'20px'} fontFamily={"Kanit"} fontWeight="400" color='#0069CB' paragraph>
                            {item.heading}
                        </Typography>
                    </motion.div>
                    <Typography variant="h6" fontSize={'14px'} fontFamily={"Kanit"} fontWeight="400" color='#000000' paragraph>
                        {item.address}
                    </Typography>
                    <Box alignContent={'baseline'} sx={{ height: '100%' }}>
                        <Typography variant='body2' fontSize={'14px'} fontFamily={"Kanit"} fontWeight="300" color='#000000'>
                            Name: {item.name}
                        </Typography>
                        <Typography variant='body2' fontSize={'14px'} fontFamily={"Kanit"} fontWeight="400" color='#000000'>
                            Tel: {item.number}
                        </Typography>
                        <Typography variant="body2" fontSize={'14px'} fontFamily={"Kanit"} fontWeight="400" color='#000000'>
                            Email: {item.email}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        ));
        return (
            <Grid container spacing={2} alignItems="flex-start">
                {boxes}
            </Grid>
        );
    };
    return (
        <Box sx={{ backgroundColor: '#F4F7F9' }}>
            <Box container spacing={4} sx={{ margin: { xs: "none", md: 'auto' }, padding: 2 }} maxWidth={"xl"}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50, }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        fontFamily={"Kanit"}
                        sx={{ marginBottom: 0, marginTop: '5%' }}
                    >
                        Our Service Center Location
                    </Typography>
                <Typography
                    align="center"
                    fontFamily={"Kanit"}
                    sx={{ marginBottom: '5%', fontSize: 12, marginTop: 0 }}
                >
                    Kindly contact our service centers in your location below for support and service.
                </Typography>
                </motion.div>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Paper elevation={0} sx={{ background: 'none', padding: { xs: '0px', md: '16px' } }}>
                            <Tabs
                                value={tabValue}
                                onChange={handleTabChange}
                                indicatorColor="transparent"
                                textColor="inherit"
                                scrollButtons="auto"
                                sx={{
                                    padding: '0px 20px',
                                    borderColor: 'divider',
                                    borderBottom: '1px solid #B7D3EC',
                                    '& .MuiTabs-flexContainer': {
                                        flexWrap: 'wrap',
                                        justifyContent: 'center'
                                    },
                                    '& .Mui-selected': {
                                        backgroundColor: '#0069CB',
                                        color: 'white !important',
                                        borderTop: '3px solid #0069CB',
                                        borderTopLeftRadius: 5,
                                        borderTopRightRadius: 5,
                                    },
                                    '& .MuiTab-root': {
                                        color: 'black',
                                        padding: '0 6px',
                                        overflow: 'visible',
                                        whiteSpace: 'nowrap',
                                        width: 'auto',
                                    },
                                }}
                            >
                                {tabLabels.map((label, index) => (
                                    <Tab
                                        key={index}
                                        label={label}
                                        sx={{ fontSize: { xs: 10, md: 14 }, fontWeight: 400, fontFamily: 'Kanit' }}
                                    />
                                ))}
                            </Tabs>
                            <motion.div
                                key={tabValue}
                                ref={tabContentRef} // Adding ref to the animated container
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Animate based on in-view
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <Box sx={{
                                    marginTop: '20px',
                                    padding: '16px 50px',
                                    flex: 1,
                                }} maxWidth={"xl"}>
                                    {renderBoxes(tabContent[tabValue])}
                                </Box>
                            </motion.div>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ProductDetailPage;
