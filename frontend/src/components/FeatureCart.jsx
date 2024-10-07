

const FeatureCart = ({imgSrc,category}) => {
  
    return (
    <div  className="h-[300px] hover:opacity-80 transition-all duration-100 cursor-pointer w-[70%] md:w-full mx-auto relative justify-center">  
        <img className="h-full w-full" src={imgSrc} alt="" />
        <h2 className="bg-accent text-center text-white py-2 px-4 bottom-[-20px] left-[35%] right-[35%]  absolute">{category}</h2>
    </div>
  )
}

export default FeatureCart