
import Home from "./pages/home";
import About from "./pages/about"
import Events from "./pages/events"
import Contact from "./pages/contact"
import Gallery from "./pages/gallery"
import Shop from "./pages/shop"
import Product from "./pages/product"
import Cart from "./pages/cart"
import Succes from "./pages/succes"
import Terms from "./pages/terms"
import PrivacyP from "./pages/privacyp"
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './assets/style/style.css'
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  // return <Home/>
  return (
    <Router>
      <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/succes" element={<Succes/>}/>
      <Route path="/gallery"  element={<Gallery/>}/>
      <Route path="/About-Ivana" element={<About/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/Events" element={<Events/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/terms" element={<Terms/>} />
      <Route path="/privacy" element={<PrivacyP/>} />

    </Routes>
  </Router>
  ) ;
  
  
};

export default App;