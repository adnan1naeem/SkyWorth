import React, { useState, useRef } from 'react';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import Image1 from './../../assets/swiper1.webp';
import Image2 from './../../assets/swiperImage2.webp';
import Image3 from './../../assets/Image3.webp';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ChevronLeft';
import ArrowForwardIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';

const ImageSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const slides = [
    {
      image: Image1,
      title: 'Companion P100 Portable Display',
      desc: 'AVAILABLE NOW',
      buttonText: 'Buy Now!',
    },
    {
      image: Image3,
      title:'',
      buttonText: 'Shop Now',
    },
    {
      image: Image1,
      title: '',
      buttonText: 'Shop Now',
    },
    {
      image: Image3,
      title:'',
      buttonText: 'Shop Now',
    },
  ];

  return (
    <Box sx={{ position: 'relative', width: { xs: '100%', sm: '100%', md: '100%', lg: '80%' }, margin: 'auto', marginTop: { xs: '11%', sm: '8%', md: '7%', lg: '7%', xl: '5%' } }}>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={false}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: {xs:'500px',sm:'500px',md:'600px',lg:'680px',xl:'680px'},  // Set a fixed height for the background container
                backgroundImage: `url(${slide.image.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <Box
                sx={{
                  padding: '20px',
                  marginLeft:"60px",
                  borderRadius: '10px', // Optional: Rounded corners
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    width:'60%',
                    fontSize: { xs: 30, lg: 42 },  // 30px for mobile, 42px for large screens
                    color: 'white',
                    fontWeight: '400',
                  }}
                >
                  {slide.title}
                </Typography>

                <button
                  style={{
                    padding: '15px 30px',
                    borderRadius: 50,
                    backgroundColor: '#fff',
                    color: '#212121',
                    border: 'none',
                    border: '2px solid #cccccc',
                    fontSize: 16,
                    marginTop: slide.title?'20px':'160px',
                  }}
                >
                  {slide.buttonText}
                </button>
              </Box>
            </Box>
          </SwiperSlide>

        ))}
      </Swiper>
      <Box sx={{ position: 'absolute', top: 'calc(100% + 1%)', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ArrowBackIcon fontSize='inherit' style={{ fontSize: '4rem', color: "#CCCCCC" }} onClick={() => swiperRef.current.slidePrev()} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveIndex(index);
                swiperRef.current.slideTo(index);
              }}
              style={{
                width: '3%',
                height: '4px',
                margin: '0 5px',
                cursor: 'pointer',
                backgroundColor: index === activeIndex ? '#007bff' : '#e0e0e0',
                transition: 'background-color 0.3s ease',
              }}
            />
          ))}
        </Box>
        <ArrowForwardIcon fontSize='inherit' style={{ fontSize: '4rem', color: "#CCCCCC" }} onClick={() => swiperRef.current.slideNext()} />
      </Box>

      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          display: none; /* Hide default arrows */
        }
      `}</style>
    </Box>
  );
};

export default ImageSwiper;
