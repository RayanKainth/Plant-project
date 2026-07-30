import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsPersonDown } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="container">
        <div className="flex items-center justify-between h-[70px]">

          <div className="w-[120px] lg:w-[150px]">
            <img
              src="/assets/images/Plantero.png"
              alt="Company logo"
              className="w-full"
            />
          </div>


          <div className="hidden lg:flex items-center ml-[45px]">
            <ul className="flex items-center gap-6 font-montserrat text-[16px] font-medium">
              <li>Home</li>

              <li className="flex items-center gap-1">
                Categories
                <p>⌄</p>
              </li>
              <li>About Us</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="hidden lg:flex ml-auto items-center gap-4">
            <IoIosSearch className="text-xl" />
            <FaRegHeart className="text-xl" />
            <BsPersonDown className="text-xl" />
            <MdOutlineShoppingCart className="text-xl" />
          </div>

          <button className="lg:hidden text-[#1D6148] text-3xl">
            <FiMenu />
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;