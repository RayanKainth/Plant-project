import Shopcardsprops from "../shared/shopcardsprops"

const ShopData =[
{ id: 1, image: '/assets/images/shop_image4.png',},
{ id: 2, image: '/assets/images/shop_image5.png',},
{ id: 3, image: '/assets/images/shop_image2.png',},
{ id: 4, image: '/assets/images/shop_image3.png',}

]
const Shopcards = () => {
  return (
    <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] 
        pt-[30px] max-w-[1620px] ">
            {ShopData.map((shop, id) => (
                <Shopcardsprops key={id} shop={shop}/>
            ))}
        </div>
    </div>
  )
}

export default Shopcards;