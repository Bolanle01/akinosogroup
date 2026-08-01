function Button({children, variant="primary"}){

return(

<button

className={`
px-7 py-3 rounded-lg font-semibold transition duration-300

${
variant === "primary"

?

"bg-[#D4AF37] text-black hover:bg-yellow-400"

:

"border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black"

}

`}

>

{children}

</button>

)

}

export default Button;