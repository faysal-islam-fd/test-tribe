
const Button = ({children,className,...props}) => {
    let defaultClasses = "bg-accent text-white py-2 uppercase font-bold px-6 hover:scale-95 transition-all duration-100"
    if(className){
        defaultClasses += " " + className
    }   
  return (
    <button {...props} className={defaultClasses}>{children}</button>
 
)
}

export default Button