function PackageCard({title, price, features}){

    return(
        <div className="bg-white rounded-xl cursor-pointer shadow p-8 hover:-translate-y-2 transition">
            <h2 className="text-2xl font-bold text-[#081C3A]">
            {   title}
            </h2>
            <p className="text-[#D4AF37] text-3xl font-bold mt-5">
                {price}
            </p>
            <ul className="mt-6 space-y-3">
                {
                    features.map((feature)=>(
                    <li key={feature}>
                    ✓ {feature}
                    </li>
                    ))
                }
            </ul>
            <button className="mt-8 bg-[#081C3A] cursor-pointer hover:text-[#D4AF37] text-white px-6 py-3 rounded-lg">
                Choose Package
            </button>
        </div>
    )

}

export default PackageCard;