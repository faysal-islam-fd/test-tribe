import {Link} from 'react-router-dom' 

const BriefPost = ({image,title,description,postTime}) => {
  return (
    <div className="flex flex-col md:flex-row md:h-[250px]  items-center gap-4 ">
                
    <img src={image} alt="" className="w-full  h-full md:w-1/3 object-cover" />
    <div className="h-full  px-4 md:pr-6 flex flex-col gap-2 justify-around">
        <span>{postTime}</span>
        <h3 className="text-[16px] md:text-xl lg:text-2xl font-fancy text-stone-950">{title}</h3>
        <p className="text-stone-700">{description}</p>
        <Link to="/post" className="hover:text-black transition-all duration-150 text-accent uppercase font-extrabold">Read more</Link>
    </div>
  </div>
  )
}

export default BriefPost