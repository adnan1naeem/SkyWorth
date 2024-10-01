import { Grid, Box, Button, Typography, Rating } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextInput from './../Warrenty/TextInput';
import CheckboxGroup from './../Warrenty/CheckBoxGroup';
import { motion } from 'framer-motion';
const LeaveComment = () => {
    const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Box sx={{ marginTop: '100px' }}>
            <Box sx={{
                padding: '20px',
                marginTop: '50px',
                margin: '0 auto',
                borderRadius: '8px',
            }} maxWidth='1000px'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
                            <TextInput
                                label="Leave a Reply"
                                Inputcolor={"#F5F5F5"}
                                textcolor={'#676767'}
                                {...register('comments', { required: 'Comments are required' })}
                                multiline
                                rows={5}
                                sx={{ height: '150px' }}
                                value={watch('comments')}
                                onChange={(e) => setValue('comments', e.target.value)}
                            />
                            {errors.comments && <Typography color="error">{errors.comments.message}</Typography>}
                        </Grid>
                        <Grid item xs={12} sm={4} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.5 }} variants={animationVariants}>
                            <TextInput
                                required={true}
                                requiredcolor={'blue'}
                                Inputcolor={"#F5F5F5"}
                                textcolor={'#676767'}
                                label="Name"
                                {...register('Name', { required: 'name is required' })}
                                value={watch('Name')}
                                onChange={(e) => setValue('Name', e.target.value)}
                            />
                            {errors.fullName && <Typography color="error">{errors.fullName.message}</Typography>}
                        </Grid>
                        <Grid item xs={12} sm={4} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.5 }} variants={animationVariants}>
                            <TextInput
                                textcolor={'#676767'}
                                Inputcolor={"#F5F5F5"}
                                required={true}
                                requiredcolor={'blue'}
                                label="Email address"
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                                value={watch('email')}
                                onChange={(e) => setValue('email', e.target.value)}
                            />
                            {errors.email && <Typography color="error">{errors.email.message}</Typography>}
                        </Grid>
                        <Grid item xs={12} sm={4} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
                            <TextInput
                                requiredcolor={'blue'}
                                label="Website"
                                Inputcolor={"#F5F5F5"}
                                textcolor={'#676767'}
                                {...register('Website')}
                                value={watch('Website')}
                                onChange={(e) => setValue('Website', e.target.value)}
                            />
                            {errors.phone && <Typography color="error">{errors.phone.message}</Typography>}
                        </Grid>
                        <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
                            <CheckboxGroup
                                textcolor={'#676767'}
                                {...register('termsAccepted')}
                                options="Save my name, email, and website in this browser for the next time I comment."
                                value={watch('termsAccepted')}
                                onChange={(e) => setValue('termsAccepted', e.target.value)}
                                singleOption={true}
                            />
                            {errors.termsAccepted && <Typography color="error">{errors.termsAccepted.message}</Typography>}
                        </Grid>
                        <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 1.5 }} variants={animationVariants}>
                            <Button type="submit" sx={{
                                background: '#0069CB',
                                height: 59,
                                color: 'white',
                                borderRadius: 0,
                                width: { xs: '40%', md: '23%' },
                                marginBottom: '100px',
                                '&:hover': {
                                    background: '#0069CB',
                                },
                            }} fullWidth>
                                Submit Comment
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    );
};

export default LeaveComment;
