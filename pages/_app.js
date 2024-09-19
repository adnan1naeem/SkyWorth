import "../styles/global.css";

import Footer from "../components/Footer/Footer";
// import '@/styles/globals.css'
import Navbar from "../components/Navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
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
