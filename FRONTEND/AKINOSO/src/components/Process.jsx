const services=[
    {
        title:"Website Development",
        description:"Modern responsive websites built for businesses."
    },
    {
        title:"UI/UX Design",
        description:"Clean and user-friendly digital experiences."
    },
    {
        title:"Brand Identity",
        description:"Logos, visuals and digital brand systems."
    },
    {
        title:"Digital Solutions",
        description:"Technology solutions that improve businesses."
    }
];

function DigitalServices(){

    return(
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center">
                    Our Services
                </h2>
                <div className="grid md:grid-cols-4 gap-6 mt-12">
                    {
                        services.map((service)=>(
                        <div
                        key={service.title}
                        className="p-7 rounded-xl shadow bg-white"
                        >
                            <h3 className="text-xl font-bold text-[#081C3A]">
                            {service.title}
                            </h3>
                            <p className="mt-3 text-gray-600">
                            {service.description}
                            </p>
                        </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )

}

export default DigitalServices;