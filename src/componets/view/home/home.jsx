import Bestseller from './bestseller'
import Newarrivals from './newarrivals'
import Shopcards from './shopcards'
import Client from './client'
import Blogs from './blogs'


const Home = () => {
  return (
    <>
            <div className="w-full h-[621px] bg-[url('/assets/images/Back-ground-image.jpg')]
              bg-cover bg-center relative bg-no-repeat">
              <div className="container">
                
                <div className="pt-[155px] max-w-[750px]">
        <h1 className="font-[LEMONMILK] text-[40px]">Lorem Ipsum is simply dummy text here.</h1>
        <div className="max-w-[600px] pt-[20px]">
          <p className=" text-[20px] font-light">Lorem Ipsum is simply dummy text of the
             printing and typesetting industry.
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="flex gap-2 pt-[20px]">
          <button className="bg-[#1D6148] text-white px-8 py-2 rounded-[10px]">Shop Now</button>
          <button className="text-[#1D6148] px-8 py-2 rounded-[10px] border
           border-green-600">Learn more</button>
        </div>
                </div>
              </div>
    </div>
    <div className="container">
      <div className="max-w-[1620px] lg:flex pt-[60px] gap-[80px]">
        <div className="lg:w-1/2">
        <p className="text-[50px] font-montserrat font-semibold">About Company</p>
        <p className="text-[20px] font-montserrat font-medium pt-[20px] tracking-wide
         text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type
         specimen book. It has survived not only five centuries, but also the leap into
         electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing software like Aldus PageMaker including
                 versions of Lorem Ipsum.</p>
           <button className="bg-[#1D6148] text-white px-8 py-3 rounded-[10px] mt-[30px]">
                  Learn More
                 </button>
        </div>
        <div className="pt-[10px] lg:pt-[30px] lg:w-1/2 h-[620px]">
        <img className="object-contain lg:object-cover w-full h-full" src="/assets/images/about_company.svj.jpg" alt="" />
        </div>
      </div>
    </div>
      <Shopcards />
        <Bestseller/>
        <Newarrivals/>
        <Client/>
        <Blogs/>
  </>
  )
}

export default Home