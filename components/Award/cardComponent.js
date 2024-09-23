import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ZoomableImage = styled('img')({
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
    '&:hover': {
        // transform: 'scale(1.1)',
    },
});

const StyledButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    textTransform: 'none',
    overflow: 'hidden',
    '&:after': {
        content: '""',
        position: 'absolute',
        left: '0',
        bottom: '-4px',
        width: '100%',
        height: '2px',
        backgroundColor: theme?.palette?.primary?.main,
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease',
    },
    '&:hover:after': {
        transform: 'scaleX(1)',
    },
    '&:hover svg': {
        transform: 'translateX(0)',
    },
}));

const ArrowIcon = styled(ArrowForwardIcon)({
    marginLeft: '8px',
    transform: 'translateX(-100%)',
    opacity: 0,
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    '&:hover': {
        opacity: 1,
        transform: 'translateX(0)',
    },
});


const AwardSection = ({
    bgColor,
    flexDirection,
    awardImage,
    awardYear = "2020 – 2023",
    awardTitle,
    awardDescription,
    buttonText,
}) => {
    const isBlackBackground = bgColor === 'black';

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: flexDirection || 'row' },
                backgroundColor: bgColor || 'black',
                alignItems: 'center',
                justifyContent: 'center',
                py: { xs: 4, lg: 8 },
                textAlign: { xs: 'center', lg: 'left' },
                width: '100%',
                minHeight: '9vh',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', md: flexDirection || 'row' } }}>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                        p: { xs: 2, md: 10 },
                        maxWidth: { md: '60%' },
                    }}
                >
                    <Typography variant="h6" sx={{
                        color: isBlackBackground ? 'white' : 'black', mb: 1,
                        fontSize: { xs: "16px", sm: "18px" },                        
                        marginBottom:'20px',
                        borderLeft: "3px solid #0069c8",
                        height: "17px",
                        lineHeight: "18px",
                        paddingLeft: "30px",
                        transition: "opacity 1s ease-in-out",
                        fontFamily: 'Kanit', fontWeight: '500',
                        opacity: 1,
                    }}>
                        {awardYear}
                    </Typography>
                    <Typography variant="h4" sx={{ fontSize:"30px",lineHeight:'52px', color: isBlackBackground ? 'white' : 'inherit', mb: 2,fontFamily: 'Kanit', fontWeight: '500',paddingRight:'25%' }}>
                        {awardTitle}
                    </Typography>
                    <Typography variant="body1" sx={{ color: isBlackBackground ? 'white' : 'inherit', mb: 3,fontSize:16,lineHeight:'30px',fontFamily: 'Kanit', fontWeight: '400', }}>
                        {awardDescription}
                    </Typography>
                    <StyledButton sx={{ backgroundColor: '#0069c8', color: '#fff',padding:'15px 20px',borderRadius:0 }}>
                        {buttonText || 'Shop Now'}
                        <ArrowIcon />
                    </StyledButton>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // p: { xs: 2, md: 4 },
                    }}
                >
                    <ZoomableImage src={awardImage} alt="Award Image" />
                </Box>
            </Container>
        </Box>
    );
};

export default AwardSection;
