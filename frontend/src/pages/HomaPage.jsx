import BriefPost from "../components/BriefPost";
import Category from "../components/Category"
import FeatureCart from "../components/FeatureCart"
import Button from "../components/ui/Button";
import SearchBar from "../components/ui/SearchBar";
import { cartImg1, cartImg2, cartImg3, cartImg4, categoryImg1, categoryImg2, categoryImg3, categoryImg4, categoryImg5, categoryImg6, categoryImg7, categoryImg8, sideImg1 } from "../utils/importExportHelper"
import { FaSearch } from "react-icons/fa";


const HomaPage = () => {
  return (
    <>
    <h1 className="bg-white text-center  py-6 md:text-xl text-[17px] text-2xl">Simple recipes made for <span className="font-fancy text-purple-900">real, actual, everyday life</span></h1>
    <div className="max-w-6xl  mx-auto">
        <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4   mt-10 md:gap-4 gap-10">
            <FeatureCart imgSrc={cartImg1} category="Dinner" />
            <FeatureCart imgSrc={cartImg2} category="Bowls" />
            <FeatureCart imgSrc={cartImg3} category="Burger" />
            <FeatureCart imgSrc={cartImg4} category="Salad" />
        </div>

        <div className="flex gap-10 overflow-x-auto my-20">
          <Category imgSrc={categoryImg1} category="Dinner" />
          <Category imgSrc={categoryImg2} category="Dinner" />
          <Category imgSrc={categoryImg3} category="Dinner" />
          <Category imgSrc={categoryImg4} category="Dinner" />
          <Category imgSrc={categoryImg5} category="Dinner" />
          <Category imgSrc={categoryImg6} category="Dinner" />
          <Category imgSrc={categoryImg7} category="Dinner" />
          <Category imgSrc={categoryImg8} category="Dinner" />
        </div>
        {/* search bar */}
        <div id="search-section" className="flex justify-between my-20  w-3/5 mx-auto  items-center gap-4">
          <SearchBar placeholder="Search our  recipe" />
          <span className="font-fancy text-stone-500 text-2xl">Or</span>
          <Button>+ View all recipe</Button>
        </div>

    </div>
        <div className="bg-white  gap-8 ">
          {/* brief post */}
          <div className="max-w-6xl gap-6 flex  mx-auto">
          <div className="mt-10 w-full  md:w-2/3 ">
          <h2 className="uppercase mb-6  text-center md:text-start text-[18px] font-extrabold">The latest & greatest</h2>
        <div className="  grid grid-cols-1  gap-10 ">
          
          <BriefPost image={cartImg1} title="How to make a perfect burger" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." postTime="2 days ago" />
            <hr />
          <BriefPost image={cartImg1} title="How to make a perfect burger" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." postTime="2 days ago" />
          <hr />
          <BriefPost image={cartImg1} title="How to make a perfect burger" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." postTime="2 days ago" />
          <hr />
        </div>

          </div>
          <div className="w-1/3 mt-10 h-[500px] hidden md:block relative bg-pink-400">
            <img src={sideImg1} className="size-full object-cover" alt="" />
              <div className="flex flex-col absolute py-3 top-[42%] w-full items-center gap-2 bg-purple-950 text-white opacity-60">
              <span className="font-fancy text-3xl">Yamm Yamm</span>
              <span className="uppercase text-2xl">Milk Shake</span>
              </div>
          </div>
        </div>
          
        </div>
    </>
  )
}

export default HomaPage