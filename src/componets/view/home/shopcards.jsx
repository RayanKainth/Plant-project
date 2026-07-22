import Shopcardsprops from "../shared/shopcardsprops"

const ShopData =[
{ id: 1, image: '/assets/images/shop_image4.png',},
{ id: 2, image: '/assets/images/shop_image5.5.png',},
{ id: 3, image: '/assets/images/shop_image2.png',},
{ id: 4, image: '/assets/images/shop_image3.png',}

]
const Shopcards = () => {
  return (
    <div className="container">
      <div className="max-w-[1620px]">
        <div className="lg:pt-[60px]">
        <p className="font-montserrat font-semibold text-[50px]">Shop By Category</p>
        </div>
      </div>
        <div className="grid grid-cols-1 justify-items-center pt-[80px] sm:grid-cols-2 lg:grid-cols-4 gap-[30px] 
        lg:pt-[30px] max-w-[1620px]">
            {ShopData.map((shop, id) => (
                <Shopcardsprops key={id} shop={shop}/>
            ))}
        </div>
    </div>
  )
}

export default Shopcards;