
import { RiArrowDropDownLine } from "react-icons/ri"
import "./style/header.css"
import { Link } from 'react-router-dom';
import { toggleCurrency } from "../features/currency/currencySlice"
import { useAppSelector, useAppDispatch } from '../app/hooks'


const Header = () => {
   const dispatch = useAppDispatch()


   const cur = useAppSelector((state) => state.currency)


   const changeCurrencyToUSD = () => {
      dispatch(toggleCurrency("USD"))
   }
   const changeCurrencyToEUR = () => {
      dispatch(toggleCurrency("EUR"))
   }

   return (
      <div className='header'>
         <div className="wrap__p">
            <div className="header__row">
               <Link to="/" className="header__logo">Crypto Bounty</Link>
               <div className="header__exchange">
                  <div className="header__exchange-current">{cur.currency}<RiArrowDropDownLine className="down" /></div>

                  <div className="header__exchange-list">
                     <button onClick={changeCurrencyToUSD} className="header__exchange-usd">USD</button>
                     <button onClick={changeCurrencyToEUR} className="header__exchange-eur">EUR</button>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default Header