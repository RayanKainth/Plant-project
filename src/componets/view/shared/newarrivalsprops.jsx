

const Newarrivalsprops = ({arrivals}) => {
  return (
    <div className="bg-[#46FF3652] rounded-[10px]">

      <img className="w-[300px] h-[200px] object-contain "
        src={arrivals.image}
        alt={arrivals.name}
      />

      <div className="flex justify-between bg-white">
      <div className="justify-between items-center pt-[10px] bg-white">
        <p className="text-[22px] font-montserrat font-semibold">{arrivals.name}</p>
        <p className="bg-white text-[#1D6148] text-[22px] font-montserrat font-extrabold">{arrivals.price}</p>

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