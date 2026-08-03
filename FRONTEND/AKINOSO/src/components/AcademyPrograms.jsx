const programs=[
    "Frontend Development",
    "UI/UX Design",
    "Graphics Design",
    "Digital Marketing",
];

    function AcademyPrograms(){

        return(
        <section className="bg-gray-100 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-[#081C3A]">
                    Our Programs
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mt-10">
                    {
                        programs.map((program)=>(
                            <div
                            key={program}
                            className="bg-white p-8 rounded-xl shadow"
                            >
                                <h3 className="text-xl font-bold text-[#081C3A]">
                                    {program}
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    Practical training and real-world projects.
                                </p>
                            </div>
                        ))
                    }
                </div>

            </div>

        </section>

    )

}

export default AcademyPrograms;