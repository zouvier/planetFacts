import '../styles/globals.css';
import Navbar from '../components/Navbar';

const App = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
  </div>
);
export default App;
