import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

const RadioGroupInput = ({ label, name, value, onChange,required, options }) => (
  <FormControl component="fieldset" sx={{ marginBottom: '20px' }}>
    <Typography variant="body2" sx={{ marginBottom: '4px',fontSize:16 }}>
            {label}
            {required && <span style={{ color: 'red' }}> *</span>}
        </Typography>
    <RadioGroup name={name} value={value} onChange={onChange} sx={{ display: 'flex', flexDirection: 'column' }}>
      {options.map((option) => (
        <FormControlLabel 
          key={option.value} 
          value={option.value} 
          control={<Radio sx={{ color: 'black', '&.Mui-checked': { color: 'primary' } }} />} 
          label={option.label} 
          sx={{ color: 'primary.main' }} // Set the label color to primary
        />
      ))}
    </RadioGroup>
  </FormControl>
);

export default RadioGroupInput;
