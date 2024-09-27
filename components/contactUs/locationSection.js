import React from 'react';
import { Container, Grid, Typography, Box, Hidden } from '@mui/material';
import { motion } from 'framer-motion';

const imageUrl = 'https://skyworth.com.my/wp-content/uploads/2023/08/skyworth.jpg';
const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.4011962578165!2d72.6848469154669!3d33.65997998072111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df91ef7f85ab73%3A0x29f64be36bc8734e!2sSkyworth%20Pakistan%20HQ!5e0!3m2!1sen!2sus!4v1637036224972!5m2!1sen!2sus"; // Replace with the actual embed URL

const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const mapVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

function LocationSection() {
    return (
        <Box sx={{ bgcolor: 'white', py: 12 }}>
            <Container maxWidth="xl">
                <motion.div variants={titleVariants} initial="hidden" whileInView="visible">
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        fontFamily={"Kanit"}
                        sx={{ marginBottom: '5%' }}
                    >
                        SKYWORTH Pakistan HQ
                    </Typography>
                </motion.div>
                <Grid container justifyContent="center">
                    <Hidden mdDown>
                        <Grid item xs={12} md={6}>
                            <motion.div variants={imageVariants} initial="hidden" whileInView="visible">
                                <img
                                    src={imageUrl}
                                    alt="Location"
                                    style={{ width: '100%', height: '460px' }}
                                />
                            </motion.div>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={6}>
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map Location"
                            ></iframe>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default LocationSection;
