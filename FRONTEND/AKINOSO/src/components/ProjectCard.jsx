function ProjectCard({title, description, tech, image}){

    return(
        <div className="bg-white rounded-xl cursor-pointer shadow overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
                {
                    image ? (
                    <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    />
                    )
                    :
                    (
                    <p className="text-gray-500">
                    Project Image
                    </p>
                    )
                }
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-bold text-[#081C3A]">
                    {title}
                </h2>
                <p className="mt-3 text-gray-600">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                    {
                        tech.map((item)=>(
                        <span
                        key={item}
                        className="bg-[#081C3A] text-white px-3 py-1 rounded-full text-sm"
                        >
                            {item}
                        </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
    
}

export default ProjectCard;