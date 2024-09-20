import React from 'react';
import { Card, CardContent, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const warrantyData = [
    {
        title: 'Television',
        warranties: ['2 years warranty for all model'],
    },
    {
        title: 'Top Load Washer',
        warranties: [
            '2 years general warranty',
            '3 years control panel warranty',
            '6 years wash motor warranty',
        ],
    },
    {
        title: 'Chest Freezer',
        warranties: ['1 year general warranty', '5 years compressor warranty'],
    },
    {
        title: 'Multi Door Refrigerator',
        warranties: ['2 years general part warranty', '12 years inverter compressor warranty'],
    },
    {
        title: 'Side by Side Refrigerator',
        warranties: ['2 years general part warranty', '12 years inverter compressor warranty'],
    },
    {
        title: 'Double Door Refrigerator',
        warranties: ['2 years general part warranty', '10 years compressor warranty'],
    },
    {
        title: 'Air Conditioner',
        warranties: [
            '2 years general warranty + additional 1 year (Upon online warranty registration before 31st March 2025)',
            '5 years compressor warranty',
        ],
    },
    {
        title: 'Upright Freezer',
        warranties: ['2 years general warranty', '12 years inverter compressor warranty'],
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

    return (
        <Box sx={{ p: 3, marginBottom: '5%' }}>
            <Typography variant="h4" align="center" sx={{ mb: 7, padding: {xs:'0px 2%',sm:'0px 20%',md:'0px 20%',lg:'0px 30%',xl:'0px 34%'} }}>
                Below is the warranty details of TV and HA:
            </Typography>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'grid',
                    maxWidth: '1200px',
                    margin: 'auto',
                    gridTemplateColumns: isMobile
                        ? 'repeat(1, 1fr)'
                        : isMedium
                            ? 'repeat(2, 1fr)'
                            : 'repeat(3, 1fr)',
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
                                height: '230px',
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
                                <Typography variant="h3" sx={{ mb: 3, fontSize: 16, fontWeight: 700 }} gutterBottom>
                                    {item.title}
                                </Typography>
                                {item.warranties.map((warranty, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start', // Align icon and text at the start
                                            mb: 1.5,
                                            textAlign: 'left', // Ensure text is aligned left
                                        }}
                                    >
                                        <CheckCircleIcon sx={{ color: '#0069c8', mr: 1, height: 15, mt: '2px' }} />
                                        <Typography variant="body2" sx={{ fontSize: 14, color: 'black' }}>
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
