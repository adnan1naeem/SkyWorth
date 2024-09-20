import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Typography, Breadcrumbs } from '@mui/material';

const Breadcrumb = () => {
  const router = useRouter();
  
  // Get the current path segments
  const pathParts = router.pathname.split('/').filter((part) => part);

  return (
    <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/" passHref>
          <Typography sx={{fontSize:20,}} color='primary'>Home</Typography>
        </Link>
        {pathParts.map((part, index) => {
          const href = `/${pathParts.slice(0, index + 1).join('/')}`;

          return (
            <Link key={index} href={href} passHref>
              <Typography sx={{fontSize:20,}}>
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
