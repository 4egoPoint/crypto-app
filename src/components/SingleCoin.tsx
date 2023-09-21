

import { useParams } from "react-router-dom";
import "./style/singleCoin.css"
import { useEffect, useState } from 'react';
import { useAppSelector } from '../app/hooks'
import CoinInfo from "./CoinInfo";


type CoinData = {
   id?: string,
   img?: string,
   name?: string,
   description?: string,
   rank?: number,
   curPrice?: number,
}

const SingleCoin = () => {
   const { id } = useParams()
   const [coin, setCoin] = useState<CoinData>()

   const cur = useAppSelector((state) => state.currency)
   let curSymbol: string
   if (cur.currency === "USD") {
      curSymbol = "$"
   } else {
      curSymbol = "€"
   }

   const handleCoin = async () => {
      try {
         const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
         const data = await response.json()
         setCoin({
            id: data?.id,
            img: data?.image.large,
            name: data?.name,
            description: data?.description.en.split(". ")[2],
            rank: data?.market_cap_rank,
            curPrice: data?.market_data.current_price[cur.currency.toLocaleLowerCase()],
         })
      }
      catch { }
   }
   useEffect(() => {
      handleCoin()
   }, [cur])

   return (
      <div className="coin-page">
         <div className="coin-page__sidebar sidebar">
            <img className="sidebar__img" src={coin?.img} alt="icon" />
            <h3 className="sidebar__name">{coin?.name}</h3>
            <div className="sidebar__subtitle">
               {coin?.description}
            </div>
            <div className="sidebar__params">
               <h5 className="sidebar__rank">Rank: {coin?.rank}</h5>
               <h5 className="sidebar__cur-price">Current Price: {coin?.curPrice + curSymbol}</h5>
            </div>
         </div>


         <div className="coin-page__content">
            <CoinInfo />
         </div>
      </div>
   )
}

export default SingleCoin