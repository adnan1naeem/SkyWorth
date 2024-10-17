import React from 'react';
import { Card, CardContent, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const warrantyData = [
    {
        title: 'QLED Mini',
        warranties: ['2 Years Parts warranty for QLED Mini all models and sizes', '2 Years Panel warranty for QLED Mini all models and sizes'],
    },
    {
        title: 'QLED',
        warranties: [
            '2 Years Parts warranty for QLED all models and sizes',
            '2 Years Panel warranty for QLED all models and sizes',
        ],
    },
    {
        title: 'UHD',
        warranties: ['2 Years Parts warranty for UHD all models and sizes', '2 Years Panel warranty for UHD all models and sizes'],
    },
    {
        title: 'FHD/HD',
        warranties: ['2 Years Parts warranty for FHD/HD all models and sizes', '2 Years Panel warranty for FHD/HD all models and sizes'],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, borderWidth: '0px' },
    visible: {
        opacity: 1,
        y: 0,
        borderWidth: '2px',
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
};

const lineVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 1 } },
};

const WarrantyCards = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLarge = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isXL = useMediaQuery(theme.breakpoints.up('xl'));

    return (
        <Box sx={{ p: 3, marginBottom: '40px' }}>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    color: '#676767',
                    fontFamily: 'Kanit',
                    fontWeight: '400',
                    mb: 5,
                    fontSize:{xs:"1.68rem",md:'2rem'},
                }}
            >
                Below are the warranty details of TV:
            </Typography>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'grid',
                    margin: isXL ? '0px 100px' : isLarge ? '0px 1%' : '0px',
                    gridTemplateColumns: isMobile
                        ? 'repeat(1, 1fr)'
                        : isMedium
                            ? 'repeat(2, 1fr)'
                            : isLarge
                                ? 'repeat(3, 1fr)'
                                : isXL
                                    ? 'repeat(4, 1fr)' // 4 columns for xl devices
                                    : 'repeat(4, 1fr)', // Default to 3 columns
                    gap: '20px',
                }}
            >
                {warrantyData.map((item, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <Card
                            component={motion.div}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, borderWidth: '0px' },
                                visible: {
                                    opacity: 1,
                                    borderWidth: '2px',
                                    transition: { duration: 0.5, ease: 'easeInOut' },
                                },
                            }}
                            sx={{
                                border: '2px solid #ffffff00',
                                boxShadow: 3,
                                overflow: 'hidden',
                                maxHeight: {xs:"270px",sm:'240px'},
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',
                            }}
                        >
                            <motion.div
                                variants={lineVariants}
                                initial="hidden"
                                animate="visible"
                            ></motion.div>
                            <CardContent>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        mb: 3,
                                        fontSize: 22,
                                        fontFamily: 'Kanit',
                                        fontWeight: '300',
                                        color: '#676767',
                                    }}
                                    gutterBottom
                                >
                                    {item.title}
                                </Typography>
                                {item.warranties.map((warranty, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            mb: 1.5,
                                            textAlign: 'left',
                                        }}
                                    >
                                        <CheckCircleIcon
                                            sx={{
                                                color: '#0069c8',
                                                mr: 1,
                                                height: 15,
                                                mt: '2px',
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontFamily: 'Kanit',
                                                fontWeight: '250',
                                                fontSize: 14,
                                                color: '#676767',
                                            }}
                                        >
                                            {warranty}
                                        </Typography>
                                    </Box>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Box>
    );
};

export default WarrantyCards;
