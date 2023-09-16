


import Input from "./Input"
import "./style/greeting.css"

const Greeting = () => {
   return (
      <div className='greeting'>
         <div className="wrap__w">
            <div className="greeting__content">
               <div className="greeting__title">Crypto Bounty</div>
               <div className="greeting__subtitle">Get All The Info Regarding Your Favorite Crypto Currency</div>
               <div className="greeting__input">
                  <Input />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Greeting