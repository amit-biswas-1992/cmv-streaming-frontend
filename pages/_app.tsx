import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core"
import Navigation from '../components/Navigation'
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  return<>
  <Navigation />
  <Component {...pageProps} />
  
  </>
   
}

export default MyApp
