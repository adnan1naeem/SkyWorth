import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel, Box } from '@mui/material';
import { filters } from './ProductData';

const FilterSection = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    resolution: [],
    productType: [],
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
    <Box>
      <Typography variant="h6">Filter by Resolution</Typography>
      {filters.resolution.map((resolution) => (
        <FormControlLabel
          key={resolution}
          control={
            <Checkbox
              checked={selectedFilters.resolution.includes(resolution)}
              onChange={() => handleFilterChange('resolution', resolution)}
            />
          }
          label={resolution}
        />
      ))}

      <Typography variant="h6">Filter by Product Type</Typography>
      {filters.productType.map((type) => (
        <FormControlLabel
          key={type}
          control={
            <Checkbox
              checked={selectedFilters.productType.includes(type)}
              onChange={() => handleFilterChange('productType', type)}
            />
          }
          label={type}
        />
      ))}
    </Box>
  );
};

export default FilterSection;
