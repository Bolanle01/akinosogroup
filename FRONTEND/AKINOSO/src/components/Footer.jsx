import { Link } from "react-router-dom";
import groupLogo from "../assets/Logo/GROUP LOGO.png";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer(){

return(

    <footer className="bg-black text-white pt-12">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company */}

        <div>

        <Link to="/">
        <img
        src={groupLogo}
        alt="Akinoso Group Logo"
        className="w-20 h-20 rounded-full"
        />
        </Link>

        <h2 className="text-2xl font-bold text-[#D4AF37] mt-4">
        Akinoso Group
        </h2>

        <p className="text-gray-400 mt-4 leading-7">

        Building innovative businesses across technology,
        agriculture, consulting, energy, research and
        other industries.

        </p>

        <div className="flex gap-4 mt-6 text-2xl">

        <a href="#" className="hover:text-[#D4AF37]">
        <FaLinkedin />
        </a>

        <a href="#" className="hover:text-[#D4AF37]">
        <FaInstagram />
        </a>

        <a href="#" className="hover:text-[#D4AF37]">
        <FaFacebook />
        </a>

        <a href="#" className="hover:text-[#D4AF37]">
        <FaTwitter />
        </a>

        </div>

        </div>

        {/* Quick Links */}

        <div>

        <h3 className="text-xl font-bold text-[#D4AF37] mb-5">
        Quick Links
        </h3>

        <div className="flex flex-col gap-3 text-gray-300">

        <Link to="/" className="hover:text-[#D4AF37]">
            Home
        </Link>

        <Link to="/about" className="hover:text-[#D4AF37]">
            About
        </Link>

        <Link to="/businesses" className="hover:text-[#D4AF37]">
            Businesses
        </Link>

        <Link to="/portfolio" className="hover:text-[#D4AF37]">
            Portfolio
        </Link>

        <Link to="/blog" className="hover:text-[#D4AF37]">
            Blog
        </Link>

        <Link to="/contact" className="hover:text-[#D4AF37]">
            Contact
        </Link>

        </div>

        </div>

        {/* Subsidiaries */}

        <div>

        <h3 className="text-xl font-bold text-[#D4AF37] mb-5">
        Our Businesses
        </h3>

        <div className="flex flex-col gap-3 text-gray-300">

        <p>Akinoso Digital</p>
        <p>Akinoso Academy</p>
        <p>Akinoso Fashion</p>
        <p>Akinoso Properties</p>
        <p>Akinoso Agro & Foods</p>
        <p>Akinoso Logistics</p>
        <p>Akinoso Resin</p>

        </div>

        </div>

        {/* Contact */}

        <div>

        <h3 className="text-xl font-bold text-[#D4AF37] mb-5">
        Contact
        </h3>

        <div className="space-y-4 text-gray-300">

        <p className="flex gap-3 items-center">
        <FaEnvelope className="text-[#D4AF37]"/>
        akinosogroup@gmail.com
        </p>

        <p className="flex gap-3 items-center">
        <FaPhone className="text-[#D4AF37]"/>
        +234 912 7700 704
        </p>

        <p className="flex gap-3 items-center">
        <FaMapMarkerAlt className="text-[#D4AF37]"/>
        Lagos, Nigeria
        </p>

        </div>

        </div>


        </div>

        {/* Bottom */}

        <div className="border-t border-gray-800 mt-10 py-5 text-center text-gray-400 text-sm">

        © 2026 Akinoso Group. All Rights Reserved.

        </div>

    </footer>

)

}


export default Footer;