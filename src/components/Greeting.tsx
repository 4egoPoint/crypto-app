

import Carousel from "./Carousel"
import "./style/greeting.css"

const Greeting = () => {
   return (
      <div className='greeting'>
         <div className="wrap__w">
            <div className="greeting__content">
               <div className="greeting__title"></div>
               <div className="greeting__subtitle"></div>
               <div className="greeting__carousel">
                  <Carousel />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Greeting