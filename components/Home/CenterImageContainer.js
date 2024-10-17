import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
const CenteredImageWithText = ({ imageSrc, text, text2, body, body2, ButtonText, heading, onClick }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                width: '100%',
                height: 'auto',
                borderRadius: 2
            }}
        >
            {heading && <Typography sx={{ fontWeight: '400', fontSize: {xs:"1.38rem",md:'1.5rem'}, padding: '10px',marginTop:{xs:"30px",lg:'50px'},marginBottom:'10px',textAlign:'center' }}  gutterBottom>
                {heading}
            </Typography>}
            {imageSrc && <Image
                src={imageSrc}
                alt="Centered"
                style={{
                    width: "100%",
                    objectFit: 'contain',
                }}
            />}
            {text && <Typography
                sx={{
                    fontSize: {xs:"1.38rem",md:'1.5rem'},
                    color: '#0c3034',
                    fontWeight: 400,
                    textAlign: 'center',
                    textTransform:'capitalize',
                    marginTop: body2 ?{xs:"30px",md:'60px'} : '60px',
                    padding:{xs:"0px 10px",md:0}
                }}
            >
                {text}
            </Typography>}
            {text2 && <Typography
                sx={{
                    width: { xs: "90%", md: "80%" },
                    fontWeight: 250,
                    fontSize: { xs: "1.0rem", md: '1.1rem' },
                    textAlign: 'center',
                    marginBottom: '10px'
                }}
            >
                {text2}
            </Typography>}
            {body && <Typography
                component="div"
                sx={{
                    width:  {xs:"90%",md:"80%"},
                    fontWeight: 250,
                    fontSize: {xs:"1.0rem",md:'1.1rem'},
                    textAlign:'center',
                    marginTop: {xs:'10px',md:'30px'},
                    marginBottom: body2 ? 0 : '10px'
                }}
            >
                {body}
            </Typography>}
            {body2 && <Typography
                component="div"
                sx={{
                    width:  {xs:"90%",md:"80%"},
                    fontWeight: 250,
                    fontSize: {xs:"1.0rem",md:'1.1rem'},
                    textAlign:'center',
                    marginBottom: '25px'
                }}
            >
                {body2}
            </Typography>}
            {ButtonText && <Button
                variant="outlined"
                onClick={onClick}
                sx={{
                    fontSize: '16px',
                    borderRadius: '10px',
                    borderWidth: '1px',
                    borderColor: '#212121',
                    textTransform: 'none',
                    border: '0.7px solid black',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    color: '#212121',
                    padding: '10px 20px',
                    '&:hover': {
                        backgroundColor: '#0263B2',
                        color:"white",
                    }
                }}
            >
                {ButtonText}
            </Button>}
        </Box>
    );
};

export default CenteredImageWithText;
