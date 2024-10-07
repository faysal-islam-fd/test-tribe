
const Category = ({imgSrc,category}) => {
  return (
    <div className=" gap-2 flex flex-col items-center w-28">
      <img className="rounded-full size-28 object-cover " src={imgSrc} alt="" />
      <h2 className="font-bold ">{category}</h2>
    </div>
   )
}

export default Category