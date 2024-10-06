import { Link } from "react-router-dom"
import logo from '../../assets/images/logo.png'
import { FaSearch } from "react-icons/fa";


const Navbar = () => {



return (
    <div className="drawer font-Comfortaa">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="navbar border-b bg-white flex justify-between  px-4 md:px-12  w-full">
        <div className="flex-none md:hidden">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <Link>
            <img src={logo} className="w-10 md:w-12 lg:w-16" alt="" />
        </Link> 
        <div className="hidden  w-4/5 lg:w-2/4 md:block">
          <ul className="menu  text-[16px] lg:text-xl flex justify-between font-bold menu-horizontal">
            {/* Navbar menu content here */}
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>Recipes</Link>
            </li>
            <li>
                <Link>About</Link>
            </li>
            <li>
                <Link>Share Recipe</Link>
            </li>
            <li>
            <FaSearch  size={50} className="cursor-pointer  bg-blacks" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
      
      <ul className="menu bg-base-200 min-h-full font-semibold w-80 p-4">
        {/* Sidebar content here */}
        <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>Recipes</Link>
            </li>
            <li>
                <Link>About</Link>
            </li>
            <li>
            <Link>Share Recipe</Link>
            </li>
      </ul>
    </div>
  </div>
)
}



export default Navbar