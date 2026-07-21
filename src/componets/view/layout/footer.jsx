import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <img className="pt-[70px]" src="/assets/images/slideshow_image.png" alt="slideshow"/>
    <div className="bg-[#1D6148]">
    <div className="container">
      <div className="max-w-[367px] pt-[50px]">
        <p className="text-white text-[55px] font-bold">Plantero</p>
        <p className="text-white text-[24px]">Lorem Ipsum is simply
           dummy text of the printing and typesetting industry.</p>
           <div className="flex gap-3 items-center pt-[20px]">
          <AiOutlineFacebook className="w-[41px] h-[41px] text-white"/>
           </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer 