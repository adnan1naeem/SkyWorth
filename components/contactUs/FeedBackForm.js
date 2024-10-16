import { Grid, Box, Button, Typography, Snackbar } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextInput from './../Warrenty/TextInput';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const FeedBackForm = ({ id }) => {
    const tabContentRef = useRef(null);
    const isInView = useInView(tabContentRef, { once: true });
    const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm();

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await fetch('/api/send-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error sending feedback');
            }

            const result = await response.json();
            setSnackbarMessage(result.message); // Set success message
            setSnackbarOpen(true); // Open Snackbar

            // Reset form fields
            for (const field in data) {
                setValue(field, '');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send feedback, please try again later.'); // Optional: alert for failure
        }
    };

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Box id={id}>
            <Box sx={{
                padding: '20px',
                margin: '0 auto',
                borderRadius: '8px',
            }} maxWidth={"md"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2} ref={tabContentRef}>
                        <Grid item xs={12} component={motion.div} transition={{ delay: 0.3 }} variants={animationVariants}>
                            <h1 style={{ fontFamily: 'Kanit', fontWeight: '500', textAlign: 'center' }}> Feedback Form</h1>
                        </Grid>
                        {isInView && (
                            <>
                                <Grid item xs={12} component={motion.div} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.3 }} variants={animationVariants}>
                                    <TextInput
                                        required={true}
                                        label="Full name as per CNIC"
                                        {...register('fullName', { required: 'Full name is required' })}
                                        value={watch('fullName')}
                                        onChange={(e) => setValue('fullName', e.target.value)}
                                    />
                                    {errors.fullName && <Typography color="error">{errors.fullName.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} component={motion.div} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.5 }} variants={animationVariants}>
                                    <TextInput
                                        required={true}
                                        label="Email address"
                                        type="email"
                                        {...register('email', { required: 'Email is required' })}
                                        value={watch('email')}
                                        onChange={(e) => setValue('email', e.target.value)}
                                    />
                                    {errors.email && <Typography color="error">{errors.email.message}</Typography>}
                                </Grid>
                                <Grid item xs={6} component={motion.div} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.7 }} variants={animationVariants}>
                                    <TextInput
                                        required={true}
                                        label="Mobile Number"
                                        type='number'
                                        {...register('phone', { required: 'Phone is required' })}
                                        value={watch('phone')}
                                        onChange={(e) => setValue('phone', e.target.value)}
                                    />
                                    {errors.phone && <Typography color="error">{errors.phone.message}</Typography>}
                                </Grid>
                                <Grid item xs={6} component={motion.div} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.7 }} variants={animationVariants}>
                                    <TextInput
                                        required={true}
                                        label="Your City"
                                        {...register('city', { required: 'City is required' })}
                                        value={watch('city')}
                                        onChange={(e) => setValue('city', e.target.value)}
                                    />
                                    {errors.city && <Typography color="error">{errors.city.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} component={motion.div} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.3 }} variants={animationVariants}>
                                    <TextInput
                                        required={true}
                                        label="Your Address"
                                        {...register('address', { required: 'Your Address is required' })}
                                        value={watch('address')}
                                        onChange={(e) => setValue('address', e.target.value)}
                                    />
                                    {errors.address && <Typography color="error">{errors.address.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} component={motion.div} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 1.0 }} variants={animationVariants}>
                                    <TextInput
                                        required={true}
                                        label="Your Feedback here"
                                        {...register('comments', { required: 'Comments are required' })}
                                        multiline
                                        rows={3}
                                        sx={{ height: '80px' }}
                                        value={watch('comments')}
                                        onChange={(e) => setValue('comments', e.target.value)}
                                    />
                                    {errors.comments && <Typography color="error">{errors.comments.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} component={motion.div} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 1.7 }} variants={animationVariants}>
                                    <Button type="submit" sx={{
                                        background: '#0069CB',
                                        height: 59,
                                        color: 'white',
                                        borderRadius: 0,
                                        width: { xs: '100%', md: '30%' },
                                        marginBottom: {xs:"40px",md:'100px'},
                                        '&:hover': {
                                            background: '#0069CB',
                                        },
                                    }} fullWidth>
                                        Send your feedback
                                    </Button>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </form>
            </Box>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
            />
        </Box>
    );
};

export default FeedBackForm;
