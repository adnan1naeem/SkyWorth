import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const LeftAlignedBoxWithBackground = ({ backgroundImage, buttonText, title, description,onClick,bordershown }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '420px',
                backgroundImage: `url(${backgroundImage.src || backgroundImage})`,
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
                    maxWidth: '600px',
                }}
            >
                {title ? <Typography
                    component="div"
                    sx={{
                        fontWeight: '500',
                        fontSize: { xs: 22, sm: 22, md: 26, lg: 26 },
                        color: 'white',
                        fontFamily:'kanit',
                        marginBottom: '28px',
                        lineHeight: '1.2',
                    }}
                >
                    {title}
                </Typography> : <Typography
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
                </Typography>}
                {description &&
                    <Typography
                        component="div"
                        sx={{
                            fontWeight: '300',
                            fontSize: { xs: 14, sm: 14, md: 16, lg: 16 },
                            color: 'white',
                            fontFamily:'kanit',
                            marginBottom: '26px',
                            lineHeight: '1.5',
                        }}
                    >
                        {description}
                    </Typography>
                }
                {buttonText && <Button
                    variant="contained"
                    onClick={onClick}
                    sx={{
                        backgroundColor: 'white',
                        color: '#000',
                        fontWeight: 'light',
                        padding: '15px 35px',
                        borderRadius: '10px',
                        border: '2px solid #CCCCCC',
                        '&:hover': {
                            backgroundColor: '#016AC8',
                            color: 'white',
                        },
                    }}
                >
                    {buttonText}
                </Button>}
            </Box>
        </Box>
    );
};

export default LeftAlignedBoxWithBackground;
