
import { RiArrowDropDownLine } from "react-icons/ri"

import "./style/header.css"
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div className='header'>
         <div className="wrap__p">
            <div className="header__row">
               <Link to="/" className="header__logo">Crypto Bounty</Link>
               <div className="header__exchange">
                  <div className="header__exchange-current">usd<RiArrowDropDownLine className="down" /></div>

                  <div className="header__exchange-list">
                     <button className="header__exchange-usd">usd</button>
                     <button className="header__exchange-eur">eur</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header