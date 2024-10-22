import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Typography, Breadcrumbs } from '@mui/material';
const Breadcrumb = ({ paddingTop, products = [] }) => {
  const router = useRouter();
  const pathParts = router.pathname.split('/').filter((part) => part);
  const product = products ? products?.name : null;

  return (
    <Box sx={{ paddingTop: paddingTop ? paddingTop : { xs: '25%', sm: '18%', md: '12%', lg: '12%' }, marginBottom: '20px', width: '100%', }}>
      <Breadcrumbs aria-label="breadcrumb" >
        <Link href="/" passHref>
          <Typography sx={{ fontSize: "15px", fontFamily: 'SKSans, sans-serif', fontWeight: 300 }} color='#000000'>
            Home
          </Typography>
        </Link>
        {pathParts.map((part, index) => {
          let href;
          if (part === '[id]' && product) {
            href = `/product/${products?.id}`;
          } else {
            href = `/${pathParts.slice(0, index + 1).join('/')}`;
          }
          return (
            <Link key={index} href={href} passHref>
              <Typography sx={{ fontSize: "15px", fontFamily: 'SKSans, sans-serif', color: '#000000', fontWeight: 300 }}>
                {part === '[id]' && product ? product : part.charAt(0).toUpperCase() + part.slice(1)}
              </Typography>
            </Link>
          );
        })}

      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
