

import { useEffect } from "react"
import "./style/coin.css"
import { useAppSelector } from '../app/hooks'


type coinsDataType = {
   name: string,
   image?: string,
   current_price?: number,
   price_change_percentage: number,
}

const Coin = ({ name, image, current_price, price_change_percentage }: coinsDataType) => {
   const change = price_change_percentage
   const cur = useAppSelector((state) => state.currency)
console.log(change);

   useEffect(() => { }, [change,cur])


   return (
      <div className="coin">
         <img src={image} className="coin__img" />
         <div className="coin__name">{name}</div>
         {change>=0 ? <div className="isGreen">{change}</div>:<div className="isRed">{change}</div>}
         <div className="coin__price">{current_price}</div>

      </div>
   )
}

export default Coin