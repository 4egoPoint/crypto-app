

import AliceCarousel from "react-alice-carousel"
import "./style/carousel.css"

const Carousel = () => {

   const fetchTrendingCoins = async () => {
      const coinsData = fetch("")
   }
   const items: [] = []
   const responsive = {
      0: { items: 2 },
      512: { items: 4 },
   }
   return (
      <div className='carousel'>
         <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            responsive={responsive}
            autoPlay
            items={items}
            disableButtonsControls
         />
      </div>
   )
}

export default Carousel