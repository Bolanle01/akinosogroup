import groupLogo from "../assets/Logo/GROUP LOGO.png";
import { Link } from "react-router-dom";

function Hero(){

return(

<section className="bg-[#081C3A] text-white min-h-[90vh] flex items-center">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">


<div>

<p className="text-[#D4AF37] uppercase tracking-widest mb-4">
    Welcome to Akinoso Group
</p>


<h1 className="text-5xl md:text-6xl font-bold leading-tight">
    Building Innovative Businesses For The Future
</h1>


<p className="text-gray-300 mt-6 text-lg leading-8">
    Akinoso Group creates and develops businesses across
    technology, agriculture, consulting, energy and other
    industries while delivering solutions that create value.
</p>


<div className="mt-8 flex gap-4">

<Link to="/businesses">
    <button className="bg-[#D4AF37] cursor-pointer text-black px-6 py-3 rounded-lg font-semibold">
        Explore Businesses
    </button>
</Link>

<Link to="/contact">
    <button className="border border-[#D4AF37] cursor-pointer px-6 py-3 rounded-lg">
        Contact Us
    </button>
</Link>


</div>


</div>



<div className="hidden md:flex justify-center">

<div className="w-80 h-80 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">

<img src={groupLogo} alt=""
 className="w-80 h-80 rounded-full object-cover"
 />

</div>

</div>


</div>

</section>

)

}

export default Hero;