import { Grid, Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextInput from './../../components/Warrenty/TextInput';
import SelectInput from './../../components/Warrenty/SelectInput';
import RadioGroupInput from './../../components/Warrenty/RadioGroupInput';
import CheckboxGroup from './../../components/Warrenty/CheckBoxGroup';
import FileUpload from './../../components/Warrenty/FileUpload';
import { motion } from 'framer-motion';
import WarrantyCards from '../../components/Warrenty/WarrentyBottomCard';
import Retailer from "./../../components/WhereToBuy/Retailer";
const countries = [
  { label: 'Malaysia', value: 'Malaysia' },
  { label: 'United States', value: 'United States' },
  { label: 'Canada', value: 'Canada' },
];

const brandOptions = [
  'Television', 'Newspaper', 'Billboard', 'Social media',
  'Promotional videos', 'Search engines', 'Customers testimonials',
  'Peer referral', 'Radio', 'Others'
];

const itemCategories = [
  { label: 'Television', value: 'Television' },
  { label: 'Freezer', value: 'Freezer' },
  { label: 'Refrigerator', value: 'Refrigerator' },
  { label: 'Washing Machine', value: 'Washing Machine' },
  { label: 'Air Conditioner', value: 'Air Conditioner' },
];

const Index = () => {
  const { register, handleSubmit, setValue, formState: { errors },watch } = useForm();

  const onSubmit = (data) => {
    
    console.log(data);
  };

  const handleFileUpload = (name) => (event) => {
    console.log(event,name)
    setValue(name, event);
  };
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box sx={{ marginTop: '100px' }}>
      <Retailer
        title="WARRANTY" 
        description="Register your product warranty card by filling in the form below." 
      />
      <Box sx={{
        padding: '20px',
        marginTop: '150px',
        maxWidth: '1000px',
        margin: '0 auto',
        borderRadius: '8px',
      }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} component={motion.div} transition={{ delay: 0.3 }} variants={animationVariants}>
              <h1 style={{fontFamily:'Kanit',fontWeight:'500',textAlign:'center'}}>Warranty Registration Form</h1>
            </Grid>

            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Full name as per IC"
                {...register('fullName', { required: 'Full name is required' })}
                value={watch('fullName')}
                onChange={(e) => setValue('fullName', e.target.value)}
              />
              {errors.fullName && <Typography color="error">{errors.fullName.message}</Typography>}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Phone/Mobile"
                {...register('phone', { required: 'Phone is required' })}
                value={watch('phone')}
                onChange={(e) => setValue('phone', e.target.value)}
              />
              {errors.phone && <Typography color="error">{errors.phone.message}</Typography>}
            </Grid>
            <Grid item xs={12} sm={4} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="IC Number"
                {...register('icNumber', { required: 'IC Number is required' })}
                value={watch('icNumber')}
                onChange={(e) => setValue('icNumber', e.target.value)}
              />
              {errors.icNumber && <Typography color="error">{errors.icNumber.message}</Typography>}
            </Grid>
            <Grid item xs={12} sm={4} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
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
                label="Purchase date"
                type="date"
                {...register('purchaseDate', { required: 'Purchase date is required' })}
                value={watch('purchaseDate')}
                onChange={(e) => setValue('purchaseDate', e.target.value)}
              />
              {errors.purchaseDate && <Typography color="error">{errors.purchaseDate.message}</Typography>}
            </Grid>

            <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <Typography fontSize={18} sx={{fontFamily:'Kanit',fontWeight:'500',}}>Address</Typography>
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Address Line 1"
                {...register('addressLine1', { required: 'Address Line 1 is required' })}
                value={watch('addressLine1')}
                onChange={(e) => setValue('addressLine1', e.target.value)}
              />
              {errors.addressLine1 && <Typography color="error">{errors.addressLine1.message}</Typography>}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Address Line 2"
                {...register('addressLine2')}
                value={watch('addressLine2')}
                onChange={(e) => setValue('addressLine2', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="City"
                {...register('city', { required: 'City is required' })}
                value={watch('city')}
                onChange={(e) => setValue('city', e.target.value)}
              />
              {errors.city && <Typography color="error">{errors.city.message}</Typography>}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="State"
                {...register('state', { required: 'State is required' })}
                value={watch('state')}
                onChange={(e) => setValue('state', e.target.value)}
              />
              {errors.state && <Typography color="error">{errors.state.message}</Typography>}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Postal code"
                {...register('postalCode', { required: 'Postal code is required' })}
                value={watch('postalCode')}
                onChange={(e) => setValue('postalCode', e.target.value)}
              />
              {errors.postalCode && <Typography color="error">{errors.postalCode.message}</Typography>}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <SelectInput
                label="Country"
                name="country"
                options={countries}
                value={watch('country')} // react-hook-form's watch function to track value
                onChange={(e) => setValue('country', e.target.value)} // Manually set value on change
                required={true}
              />
              {errors.country && <Typography color="error">{errors.country.message}</Typography>}
            </Grid>
            <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <RadioGroupInput
                label="Gender"
                {...register('gender', { required: 'Gender is required' })}
                options={[
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                ]}
                value={watch('gender')}
                onChange={(e) => setValue('gender', e.target.value)} // Manually set value on change
              />
              {errors.gender && <Typography color="error">{errors.gender.message}</Typography>}
            </Grid>
            <Grid item xs={12}component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <CheckboxGroup
                label="How did you find out about our brand?"
                options={brandOptions}
                {...register('brandSource', { validate: value => value?.length > 0 || 'Select at least one option' })}
                value={watch('brandSource')}
                onChange={(e) => setValue('brandSource', e.target.value)}
              />
              {errors.brandSource && <Typography color="error">{errors.brandSource.message}</Typography>}
            </Grid>
            <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <RadioGroupInput
                label="Item Category"
                {...register('itemCategory', { required: 'Item Category is required' })}
                options={itemCategories}
                value={watch('itemCategory')}
                onChange={(e) => setValue('itemCategory', e.target.value)}
              />
              {errors.itemCategory && <Typography color="error">{errors.itemCategory.message}</Typography>}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Product Model"
                {...register('productModel', { required: 'Product Model is required' })}
                value={watch('productModel')}
                onChange={(e) => setValue('productModel', e.target.value)}
              />
              {errors.productModel && <Typography color="error">{errors.productModel.message}</Typography>}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Serial Number"
                {...register('serialNumber', { required: 'Serial Number is required' })}
                value={watch('serialNumber')}
                onChange={(e) => setValue('serialNumber', e.target.value)}
              />
              {errors.serialNumber && <Typography color="error">{errors.serialNumber.message}</Typography>}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <FileUpload label="Upload Warranty Card" onChange={handleFileUpload('warrantyCard')} />
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <FileUpload label="Upload Purchase Receipt" onChange={handleFileUpload('purchaseReceipt')} />
            </Grid>
            <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <RadioGroupInput
                label="Do you wish to receive promotional materials from Skyworth?"
                {...register('promotionalMaterials', { required: 'Please select Yes or No' })}
                value={watch('promotionalMaterials')}
                onChange={(e) => setValue('promotionalMaterials', e.target.value)}
                options={[
                  { value: 'Yes', label: 'Yes' },
                  { value: 'No', label: 'No' },
                ]}
              />
              {errors.promotionalMaterials && <Typography color="error">{errors.promotionalMaterials.message}</Typography>}
            </Grid>
            <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <CheckboxGroup
                label="You agree to the terms and conditions shared in this form"
                {...register('termsAccepted', { required: 'You must accept the terms and conditions' })}
                options="I have reviewed all the T&C on the warranty card, and agree and accept the T&C provided"
                value={watch('termsAccepted')}
                onChange={(e) => setValue('termsAccepted', e.target.value)}
              />
              {errors.termsAccepted && <Typography color="error">{errors.termsAccepted.message}</Typography>}
            </Grid>
            <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <Button type="submit" onClick={handleSubmit} variant="contained" sx={{
                background: '#1a7efb',
                height: 53,
                color: 'white',
                marginBottom:'100px',
                '&:hover': {
                  background: '#0069CB',
                },
              }} fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>

      </Box>
      <WarrantyCards/>
    </Box>
  );
};

export default Index;
