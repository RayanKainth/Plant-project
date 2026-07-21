import Bestsellerprops from "../shared/bestsellerprops"
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

const BestsellerData =[ 
    { id: 1, image:"/assets/images/bestseller_image.png" ,name:"lorem Ipsum", price: "$12",},
    { id: 2, image:"/assets/images/bestseller_image1.png" ,name:"lorem Ipsum", price: "$17",},
    { id: 3, image:"/assets/images/bestseller_image2.png" ,name:"lorem Ipsum", price: "$10",},
    { id: 4, image:"/assets/images/bestseller_image3.png" ,name:"lorem Ipsum", price: "$20",}
]


const Bestseller = () => {
  return (
    
<div className="container">
    <div className="max-w-[1620px]">
        <div className="pt-[60px] flex justify-between items-center">
        <p className="font-montserrat font-semibold text-[50px]">Best Seller</p>
        <div className="flex gap-2">
        <button className="bg-[#E8E8E8] text-white px-3 py-3 rounded-[5px]">
          <FaLessThan/>
        </button>
          <button className="bg-[#1D6148] text-white px-3 py-3 rounded-[5px]">
            <FaGreaterThan/>
          </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        pt-[30px] max-w-[1620px] justify-items-center">
            {BestsellerData.map((seller, id) => (
                <Bestsellerprops key={id} seller={seller}/>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Bestseller