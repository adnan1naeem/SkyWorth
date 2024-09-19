import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const LeftAlignedBoxWithBackground = ({ backgroundImage, buttonText }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '640px',
                backgroundImage: `url(${backgroundImage.src || backgroundImage})`, // handles both local import and URL
                background: 'linear-gradient(90deg, #000000fe, #0000007 49%, #00000002)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: '10%',
            }}
        >
            <Box
                sx={{
                    padding: '20px',
                    borderRadius: '8px',
                    maxWidth: '550px',
                }}
            >
                <Typography
                    component="div"
                    sx={{
                        fontWeight: 'medium',
                        fontSize: { xs: 40, sm: 40, md: 40, lg: 48 },
                        color: 'white',
                        marginBottom: '20px',
                        lineHeight: '1',
                    }}
                >
                    Unmatched quality and
                    <br />
                    unbeatable prices.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'white',
                        color: '#000',
                        fontWeight: 'light',
                        padding: '15px 35px',
                        borderRadius: '50px',
                        border: '2px solid #CCCCCC',
                        '&:hover': {
                            backgroundColor: '#016AC8',
                            color: 'white',
                        },
                    }}
                >
                    {buttonText}
                </Button>
            </Box>
        </Box>
    );
};

export default LeftAlignedBoxWithBackground;
