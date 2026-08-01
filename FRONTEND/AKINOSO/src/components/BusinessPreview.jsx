const businesses=[

{
name:"Akinoso Digital",
status:"Active"
},

{
name:"Akinoso Agro & Foods",
status:"Coming Soon"
},

{
name:"Akinoso Consulting",
status:"Coming Soon"
},

{
name:"Akinoso Legal & Advisory",
status:"Coming Soon"
},

{
name:"Akinoso Energy",
status:"Coming Soon"
}

];


function BusinessPreview(){

return(

<section className="bg-gray-100 py-20 px-6">


<div className="max-w-7xl mx-auto">


<h2 className="text-4xl font-bold text-center mb-12">
Our Businesses
</h2>



<div className="grid md:grid-cols-3 gap-8">


{
businesses.map((business)=>(


<div 
key={business.name}
className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
>


<h3 className="text-2xl font-bold text-[#081C3A]">
{business.name}
</h3>


<p className="text-[#D4AF37] mt-3">
{business.status}
</p>


</div>


))
}


</div>


</div>


</section>

)

}

export default BusinessPreview;