
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { nanoid } from "@reduxjs/toolkit";
import "./style/coinsList.css"
import { error } from "console";
import Coin from "./Coin";
import { useAppSelector } from '../app/hooks'
import NotFound from "./NotFound";
import CoinsListTitle from "./CoinListTitle"

type coinsDataType = [{
   name: string,
   image?: string,
   current_price?: number,
   price_change_percentage_24h: number,
   id?: string,
}]

const CoinsList = () => {
   const [coins, setCoins] = useState<coinsDataType>([{
      name: "",
      price_change_percentage_24h: 0,
      id: "no",
   }]);
   const [page, setPage] = useState(1)
   const cur = useAppSelector((state) => state.currency)

   useEffect(() => {
      const request = async () => {
         try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${cur.currency}&order=gecko_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`)
            const data = await response.json()
            setCoins(data)
         }
         catch { }
      }
      request()
   }, [cur])

   if (coins[0].id === "no") {
      return (
         <div className='coinsList'>
            <div className="wrap__p">
               <CoinsListTitle />
               <div className="lds-dual-ring"></div>
            </div>
         </div >
      )
   }


   return (
      <div className='coinsList'>
         <div className="wrap__p">
            <CoinsListTitle />

            <div className="coinsList__column">
               {coins
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((coin) => {
                     return (
                        <Coin key={nanoid()} id={coin.id} name={coin.name} image={coin.image} current_price={coin.current_price} price_change_percentage={coin.price_change_percentage_24h} />
                     )
                  })}
            </div>
            <div className="coinsList__pages-bar">
               <div className="coinsList__pages-row">
                  <div onClick={() => {
                     setPage(1)
                     window.scroll(0, 450)
                  }} className="coinsList__page">1</div>
                  <div onClick={() => {
                     setPage(2)
                     window.scroll(0, 450)
                  }} className="coinsList__page">2</div>
                  <div onClick={() => {
                     setPage(3)
                     window.scroll(0, 450)
                  }} className="coinsList__page">3</div>
                  <div onClick={() => {
                     setPage(4)
                     window.scroll(0, 450)
                  }} className="coinsList__page">4</div>
                  <div onClick={() => {
                     setPage(5)
                     window.scroll(0, 450)
                  }} className="coinsList__page">5</div>
                  <div onClick={() => {
                     setPage(6)
                     window.scroll(0, 450)
                  }} className="coinsList__page">6</div>
                  <div onClick={() => {
                     setPage(7)
                     window.scroll(0, 450)
                  }} className="coinsList__page">7</div>
                  <div onClick={() => {
                     setPage(8)
                     window.scroll(0, 450)
                  }} className="coinsList__page">8</div>
                  <div onClick={() => {
                     setPage(9)
                     window.scroll(0, 450)
                  }} className="coinsList__page">9</div>
                  <div onClick={() => {
                     setPage(10)
                     window.scroll(0, 450)
                  }} className="coinsList__page">10</div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default CoinsList