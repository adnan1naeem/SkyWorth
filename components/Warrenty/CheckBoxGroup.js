import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';

const CheckboxGroup = ({ label, options, selectedValues, onChange, required }) => {
  const isSingleOption = typeof options === 'string';

  return (
    <FormControl component="fieldset">
      <Typography variant="body2" sx={{ marginBottom: '4px', fontSize: 16 }}>
        {label}
        {required && <span style={{ color: 'red' }}> *</span>}
      </Typography>
      <FormGroup>
        {isSingleOption ? (
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedValues}
                onChange={(e) => onChange(e, options)}
              />
            }
            label={options}
            sx={{ color: '#0069CB' }} // Set label color to blue
          />
        ) : (
          options?.map((option) => (
            <FormControlLabel
              key={option}
              sx={{ color: 'primary.main' }}
              control={
                <Checkbox
                  value={option}
                  checked={selectedValues?.includes(option)}
                  onChange={onChange}
                />
              }
              label={option}
            />
          ))
        )}
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxGroup;
