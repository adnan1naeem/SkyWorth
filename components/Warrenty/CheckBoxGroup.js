import { FormControl, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';

const CheckboxGroup = ({ label, options, selectedValues, onChange, required, textcolor,singleOption }) => {
  const isSingleOption = typeof options === 'string';

  return (
    <FormControl component="fieldset">
      <Typography variant="body2" sx={{ marginBottom: '4px', fontSize: 16, fontFamily: 'Kanit', fontWeight: '400' }}>
        {label}
        {required && <span style={{ color: 'red' }}> *</span>}
      </Typography>
      <FormGroup
        sx={{
          display:singleOption?"flex": 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
        }}
      >
        {isSingleOption ? (
          <FormControlLabel
            control={
              <Checkbox
                size='small'
                checked={selectedValues}
                onChange={(e) => onChange(e, options)}
              />
            }
            label={<Typography sx={{ fontFamily: 'Kanit', fontWeight: '400', color: textcolor ? textcolor : '#0069c8' }}>
                {options}
              </Typography>
            }
          />
        ) : (
          options?.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  size='small'
                  value={option}
                  checked={selectedValues?.includes(option)}
                  onChange={onChange}
                />
              }
              label={
                <Typography sx={{ color: '#0069c8', fontFamily: 'Kanit', fontWeight: '400' }}>
                  {option}
                </Typography>
              }
            />
          ))
        )}
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxGroup;
