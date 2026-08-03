import BlogCard from "./BlogCard";

const posts=[
    {
        title:"Why Every Business Needs A Digital Presence",
        category:"Technology",
        description:
        "How websites and digital tools help businesses reach more customers."
    },
    {
        title:"Building A Business Group In Africa",
        category:"Entrepreneurship",
        description:
        "Understanding the process of creating and growing multiple businesses."
    },
    {
        title:"The Future Of Artificial Intelligence",
        category:"Innovation",
        description:
        "How emerging technologies are changing industries."
    },
    {
        title:"Starting A Technology Company",
        category:"Business",
        description:
        "Important steps when building a digital company."
    }
];

function BlogList(){

    return(
        <section className="bg-gray-100 py-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {
                    posts.map((post)=>(
                        <BlogCard
                        key={post.title}
                        title={post.title}
                        category={post.category}
                        description={post.description}
                        />
                    ))
                }
            </div>
        </section>
    )

}

export default BlogList;