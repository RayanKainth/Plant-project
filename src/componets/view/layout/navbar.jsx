import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsPersonDown } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50">

        <div className="container">
          <div className="max-w-[1620px] flex items-center justify-between">

            <div className="pt-[35px] h-auto w-[150px]">
              <img src="/assets/images/Plantero.png" alt="Company logo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center pt-[35px] pl-[50px] text-[15px] justify-center">
              <ul className="flex gap-5 font-[Montserrat] cursor-pointer font-light">
                <li>Home</li>
                <li>Categories</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Desktop Icons */}
            <div className="hidden lg:flex justify-end gap-5 pt-[30px] flex-1">
              <button className="text-[30px]">
                <IoIosSearch />
              </button>

              <button className="text-[25px]">
                <FaRegHeart />
              </button>

              <button className="text-[30px]">
                <BsPersonDown />
              </button>

              <button className="text-[30px]">
                <MdOutlineShoppingCart />
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setOpen(true)}
              className="flex justify-end w-full items-center pt-[30px] text-[#1D6148] lg:hidden"
            >
              <FiMenu className="text-3xl" />
            </button>

          </div>
        </div>
      </nav>


      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-[100]
        shadow-lg transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="text-3xl p-5 text-[#1D6148]"
        >
          <IoClose />
        </button>


        {/* Mobile Menu Links */}
        <ul className="flex flex-col gap-6 p-5 font-[Montserrat]">
          <li>Home</li>
          <li>Categories</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

      </div>


      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-[90]"
        ></div>
      )}

    </>
  );
};

export default Navbar;