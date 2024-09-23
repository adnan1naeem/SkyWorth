import React from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
const CenteredImageWithText = ({ imageSrc, text, body, ButtonText,heading }) => {
    const isXs = useMediaQuery('(max-width:599px)');
    const isSm = useMediaQuery('(min-width:600px) and (max-width:959px)');
    const isMd = useMediaQuery('(min-width:960px) and (max-width:1279px)');
    let imageWidth = '80%';

    if (isXs) {
        imageWidth = '95%';
    } else if (isSm) {
        imageWidth = '95%';
    } else if (isMd) {
        imageWidth = '90%';
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                width: '100%',
                height: 'auto',
                borderRadius: 2,marginBottom:'20px'
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: 'light', padding: '10px' }} align="center" gutterBottom>
               {heading}
            </Typography>
            <Image
                src={imageSrc}
                alt="Centered"
                style={{
                    width: imageWidth,
                    objectFit: 'contain',
                    marginBottom: '20px'
                }}
            />
            <Typography
                sx={{
                    fontSize: '1.5rem',
                    color: '#0c3034',
                    fontWeight: 400,
                    textAlign: 'center',
                    marginTop: '20px'
                }}
            >
                {text}
            </Typography>
          {body&&  <Typography
                component="div"
                sx={{
                    width: { sm: "80%", md: "80%", lg: '49%' },
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    marginTop: '10px',
                    marginBottom: '30px'
                }}
            >
                {body}
            </Typography>}
           {ButtonText && <Button
                variant="outlined"
                sx={{
                    fontSize: '16px',
                    borderRadius: '50px',
                    borderWidth: '1px',
                    borderColor: '#212121',
                    textTransform: 'none',
                    border: '2px solid #CCCCCC',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    color: '#212121',
                    padding: '10px 20px',
                    '&:hover': {
                        backgroundColor: '#CCCCCC20'
                    }
                }}
            >
                {ButtonText}
            </Button>}
        </Box>
    );
};

export default CenteredImageWithText;
