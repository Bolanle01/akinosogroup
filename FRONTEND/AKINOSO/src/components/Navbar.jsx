import { Link } from "react-router-dom";
import { useState } from "react";
import groupLogo from "../assets/Logo/GROUP LOGO.png";

function Navbar(){

const [open, setOpen] = useState(false);

return(

    <nav className="relative bg-[#081C3A] text-white px-6 py-5">

        <div className="max-w-7xl mx-auto flex justify-between items-center">

            {/* Logo */}

            <Link
            to="/"
            className="flex items-center gap-3 font-bold text-[#D4AF37]"
            >
            <img
                src={groupLogo}
                alt="Akinoso Group Logo"
                className="w-12 h-12 md:w-20 md:h-20 rounded-full"
            />

            <h2 className="text-lg md:text-3xl">
                Akinoso Group
            </h2>
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

                <Link to="/academy" className="hover:text-[#D4AF37]">
                    Academy
                </Link>

                <Link to="/portfolio" className="hover:text-[#D4AF37]">
                    Portfolio
                </Link>

                <Link to="/blog">
                    Blog
                </Link>

                <Link to="/packages">
                    Packages
                </Link>

                <Link to="/contact" className="hover:text-[#D4AF37]">
                    Contact
                </Link>

            </div>


            {/* Mobile Hamburger */}

            <div className="md:hidden">

                <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-3xl"
                >
                {open ? "✕" : "☰"}
                </button>

                {open && (

                <div className="
                    absolute
                    top-full
                    left-0
                    w-full
                    bg-[#081C3A]
                    flex
                    flex-col
                    p-6
                    gap-5
                    z-50
                    "
                >

                    <Link to="/" onClick={()=>setOpen(false)}>
                        Home
                    </Link>

                    <Link to="/about" onClick={()=>setOpen(false)}>
                        About
                    </Link>

                    <Link to="/businesses" onClick={()=>setOpen(false)}>
                        Businesses
                    </Link>

                    <Link to="/digital" onClick={()=>setOpen(false)}>
                        Digital
                    </Link>

                    <Link to="/academy" onClick={()=>setOpen(false)}>
                        Academy
                    </Link>

                    <Link to="/portfolio" onClick={()=>setOpen(false)}>
                        Portfolio
                    </Link>

                    <Link to="/packages" onClick={()=>setOpen(false)}>
                        Packages
                    </Link>

                    <Link to="/blog" onClick={()=>setOpen(false)}>
                        Blog
                    </Link>

                    <Link to="/contact" onClick={()=>setOpen(false)}>
                        Contact
                    </Link>

                </div>

                )}

            </div>

        </div>

    </nav>

)

}

export default Navbar;