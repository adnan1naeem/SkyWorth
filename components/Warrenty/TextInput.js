
import { TextField, Typography } from '@mui/material';

const TextInput = ({ label, name, value = '', onChange, required, type = 'text' }) => (
    <>
        <Typography variant="body2" sx={{ marginBottom: '4px',fontSize:16,fontFamily:'Kanit',fontWeight:'400', }}>
            {label}
            {required && <span style={{ color: 'red' }}> *</span>}
        </Typography>
        <TextField
            name={name}
            fullWidth
            required={required}
            value={value}
            onChange={onChange}
            type={type}
            InputLabelProps={{ shrink: false }}
            sx={{
                marginBottom: '20px',
                backgroundColor: '#FFFFFF',
                '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    height: '42px',
                    '& fieldset': {
                        borderColor: '#CCCCCC',
                    },
                },
                '& input': {
                    backgroundColor: '#FFFFFF',
                },
            }}
        />
    </>
);

export default TextInput;
