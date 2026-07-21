import { IoMdTime } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidCommentDetail } from "react-icons/bi";


const Blogsprops = ({ blog }) => {
  return (
    <>
      <div className="">
        <img src={blog.image} alt={blog.name} className="object-cover rounded-[10px]" />
        <p className="font-montserrat font-bold text-[24px] pt-[20px]">{blog.name}</p>
        <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center pt-[20px]">
                <img src="/assets/images/blogsclient_image.png" alt="User-image"/>
                <p className="font-montserrat text-[16px] font-semibold">Laura</p>
            </div>
            
            <div className="flex gap-3 items-center pt-[20px]">
                <IoMdTime/>
                <p className="text-[#C2C2C2]">7 hours ago</p>
            </div>
        </div>
        <p className="font-montserrat text-[18px] font-medium pt-[10px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever.</p>
             <div className="flex justify-between">
                <div className="flex gap-2 items-center pt-[10px]">
                 <BiSolidLike className="text-[20px]"/>
                 <p className="text-[16px] font-medium font-montserrat text-[#C2C2C2]">5 Likes</p>
                </div>
                <div className="flex gap-2 items-center pt-[10px]">
                 <BiSolidCommentDetail />
                   <p>8 Comments</p>
                </div>
             </div>
      </div>
    </>
  )
}

export default Blogsprops