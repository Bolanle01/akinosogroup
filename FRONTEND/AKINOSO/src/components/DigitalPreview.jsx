const services=[
"Website Development",
"UI/UX Design",
"Brand Identity",
"Digital Solutions"
];


function DigitalPreview(){

return(

<section className="py-20 px-6">


<div className="max-w-7xl mx-auto">


<h2 className="text-4xl font-bold text-center">
Akinoso Digital
</h2>


<div className="grid md:grid-cols-4 gap-6 mt-12">


{
services.map((service)=>(

<div 
key={service}
className="border p-6 rounded-xl text-center"
>

<h3 className="font-semibold">
{service}
</h3>

</div>

))
}


</div>


</div>

</section>

)

}

export default DigitalPreview;