import Blogsprops from "../shared/blogsprops"
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

const BlogsData =[
    {id: 1, image:"/assets/images/blogs_image.png", name:"How To Improve Pot Plants",},
    {id: 2, image:"/assets/images/blogs_image1.png", name:"Tropical Plants Care",},
    {id: 3, image:"/assets/images/blogs_image2.png", name:"Bromeliad Mount Care",}
]

const Blogs = () => {
  return (
    <div className="container">
        <div className="pt-[60px] flex justify-between items-center">
                <p className="font-montserrat font-semibold text-[50px]">Client Reviews</p>
                <div className="flex gap-2">
                <button className="bg-[#E8E8E8] text-white px-3 py-3 rounded-[5px]">
                  <FaLessThan/>
                </button>
                  <button className="bg-[#1D6148] text-white px-3 py-3 rounded-[5px]">
                    <FaGreaterThan/>
                  </button>
                  </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        pt-[30px] max-w-[1620px] justify-items-center gap-[20px]">
            {BlogsData.map((blog, id) => (
                <Blogsprops key={id} blog={blog}/>
            ))}
        </div>
                </div>
    </div>
    
  )
}

export default Blogs