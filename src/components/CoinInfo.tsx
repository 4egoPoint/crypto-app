
import "./style/coinInfo.css"
import { useAppSelector } from '../app/hooks'
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { Line } from "react-chartjs-2";

import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';





const CoinInfo = () => {
   const { id } = useParams()
   const cur = useAppSelector((state) => state.currency)
   const [historicData, setHistoricData] = useState<any>()
   const [days, setDays] = useState<number>(1)


   ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
   );

   const options = {
      responsive: true,
      elements:{
         point: {
            radius: 1
         }
      },
      plugins: {
         legend: {
            position: 'top' as const,
         },
         title: {
            display: true,
            text: 'Chart',
         },
      },
   };

   const handleHistory = async () => {
      try {
         const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${cur.currency}&days=${days}`)
         const data = await response.json()
         setHistoricData(data)
      }
      catch { }
   }
   useEffect(() => {
      handleHistory()
   }, [cur.currency, days])



   return (
      <div className="coin-info">
         {
            !historicData ? (
               <div className="lds-dual-ring"></div>
            ) : (
               <>
                  <Line className="line"
                     options={options}
                     data={{
                        labels: historicData.prices.map((coin: any) => {
                           let date = new Date(coin[0])
                           let time = date.getHours() > 12
                              ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                              : `${date.getHours()}:${date.getMinutes()} AM`;
                           return days === 1 ? time : date.toLocaleDateString()
                        }),
                        datasets: [{
                           data: historicData.prices.map((coin: any) => coin[1].toFixed(3)),
                           label: `Price ( Past ${days} Days ) in ${cur.currency}`,
                           borderColor: 'gold',
                        }],
                     }}
                  />
                  <div className="coin-info__buttons">
                     <button onClick={() => setDays(1)} className="coin-info__btn">24 Hours</button>
                     <button onClick={() => setDays(30)} className="coin-info__btn">30 Days</button>
                     <button onClick={() => setDays(90)} className="coin-info__btn">3 Months</button>
                     <button onClick={() => setDays(365)} className="coin-info__btn">1 Year</button>
                  </div>
               </>
            )
         }
      </div>
   )
}

export default CoinInfo