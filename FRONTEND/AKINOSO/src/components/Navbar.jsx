import { Link } from "react-router-dom";

function Navbar(){

return(

<nav className="bg-[#081C3A] text-white px-6 py-5">

<div className="max-w-7xl mx-auto flex justify-between items-center">


{/* Logo */}

<Link 
to="/"
className="text-2xl font-bold text-[#D4AF37]"
>
Akinoso Group
</Link>



{/* Desktop Menu */}

<div className="hidden md:flex gap-8 items-center">


<Link to="/" className="hover:text-[#D4AF37]">
Home
</Link>


<Link to="/about" className="hover:text-[#D4AF37]">
About
</Link>


<Link to="/businesses" className="hover:text-[#D4AF37]">
Businesses
</Link>


<Link to="/digital" className="hover:text-[#D4AF37]">
Digital
</Link>


<Link to="/portfolio" className="hover:text-[#D4AF37]">
Portfolio
</Link>


<Link to="/contact" className="hover:text-[#D4AF37]">
Contact
</Link>


</div>




{/* Mobile Hamburger */}

<input 
type="checkbox"
id="menu-toggle"
className="hidden peer"
/>


<label 
htmlFor="menu-toggle"
className="md:hidden cursor-pointer text-3xl"
>

☰

</label>



{/* Mobile Menu */}

<div className="
absolute
top-20
left-0
w-full
bg-[#081C3A]
hidden
peer-checked:block
md:hidden
">


<div className="flex flex-col p-6 gap-5">


<Link to="/">
Home
</Link>


<Link to="/about">
About
</Link>


<Link to="/businesses">
Businesses
</Link>


<Link to="/digital">
Digital
</Link>


<Link to="/portfolio">
Portfolio
</Link>


<Link to="/contact">
Contact
</Link>


</div>


</div>


</div>

</nav>

)

}

export default Navbar;