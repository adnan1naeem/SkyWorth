import React from 'react';
import { Container, Grid, Typography, Box, Hidden } from '@mui/material';

const imageUrl = 'https://skyworth.com.my/wp-content/uploads/2023/08/skyworth.jpg';
const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.4011962578165!2d72.6848469154669!3d33.65997998072111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df91ef7f85ab73%3A0x29f64be36bc8734e!2sSkyworth%20Pakistan%20HQ!5e0!3m2!1sen!2sus!4v1637036224972!5m2!1sen!2sus"; // Replace with the actual embed URL

function LocationSection() {
    return (
        <Box sx={{ bgcolor: 'white', py: 12 }}>
            <Container maxWidth="xl">
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    fontFamily={"Kanit"}
                    sx={{ marginBottom: '5%' }}
                >
                    SKYWORTH Pakistan HQ
                </Typography>
                <Grid container  justifyContent="center">
                    <Hidden mdDown>
                        <Grid item xs={12} md={6}>
                            <img
                                src={imageUrl}
                                alt="Location"
                                style={{ width: '100%', height: '460px' }}
                            />
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={6}>
                        <iframe
                            src={mapUrl}
                            width="100%"
                            height="460"
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
