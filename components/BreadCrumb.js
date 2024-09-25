import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Typography, Breadcrumbs } from '@mui/material';

const Breadcrumb = ({paddingTop}) => {
  const router = useRouter();
  
  const pathParts = router.pathname.split('/').filter((part) => part);

  return (
    <Box sx={{ paddingTop:paddingTop?paddingTop:{xs: '25%',sm: '18%',md: '12%',lg: '12%'}, marginBottom: '20px',width:'40%' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/" passHref>
          <Typography sx={{fontSize:18,fontFamily:'SKSans,sans-serif',fontWeight:400}} color='#015ccb'>Home</Typography>
        </Link>
        {pathParts.map((part, index) => {
          const href = `/${pathParts.slice(0, index + 1).join('/')}`;

          return (
            <Link key={index} href={href} style={{color:'black'}} passHref>
              <Typography sx={{fontSize:18,fontFamily:'SKSans,sans-serif',color:'#000000',fontWeight:400}}>
                {part.charAt(0).toUpperCase() + part.slice(1)}
              </Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
