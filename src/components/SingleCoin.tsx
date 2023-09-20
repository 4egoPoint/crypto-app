

import { useParams } from "react-router-dom";
import "./style/singleCoin.css"
import { useState } from 'react';

type CoinData = {
   id:string
}

const SingleCoin = () => {
   const { id } = useParams()
   const [coin, setCoin] = useState<CoinData>()
   const handleCoin =async () => {
      try {
         const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
         const data =await response.json()
         setCoin(data)
      }
      catch {}
   }
   
   return (
      <button onClick={handleCoin}>asd</button>
   )
}

export default SingleCoin