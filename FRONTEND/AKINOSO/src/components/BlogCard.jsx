function BlogCard({title, category, description}){

    return(

        <div className="bg-white rounded-xl cursor-pointer shadow p-8 hover:-translate-y-2 transition">
            <p className="text-[#D4AF37] font-semibold">
                {category}
            </p>
            <h2 className="text-2xl font-bold text-[#081C3A] mt-3">
                {title}
            </h2>
            <p className="mt-4 text-gray-600">
                {description}
            </p>
            <button className="mt-6 text-[#081C3A] font-semibold">
                Read More →
            </button>
        </div>

    )

}

export default BlogCard;