import { IoIosHeartEmpty } from "react-icons/io";


const Newarrivalsprops = ({arrivals}) => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#46FF3652_0%,#FFFFFF00_80%)]
         rounded-[10px] shadow-lg w-full h-[400px]">
          <div className="w-[40px] h-[40px] flex items-center justify-center
           ml-auto mt-3 mr-3 rounded-full bg-white">
            <IoIosHeartEmpty className="text-[20px]"/>
          </div>
<div className="w-[220px] h-[260px] mx-auto">
      <img className="w-[300px] h-[200px] object-contain "
        src={arrivals.image}
        alt={arrivals.name}
      />
</div>
      <div className="flex justify-between px-[10px]">
      <div className="justify-between items-center pt-[10px]">
        <p className="text-[22px] font-montserrat font-semibold">{arrivals.name}</p>
        <p className="text-[#1D6148] text-[22px] font-montserrat font-extrabold">{arrivals.price}</p>

        </div>
        <div className="pt-[20px]">
        <button className="bg-[#1D6148] text-white px-4 py-2 rounded-[5px]">
          Buy Now
        </button>
        </div>
      
      </div>

    </div>
  )
}

export default Newarrivalsprops