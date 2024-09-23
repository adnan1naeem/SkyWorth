import { TextField, MenuItem, Typography, Box } from '@mui/material';

const SelectInput = ({ label, name, value, onChange, options, required }) => (
  <Box sx={{ marginBottom: '20px' }}>
    <Typography variant="body2" sx={{ marginBottom: '4px',fontSize:16 ,fontFamily:'Kanit',fontWeight:'400',}}>
      {label}
      {required && <span style={{ color: 'red' }}> *</span>}
    </Typography>
    <TextField
      name={name}
      select
      fullWidth
      value={value}
      onChange={onChange}
      sx={{
        backgroundColor: '#F5F5F5', // Light gray background
        fontFamily:'Kanit',fontWeight:'500',
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          color: '#AAABAC'
        },
        '& .MuiSelect-select': {
          padding: '10px', // Adjust padding if needed
          color: '#CCCCC'
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  </Box>
);

export default SelectInput;
