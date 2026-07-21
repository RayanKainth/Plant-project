import Newarrivalsprops from "../shared/newarrivalsprops"
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

const NewarrivalsData =[
    { id: 1, image: '/assets/images/newarrival_image.png', name: 'lorem Ipsum', price: '$15',},
    { id: 2, image: '/assets/images/newarrival_image1.png', name: 'lorem Ipsum', price: '$11',},
    { id: 3, image: '/assets/images/newarrival_image2.png', name: 'lorem Ipsum', price: '$15',},
    { id: 4, image: '/assets/images/newarrival_image3.png', name: 'lorem Ipsum', price: '$8',}
]

const Newarrivals = () => {
  return (
    <div className="container">
      <div className="pt-[60px] flex justify-between items-center">
        <p className="font-montserrat font-semibold text-[50px]">New Arrivals</p>
        <div className="flex gap-2">
        <button className="bg-[#E8E8E8] text-white px-3 py-3 rounded-[5px]">
          <FaLessThan/>
        </button>
          <button className="bg-[#1D6148] text-white px-3 py-3 rounded-[5px]">
            <FaGreaterThan/>
          </button>
          </div>
        </div>
      <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4 pt-[30px]
       max-w-[1620px] justify-items-center">
            {NewarrivalsData.map((arrivals, id) => (
                <Newarrivalsprops key={id} arrivals={arrivals}/>
            ))}
        </div>
    </div>
  )
}

export default Newarrivals