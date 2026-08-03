import { useForm, ValidationError } from '@formspree/react';

function ContactForm(){
   const [state, handleSubmit] = useForm("xlgqqzbp");
  if (state.succeeded) {
  return (
    <p className="text-center text-green-600 text-lg font-semibold py-10">
      Thank you! Your message has been sent successfully.
    </p>
  );
}

return(

<section className="pb-20 px-6">

<div className="max-w-3xl mx-auto">

<form  onSubmit={handleSubmit} className="space-y-5">

<input
  type="text"
  name="name"
  placeholder="Your Name"
  required
  className="w-full border p-4 rounded-lg"
/>

<input
  type="email"
  name="email"
  placeholder="Your Email"
  required
  className="w-full border p-4 rounded-lg"
/>

<ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

<input
  type="text"
  name="subject"
  placeholder="Subject"
  required
  className="w-full border p-4 rounded-lg"
/>

<textarea
  name="message"
  placeholder="Your Message"
  required
  rows="5"
  className="w-full border p-4 rounded-lg"
></textarea>

<ValidationError
  prefix="Message"
  field="message"
  errors={state.errors}
/>

<button
  type="submit"
  disabled={state.submitting}
  className="bg-[#081C3A] text-white px-8 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
>
  {state.submitting ? "Sending..." : "Send Message"}
</button>

</form>

</div>

</section>

)

}

export default ContactForm;