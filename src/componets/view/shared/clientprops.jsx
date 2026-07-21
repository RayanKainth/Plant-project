
const Clientprops = ({clients}) => {
  return (
    
<div className="bg-[#1D6148] w-full max-w-[480px] relative p-5 gap-3">

  <img 
    src={clients.image} 
    alt="Inverted Comma"
    className="absolute top-[-40px] right-[20px] w-[50px] h-[50px]"
  />

  <div className="flex items-center gap-4">
    <img 
      src={clients.image1} 
      alt="Client" 
      className="max-w-[120px]"
    />

    <div className="flex flex-col gap-1">
      <p className="font-montserrat font-semibold text-white">
        Muhammad Usman
      </p>

      <img 
        src={clients.image2} 
        alt="Rating" 
        className="max-w-[144px]"
      />
    </div>
  </div>

  <p className="text-white mt-5 font-montserrat text-[12px]">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </p>

</div>
  )
}

export default Clientprops