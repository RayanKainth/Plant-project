import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsPersonDown } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = () => {
  return (
    <>
        <nav className="absolute top-0 left-0 w-full z-50">

     <div className="container">
        <div className="max-w-[1620px] flex">
          <div className="pt-[35px] h-auto w-[150px]" >
     <img src="/assets/images/Plantero.png" alt="Company logo"/>
     </div>
    <div className="">
      <ul className="flex justify-center gap-5 items-center pt-[35px] pl-[50px]
        text-[15px] font-[Montserrat] cursor-pointer font-light">
        <li>Home</li>
        <li>Categories</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="flex justify-end gap-5 pt-[30px] flex-1 ">
    <button className="text-[30px]">
      <IoIosSearch/>
    </button>
    <button className="text-[25px]">
<FaRegHeart/>
    </button>
    <button className="text-[30px]">
<BsPersonDown/>
    </button>
    <button className="text-[30px]">
<MdOutlineShoppingCart/>
    </button>
    </div>
    </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar