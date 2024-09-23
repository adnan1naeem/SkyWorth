import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const FileUpload = ({ label, onChange, required }) => {
  const handleChange = (event) => {
    const file = event?.target?.files[0];
    if (file) {
      console.log('Selected file:', file);
      const reader = new FileReader();
      reader.onload = () => {
        console.log('File data URL:', reader?.result); 
        if (onChange) {
          onChange(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const uniqueId = `file-upload-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <Box>
      <Typography variant="body2" sx={{ marginBottom: '4px', fontSize: 16,fontFamily: 'Kanit', fontWeight: '400', }}>
        {label}
        {required && <span style={{ color: 'red' }}> *</span>}
      </Typography>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id={uniqueId}
        type="file"
        onChange={handleChange}
      />
      <label htmlFor={uniqueId}>
        <Button
          sx={{
            backgroundColor: '#6f757e',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 0,
            fontFamily: 'Kanit', fontWeight: '400',
            marginTop: '10px',
            marginBottom: '50px',
            textTransform: 'capitalize',
          }}
          component="span"
        >
          Choose File
        </Button>
      </label>
    </Box>
  );
};

export default FileUpload;
