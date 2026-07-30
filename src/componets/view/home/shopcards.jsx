import Shopcardsprops from "../shared/shopcardsprops"

const ShopData =[
{ id: 1, image: '/assets/images/image.png', name:"Fruit Trees", available:"(189 Products)",},
{ id: 2, image: '/assets/images/image1.png', name:"Patio Plants", available:"(89 Products)",},
{ id: 3, image: '/assets/images/image2.png', name:"Conifires", available:"(30 Products)",},
{ id: 4, image: '/assets/images/image3.png', name:"Climbers", available:"(25 Products)",}

]
const Shopcards = () => {
  return (
    <div className="container">
      <div className="">
        <div className="lg:pt-[60px]">
        <p className="font-montserrat font-semibold text-[50px]">Shop By Category</p>
        </div>
      </div>
        <div className="grid grid-cols-1 justify-items-center pt-[80px] sm:grid-cols-2 lg:grid-cols-4 gap-[30px] 
        lg:pt-[30px] ">
            {ShopData.map((shop, id) => (
                <Shopcardsprops key={id} shop={shop}/>
            ))}
        </div>
    </div>
  )
}

export default Shopcards;