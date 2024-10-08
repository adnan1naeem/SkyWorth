import { Box } from "@mui/material";
import "../styles/global.css";
import Footer from './../components/Footer/Footer';
import Navbar from './../components/NavBar/NavBar'
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Box sx={{mt:'4%'}}>
      <Component {...pageProps} />
      </Box>

      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;

          font-family: sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
