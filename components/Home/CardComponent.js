import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const CardComponent = ({ title, description, buttonText }) => {
    return (
        <Card
            sx={{
                width: '100%',
                height: {xs:"380px",sm:'400px'},
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 0,
                border: '2px solid #CCCCCC'
            }}
        >
            <CardContent sx={{padding:{xs:"30px 30px 30px",sm:'50px 30px 30px'}}}>
                <Typography
                    color='#0c3034'
                    fontFamily={"SKSans, sans-serif"}
                    sx={{ fontWeight: '400',fontSize:26, marginBottom: '10px' }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color='#0c3034'
                    fontFamily={"SKSans, sans-serif"}
                    sx={{ flexGrow: 1, marginBottom: '20px',fontWeight: '300',fontSize:18, color: 'black' }}
                >
                    {description}
                </Typography>
            </CardContent>
            <Box sx={{ padding: '0 30px 30px' }}>
                <Button variant="outlined" sx={{ fontFamily:"SKSans, sans-serif",fontSize:16,color:"#0c3034",textTransform: 'none',padding:'15px 35px',border:'0.5px solid black',borderRadius:'50px' }}>
                    {buttonText}
                </Button>
            </Box>
        </Card>
    );
};

export default CardComponent;
