import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const ProductCard = ({ product, onClick, handleNavigation }) => {
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return (
        <Card
            sx={{
                maxWidth: 345,
                minHeight: { sm: "370px", md: '350px',lg:"420px",xl:'354px' },
                boxShadow: 'none',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center'
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
            >
                <CardMedia
                    component="img"
                    image={product?.image[0]?.src}
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
            <CardContent
                sx={{
                    padding: "10px 0px",
                    flexGrow: 1,
                    cursor: 'pointer',
                }}
            >
                <Typography 
                    sx={{
                        fontSize: { md: "20px", lg: "24px" }, 
                        textAlign: 'left', 
                        fontFamily: 'Kanit', 
                        fontWeight: '300',
                        cursor: 'pointer'
                    }}
                    component="div"
                >
                    {product.name}
                </Typography>
            </CardContent>
            <Box sx={{ marginTop: 'auto', padding: '20px 0' }}>
                <Button
                    variant="outlined"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                        fontSize: '14px',
                        borderRadius: '50px',
                        borderWidth: '1px',
                        borderColor: '#212121',
                        textTransform: 'none',
                        border: '0.7px solid black',
                        backgroundColor: 'white',
                        color: '#212121',
                        fontFamily: 'Kanit',
                        fontWeight: '300',
                        padding: '10px 30px',
                        '&:hover': {
                            backgroundColor: '#CCCCCC20',
                        },
                    }}
                >
                    View Product
                </Button>
            </Box>
        </Card>
    );
};

export default ProductCard;
