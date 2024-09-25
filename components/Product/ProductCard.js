import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const ProductCard = ({ product,onClick,handleNavigation }) => {
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return (
        <Card
            sx={{
                maxWidth: 345,
                height: {sm:"320px",md:'354px'},
                boxShadow: 'none',
                position: 'relative',
                overflow: 'hidden',
                textAlign:'-webkit-center'
            }}
            onClick={handleNavigation}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
        >
            <Box
                sx={{
                    position: 'relative',
                    '&:hover img': {
                        boxShadow: '0 1px 0px rgba(11, 95, 1, 0.5)',
                    },
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <CardMedia
                    component="img"
                    image={product?.image}
                    alt={product.name}
                    sx={{
                        height: '200px',
                        width: '100%',
                        objectFit: 'contain',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                />
                <Box
                    className="hover-content"
                    sx={{
                        position: 'absolute',
                        height: '100%',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: hover ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        backgroundColor: 'rgba(0,0,0, 0.3)',
                    }}
                >
                    <Button
                        color="white"
                        size="small"
                        onClick={(event) => {
                            event.stopPropagation();
                            onClick();
                        }}
                        sx={{
                            marginBottom: 1,
                            padding: '10px 20px',
                            background: 'white',
                            borderRadius: 20,
                            '&:hover': {
                                background: '#3d4246',
                                color: 'white',
                            },
                        }}
                    >
                        Quick View
                    </Button>
                </Box>
            </Box>
            <CardContent sx={{padding:"10px 0px"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Typography sx={{fontSize:{md:"20px",lg:"24px",textAlign:'left'}}} component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{textAlign:'left'}} color="text.secondary">
                    {product.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
