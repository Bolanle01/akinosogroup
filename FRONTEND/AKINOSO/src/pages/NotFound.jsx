function NotFound(){

return(

<section className="min-h-screen bg-[#081C3A] text-white flex items-center justify-center px-6">

<div className="text-center">


<h1 className="text-7xl font-bold text-[#D4AF37]">
404
</h1>


<h2 className="text-3xl font-bold mt-5">
Page Not Found
</h2>


<p className="mt-4 text-gray-300">
Sorry, the page you are looking for does not exist.
</p>


<a
href="/"
className="inline-block mt-8 bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold"
>

Back To Home

</a>


</div>


</section>

)

}

export default NotFound;