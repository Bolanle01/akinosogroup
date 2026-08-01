function BusinessCard({name, description, status}){

return(

<div className="bg-white rounded-xl shadow p-8 hover:shadow-lg transition">


<h2 className="text-2xl font-bold text-[#081C3A]">
{name}
</h2>


<p className="mt-4 text-gray-600">
{description}
</p>


<span className="inline-block mt-5 text-[#D4AF37] font-semibold">
{status}
</span>


</div>

)

}

export default BusinessCard;