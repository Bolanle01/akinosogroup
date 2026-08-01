import ProjectCard from "./ProjectCard";


const projects=[

{
title:"Akinoso Group Website",

description:
"Corporate website for Akinoso Group showcasing businesses and services.",

tech:[
"React",
"Tailwind CSS",
"JavaScript"
]

},


{
title:"YouTube Clone",

description:
"A video platform interface built to practice modern frontend development.",

tech:[
"React",
"Tailwind CSS",
"API"
]

},


{
title:"TikTok Clone",

description:
"A short-video social media interface built with modern frontend tools.",

tech:[
"React",
"CSS",
"JavaScript"
]

},


{
title:"Face Authentication System",

description:
"A facial recognition authentication prototype developed as a final year project.",

tech:[
"HTML",
"CSS",
"JavaScript",
"face-api.js"
]

}

];


function ProjectList(){

return(

<section className="bg-gray-100 py-20 px-6">


<div className="max-w-7xl mx-auto">


<div className="grid md:grid-cols-3 gap-8">


{
projects.map((project)=>(

<ProjectCard

key={project.title}

title={project.title}

description={project.description}

tech={project.tech}

/>

))
}


</div>


</div>


</section>

)

}

export default ProjectList;