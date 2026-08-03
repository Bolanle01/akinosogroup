import PackageCard from "./PackageCard";

const packages=[
    {
        title:"Starter Website",
        price:"₦50,000+",
        features:[
            "Responsive Website",
            "3-5 Pages",
            "Mobile Friendly Design",
            "Basic SEO Setup"
        ]
    },
    {
        title:"Business Website",
        price:"₦100,000+",
        features:[
            "Custom Design",
            "5-10 Pages",
            "Contact Form",
            "SEO Optimization",
            "Deployment Support"
        ]
    },
    {
        title:"Premium Solution",
        price:"₦200,000+",
        features:[
            "Advanced Website",
            "Custom Features",
            "Database Integration",
            "Full Support",
            "Business Consultation"
        ]
    }
];

function PackagesList(){

    return(
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {
                        packages.map((item)=>(
                            <PackageCard
                            key={item.title}
                            title={item.title}
                            price={item.price}
                            features={item.features}
                            />
                        ))
                    }
                </div>
            </section>
    )
}

export default PackagesList;