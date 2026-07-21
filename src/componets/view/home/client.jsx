import Clientprops from "../shared/clientprops"
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";


const ClientData =[
    {id: 1, image:"/assets/images/invertedcomma_image.png", image1:"/assets/images/client_image.png", image2:"/assets/images/rating_image.png",},
    {id: 2, image:"/assets/images/invertedcomma_image.png", image1:"/assets/images/client_image1.png", image2:"/assets/images/rating_image.png",},
    {id: 3, image:"/assets/images/invertedcomma_image.png", image1:"/assets/images/client_image2.png", image2:"/assets/images/rating_image.png",},
    {id: 4, image:"/assets/images/invertedcomma_image.png", image1:"/assets/images/client_image3.png", image2:"/assets/images/rating_image.png",}
]

const Client = () => {
  return (
    <>
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
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[30px] lg:grid-cols-4 
        pt-[80px] max-w-[1620px] justify-items-center mx-auto lg:gap-[10px]">
            {ClientData.map((clients, id) => (
                <Clientprops key={id} clients={clients}/>
            ))}
        </div>

    </div>
    </>
  )
}

export default Client