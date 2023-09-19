
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { nanoid } from "@reduxjs/toolkit";
import "./style/coinsList.css"
import { error } from "console";
import Coin from "./Coin";
import { useAppSelector } from '../app/hooks'

type coinsDataType = [{
   name: string,
   image?: string,
   current_price?: number,
   price_change_percentage_24h: number,
   symbol?: string,
}]

const CoinsList = () => {
   const [coins, setCoins] = useState<coinsDataType>([{
      name: "no cryptocurrency found",
      price_change_percentage_24h: 0,
      symbol: "asd",
   }]);
   const cur = useAppSelector((state) => state.currency)

   useEffect(() => {
      const request = async () => {
         try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${cur.currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
            const data = await response.json()
            setCoins(data)
         }
         catch { }
      }
      request()
   }, [cur])


   return (
      <div className='coinsList'>
         <div className="wrap__p">
            <div className="coinsList__title">
               <div>logo</div>
               <div>name</div>
               <div>24h change</div>
               <div>price</div>
            </div>
            
            <div className="coinsList__column">
               {coins.map((coin) => {
                  return (
                     <Coin key={nanoid()} symbol={coin.symbol} name={coin.name} image={coin.image} current_price={coin.current_price} price_change_percentage={coin.price_change_percentage_24h} />
                  )
               })}

            </div>
         </div>
      </div>
   )
}

export default CoinsList