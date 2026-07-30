
const Clientprops = ({clients}) => {
  return (
    
<div className="bg-[#1D6148] w-full max-w-[500px] h-[250px] p-7 relative rounded-[10px]">
  

  <img 
    src={clients.image} 
    alt="Inverted Comma"
    className="absolute top-[-40px] right-[20px] w-[50px] h-[50px]"
  />
  <div className="flex items-center gap-4">
    <img 
      src={clients.image1} 
      alt="Client" 
      className="object-contain max-w-[100px]"
    />

    <div className="flex flex-col gap-1">
      <p className="font-montserrat font-semibold text-white">
        Muhammad Usman
      </p>

      <img 
        src={clients.image2} 
        alt="Rating" 
        className="object-contain"
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