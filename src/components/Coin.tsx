

import { useEffect } from "react"
import "./style/coin.css"
import { useAppSelector } from '../app/hooks'
import { Link } from "react-router-dom"


type coinsDataType = {
   name: string,
   image?: string,
   current_price?: number,
   price_change_percentage: number,
   symbol?:string,
}

const Coin = ({symbol, name, image, current_price, price_change_percentage }: coinsDataType) => {
   const change = price_change_percentage
   const cur = useAppSelector((state) => state.currency)
console.log(change);

   useEffect(() => { }, [change,cur])


   return (
      <Link to={"/"} className="coin">
         <div className="coin__img-wrap"><img src={image} className="coin__img" /></div>
         <div className="coin__name">{name}</div>
         {change>=0 ? <div className="isGreen">{change.toFixed(2)+"%"}</div>:<div className="isRed">{change.toFixed(2)+"%"}</div>}
         <div className="coin__price">{current_price+"$"}</div>

      </Link>
   )
}

export default Coin