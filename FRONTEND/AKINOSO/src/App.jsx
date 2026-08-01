import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Businesses from "./pages/Businesses";
import Digital from "./pages/Digital";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";


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