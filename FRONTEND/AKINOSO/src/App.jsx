import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Businesses from "./pages/Businesses.jsx";
import Digital from "./pages/Digital.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import NotFound from "./pages/NotFound.jsx";


function App(){

return(

<BrowserRouter>

<Navbar />


<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/businesses" element={<Businesses />} />

<Route path="/digital" element={<Digital />} />

<Route path="/contact" element={<Contact />} />

<Route path="/portfolio" element={<Portfolio />} />

<Route path="*" element={<NotFound />} />

</Routes>


<Footer />

</BrowserRouter>

)

}

export default App;