import React, { useState, useRef } from 'react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import Image1 from './../../assets/SliderImage1.jpg';
import Image2 from './../../assets/SliderImage2.jpg';
import Image3 from './../../assets/SliderImage3.jpg';
import Image4 from './../../assets/SliderImage4.jpg';
import Image5 from './../../assets/SliderImage5.jpg';
import Image6 from './../../assets/SliderImage6.jpg';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ChevronLeft';
import ArrowForwardIcon from '@mui/icons-material/ChevronRight';

const ImageSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const slides = [
    { image: Image1 },
    { image: Image3 },
    { image: Image2 },
    { image: Image4 },
    { image: Image5 },
    { image: Image6 }
  ];

  const handleNextSlide = () => {
    if (activeIndex === slides.length - 1) {
      swiperRef.current.slideTo(0);
      setActiveIndex(0);
    } else {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (activeIndex === 0) {
      swiperRef.current.slideTo(slides.length - 1);
      setActiveIndex(slides.length - 1);
    } else {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <Box sx={{ 
      position: 'relative', 
      width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' }, 
      margin:'auto',
      marginTop: { xs: '15%', sm: '10%', md: '5%', lg: '3%' }
    }}>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={false}
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: { xs: '220px', sm: '320px', md: '420px', lg: '650px', xl: '700px' },
                backgroundImage: `url(${slide.image.src})`,
                backgroundPosition: 'center',
                backgroundSize: { xs: 'contain', sm: 'cover' },
                backgroundRepeat: 'no-repeat',
              }}
            >
              <Box
                sx={{
                  padding: { xs: '10px', md: '20px' },
                  marginLeft: { xs: '10px', md: '60px' },
                  borderRadius: '10px', 
                }}
              >
                {slide?.title && (
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: 24, sm: 30, lg: 42 },
                      color: 'white',
                      fontWeight: '400',
                    }}
                  >
                    {slide?.title}
                  </Typography>
                )}
                {slide?.buttonText && (
                  <button
                    style={{
                      padding: '10px 20px',
                      borderRadius: 50,
                      backgroundColor: '#fff',
                      color: '#212121',
                      border: 'none',
                      fontSize: 14,
                      marginTop: slide.title ? '10px' : '120px',
                    }}
                  >
                    {slide.buttonText}
                  </button>
                )}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowBackIcon 
        fontSize='inherit' 
        sx={{
          display:{xs:"none",md:"block"},
          fontSize: { xs: "2rem", md: '3rem' }, 
          color: "#CCCCCC", 
          position: 'absolute', 
          top: '43%', 
          left: '10px', 
          zIndex:2,
          cursor: 'pointer'
        }} 
        onClick={handlePrevSlide} 
      />
      <ArrowForwardIcon 
        fontSize='inherit' 
        sx={{
          display:{xs:"none",md:"block"},
          fontSize: { xs: "2rem", md: '3rem' }, 
          color: "#CCCCCC", 
          position: 'absolute', 
          top: '43%', 
          right: '10px', 
          zIndex:2,
          cursor: 'pointer'
        }} 
        onClick={handleNextSlide} 
      />
      <Box sx={{ position: 'absolute',zIndex:2, bottom: {xs:'15px',md:"30px"}, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveIndex(index);
              swiperRef.current.slideTo(index);
            }}
            style={{
              width: '2%',
              height: '4px',
              margin: '0 5px',
              cursor: 'pointer',
              backgroundColor: index === activeIndex ? '#007bff' : '#e0e0e0',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
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
