import React, { useEffect, useRef, useState } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const ListComponent = ({ text, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const weeksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(weeksRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (weeksRef.current) {
      observer.observe(weeksRef.current);
    }

    return () => {
      if (weeksRef.current) {
        observer.unobserve(weeksRef.current);
      }
    };
  }, []);

  return (
    <Box 
      ref={weeksRef} 
      sx={{ 
        width: { xs: '90%', lg: '100%' }, 
        margin: '0 auto', 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)', // Slide effect
        transition: 'opacity 0.7s ease, transform 0.5s ease', // Transition for both opacity and transform
      }}
    >
      <List>
        <ListItem sx={{ alignItems: 'flex-start', padding: '1px 0' }}> 
          <ListItemIcon sx={{ mt: '4px' }}>
            <PlayArrowIcon sx={{ color: '#0069c8' }} />
          </ListItemIcon>
          <ListItemText 
            primary={text} 
            sx={{ ml: '-2.5%', fontSize: '16px', color: color }} 
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default ListComponent;
