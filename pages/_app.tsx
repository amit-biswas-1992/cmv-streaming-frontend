import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navigation from '../components/Navigation';
import '../styles/globals.css';
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  return(
  <div className='bg-slate-900'>
  <Navigation />
  <ToastContainer autoClose={3000} position={"top-center"}  />
  <Component {...pageProps} />
  </div>
  
  )
   
}

export default MyApp
