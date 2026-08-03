import { Link } from "react-router-dom";

function PortfolioCTA(){

    return(
        <section className="bg-[#081C3A] text-white py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold">
                    Have A Project In Mind?
                </h2>
                <p className="mt-5 text-gray-300">
                    Let's build a digital solution for your business.
                </p>
                <Link to="/contact">
                    <button className="mt-8 bg-[#D4AF37] cursor-pointer text-black px-8 py-3 rounded-lg font-semibold">
                        Contact Akinoso Digital
                    </button>
                </Link>
            </div>
        </section>
    )

}

export default PortfolioCTA;