import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "@fortawesome/fontawesome-free/js/all.min.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Skills from './component/skills/Skills'
import Info from './component/information/Info'
import About from './component/about_me/About'
import Portofolio from './component/portofolio/Portofolio'
import Footer from "./component/footer/Footer";

function App() {
  return (
  <>
  <Info></Info>
  <About></About>
  <Skills></Skills>
  <Portofolio></Portofolio>
  <Footer></Footer>
  </>
  );
}

export default App;
