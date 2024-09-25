import { useRouter } from 'next/router';
import { products } from '../../components/Product/ProductData';
import { Box, Container } from '@mui/material';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import RelatedProducts from '../../components/ProductDetail/RelatedProduct';
import DetailImages from '../../components/ProductDetail/DetailImage';
import Section from '../../components/ProductDetail/Section';
const Product = () => {
    const router = useRouter();
    const { id } = router.query;
    const product = products?.find((p) => p?.id?.toString() === id);
    if (!product) {
        return <div>Loading...</div>;
    }
    
    return (
        <Box sx={{ flex: 1,paddingTop:{xs:'10%',sm:'5%',md:'2%',lg:0} }}>

           <Box sx={{background:'#FAFAFA'}}>
           <Container component="section" maxWidth={"xl"}>
                <ProductDetail product={product} />
                <Section product={product}/>
            </Container>
           </Box>
            <Container component="section" maxWidth={"xl"}>
                <RelatedProducts products={products} />
                <DetailImages detailImages={product} />
            </Container>
        </Box>
    );
};

export default Product;
