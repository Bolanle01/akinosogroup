import { Link } from "react-router-dom";

function DigitalHero(){

    return(
        <section className="bg-[#081C3A] text-white py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-[#D4AF37] uppercase tracking-widest">
                    Akinoso Group Technology Division
                </p>
                <h1 className="text-5xl font-bold mt-5">
                    Akinoso Digital
                </h1>
                <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
                    We help businesses build their digital presence through
                    modern websites, user interfaces, branding and technology
                    solutions.
                </p>
                <Link to="/contact">
                    <button className="mt-8 bg-[#D4AF37] cursor-pointer text-black px-8 py-3 rounded-lg font-semibold">
                        Start A Project
                    </button>
                </Link>
            </div>
        </section>
    )

}

export default DigitalHero;