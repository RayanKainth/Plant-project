import { AiOutlineFacebook } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
    <img className="pt-[70px]" src="/assets/images/slideshow_image.png" alt="slideshow"/>
    <div className="bg-[#1D6148] pb-[90px]">
    <div className="container flex justify-between flex-wrap">
      <div className="max-w-[367px] pt-[50px]">
        <p className="text-white text-[55px] font-bold font-Passion">Plantero</p>
        <p className="text-white text-[22px] font-poppins ">Lorem Ipsum is simply
           dummy text of the printing and typesetting industry.</p>
           <div className="flex gap-3 items-center pt-[20px]">
          <AiOutlineFacebook className="w-[41px] h-[41px] text-white  hover:text-blue-700 transition-colors duration-300 cursor-pointer"/>
          <BsTwitterX className="w-[40px] h-[32px] text-white hover:text-black transition-colors duration-300 cursor-pointer"/>
          <FaInstagram className="w-[40px] h-[40px] text-white hover:text-pink-500 transition-colors duration-300 cursor-pointer"/>
          <RiYoutubeLine className="w-[50px] h-[50px] text-white hover:text-red-600 transition-colors duration-300 cursor-pointer"/>
           </div>
      </div>
      <div className="max-w-[112px] pt-[80px]">
        <p className="text-white text-[24px] font-bold font-poppins">Pages</p>
        <div className="pt-[15px] text-white text-[20px] font-poppins flex flex-col gap-[2px]">
          <p>Home</p>
          <p>Categories</p>
          <p>About Us</p>
          <p>Blogs</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="max-w-[242px] pt-[80px]">
        <p className="text-white text-[24px] font-semibold font-poppins">Contact Us</p>
        <div className="flex flex-col gap-[10px]">
          <div className="text-white pt-[15px]">
            <p className="font-poppins font-semibold text-[20px]">Email</p>
            <p className="font-semibold text-[16px]">rayankainth@gmail.com</p>
          </div>
          <div className="text-white pt-[15px]">
            <p className="font-poppins font-semibold text-[20px]">Contact Us</p>
            <p className="font-semibold text-[16px]">+2347689834201</p>
          </div>
        </div>
      </div>
      <div className="max-w-[112px] pt-[80px]">
        <p className="text-white text-[22px] font-semibold font-poppins">Follow Us</p>
        <div className="pt-[15px] text-white text-[20px] font-poppins flex flex-col gap-[10px]">
        <p>instagram</p>
        <p>twitter</p>
        <p>facebook</p>
        <p>youtube</p>
      </div>
      </div>
      <div className="max-w-[357px] pt-[80px]">
        <p className="text-white text-[24px] font-semibold font-poppins">Join Our Mailing List</p>
        <p className="text-white text-[20px] font-poppins pt-[15px]">Subscribe Our News Letter For Latest Updates</p>
        <div className="max-w-[357px] pt-[15px]">
          <input type="email" placeholder="Email Address" className="px-10 py-2 rounded-[3px] bg-gray-300 " />
        </div>
        <div className="pt-[35px] max-w-[157px]">
          <button className="bg-[#318063] text-white py-4 px-8 rounded-[3px] hover:bg-green-900 transition-colors duration-300 text-[18px] font-poppins">Subscribe</button>
        </div>
      </div>
    </div>
    </div>
    <div className="bg-[#318063] flex justify-center pt-[20px] pb-[20px]">
      <p className="text-white text-[18px] font-poppins">Plantero Plants © 2023 | Plantero Plants Shop. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer 