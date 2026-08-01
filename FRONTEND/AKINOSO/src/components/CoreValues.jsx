const values=[

"Innovation",

"Integrity",

"Excellence",

"Customer Focus",

"Growth",

"Collaboration"

];


function CoreValues(){

return(

<section className="py-20 px-6">


<div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold text-center">
Our Core Values
</h2>


<div className="grid md:grid-cols-3 gap-6 mt-12">


{
values.map(value=>(

<div
key={value}
className="bg-[#081C3A] text-white p-8 rounded-xl text-center"
>

<h3 className="text-xl font-bold text-[#D4AF37]">
{value}
</h3>

</div>

))
}


</div>


</div>


</section>

)

}

export default CoreValues;