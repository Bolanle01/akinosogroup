function ContactForm(){

return(

<section className="pb-20 px-6">

<div className="max-w-3xl mx-auto">


<form className="space-y-5">


<input
type="text"
placeholder="Your Name"
className="w-full border p-4 rounded-lg"
/>


<input
type="email"
placeholder="Your Email"
className="w-full border p-4 rounded-lg"
/>


<input
type="text"
placeholder="Subject"
className="w-full border p-4 rounded-lg"
/>


<textarea

placeholder="Your Message"

rows="5"

className="w-full border p-4 rounded-lg"

></textarea>


<button
className="bg-[#081C3A] text-white px-8 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-black transition"
>

Send Message

</button>


</form>


</div>

</section>

)

}

export default ContactForm;