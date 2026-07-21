const Bestsellerprops = ({ seller }) => {
  return (
    
    <div className="bg-[#46FF3652]">

      <img className="w-full h-[300px] object-cover"
        src={seller.image}
        alt={seller.name}
      />

      <div className="flex justify-between items-center  bg-white">
        <p>{seller.name}</p>

        <button className="bg-[#1D6148] text-white px-4 py-2 rounded-[5px]">
          Buy Now
        </button>
      </div>
      <p className="bg-white">{seller.price}</p>

    </div>
  )
}

export default Bestsellerprops