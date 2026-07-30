
const Shopcardsprops = ({ shop }) => {
  return (
    <div className='flex w-full h-[350px] bg-cover relative overflow-hidden rounded-[10px]'
      style={{ backgroundImage: `url(${shop.image})` }}>
      <div className="w-full flex justify-between text-white
   bg-[#1D6148] p-4  font-montserrat absolute bottom-0 right-0 left-0 items-center rounded-b-[10px] overflow-hidden">
        <p className="text-[20px] font-semibold font-montserrat">{shop.name}</p>
        <p className="text-[14px] font-montserrat">{shop.available}</p>
      </div>
    </div>

  )
}

export default Shopcardsprops