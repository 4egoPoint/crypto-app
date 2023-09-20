

import { useEffect } from "react"
import "./style/coin.css"
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { isCoin } from "../features/page/coinPageSlice"
import { Link } from "react-router-dom"


type coinsDataType = {
   name: string,
   image?: string,
   current_price?: number,
   price_change_percentage: number,
   id?: string,
}

const Coin = ({ id, name, image, current_price, price_change_percentage }: coinsDataType) => {
   const change = price_change_percentage
   const cur = useAppSelector((state) => state.currency)


   useEffect(() => { }, [change, cur])
   let mySymbol: string
   if (cur.currency === "USD") {
      mySymbol = "$"
   } else {
      mySymbol = "€"
   }


   return (
      <Link to={`/coins/${id}`} className="coin">
         <div className="coin__img-wrap"><img src={image} className="coin__img" /></div>
         <div className="coin__name">{name}</div>
         {change >= 0 ? <div className="isGreen">{change.toFixed(2) + "%"}</div> : <div className="isRed">{change.toFixed(2) + "%"}</div>}
         <div className="coin__price">{current_price + mySymbol}</div>

      </Link>
   )
}

export default Coin