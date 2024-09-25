import { TextField, Typography } from '@mui/material';

const TextInput = ({ label, name, value = '', onChange, required, type = 'text', multiline = false, rows = 1, sx ,requiredcolor,textcolor,Inputcolor}) => (
    <>
        <Typography
            variant="body2"
            sx={{
                marginBottom: '4px',
                fontSize: 16,
                fontFamily: 'Kanit',
                fontWeight: '400',
                color: textcolor ? textcolor : 'black'
            }}
        >
            {label}
            {required && (
                <span style={{ color: requiredcolor ? requiredcolor : 'red' }}> *</span>
            )}
        </Typography>
        <TextField
            name={name}
            fullWidth
            required={required}
            value={value}
            onChange={onChange}
            type={type}
            multiline={multiline}
            rows={rows}
            InputLabelProps={{ shrink: false }}
            sx={{
                marginBottom: '20px',
                backgroundColor: '#FFFFFF',
                '& .MuiOutlinedInput-root': {
                    backgroundColor: Inputcolor ? Inputcolor : 'white',
                    borderRadius: '10px',
                    height: sx ? sx : '42px',
                    '& fieldset': {
                        borderColor: '#CCCCCC',
                    },
                    '&:hover fieldset': {
                        borderColor: '#CCCCCC', // Maintain border color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#0069CB',
                        boxShadow: 'none',
                    },
                },
                '& input, & textarea': {
                    outline: 'none',
                    '&:focus': {
                        outline: 'none',
                    },
                },
                '&:focus-within': {
                    outline: 'none',
                },
            }}
        />
    </>
);

export default TextInput;
