import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel, Box } from '@mui/material';
import { filters } from './ProductData';

const FilterSection = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    resolution: [],
    productSize: [],
    feature: [],
  });

  const handleFilterChange = (category, value) => {
    const updatedFilters = { ...selectedFilters };
    if (updatedFilters[category].includes(value)) {
      updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
    } else {
      updatedFilters[category].push(value);
    }
    
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <Box marginLeft={{md:'0px',lg:"30px"}}>
      <Typography sx={{ fontSize: 20, fontWeight: '250', fontFamily: 'Kanit', mb: 1 }}>
        Filter by Resolution
      </Typography>
      {filters.resolution.map((resolution) => (
        <FormControlLabel
          key={resolution}
          control={
            <Checkbox
              checked={selectedFilters.resolution.includes(resolution)}
              onChange={() => handleFilterChange('resolution', resolution)}
              sx={{ padding: '4px' }}
            />
          }
          label={resolution}
          sx={{ display: 'block', fontSize: 20 }} 
        />
      ))}

      <Typography sx={{ fontSize: 20, fontWeight: '250', fontFamily: 'Kanit', mb: 1, mt: 2 }}>
        Filter by Product Size
      </Typography>
      {filters.productSize.map((type) => (
        <FormControlLabel
          key={type}
          control={
            <Checkbox
              checked={selectedFilters.productSize.includes(type)}
              onChange={() => handleFilterChange('productSize', type)}
              sx={{ padding: '4px' }}
            />
          }
          label={type}
          sx={{ display: 'block', fontSize: 20 }} 
        />
      ))}
      <Typography sx={{ fontSize: 20, fontWeight: '250', fontFamily: 'Kanit', mb: 1, mt: 2 }}>
        Filter by Feature
      </Typography>
      {filters.feature.map((feature) => (
        <FormControlLabel
          key={feature}
          control={
            <Checkbox
              checked={selectedFilters.feature.includes(feature)}
              onChange={() => handleFilterChange('feature', feature)}
              sx={{ padding: '4px' }}
            />
          }
          label={feature}
          sx={{ display: 'block', fontSize: 20 }} 
        />
      ))}
    </Box>
  );
};

export default FilterSection;
