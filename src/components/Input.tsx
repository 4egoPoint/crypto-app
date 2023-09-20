
import { inputValueUpdate } from "../features/input/inputSlice"
import { useAppSelector, useAppDispatch } from '../app/hooks'
import "./style/input.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { RxCross1 } from "react-icons/rx"

type CoinType = {
   id?: string,
   img?: string,
}



const Input = () => {
   const [coin, setCoin] = useState<CoinType>()
   const [isOpen, setIsOpen] = useState("n")
   const dispatch = useAppDispatch()
   const inp = useAppSelector((state) => state.inputValue)

   const submit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
         const request = await fetch(`https://api.coingecko.com/api/v3/coins/${inp.inputValue}`)
         const data = await request.json()
         setCoin({
            id: data.id,
            img: data.image.large
         })
      }
      catch { }
   }

   const onTypeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(inputValueUpdate(e.target.value.toLowerCase()))
   }
   useEffect(() => {
      if (coin?.id) {
         setIsOpen("popup")
         disableScroll()
         window.scroll(0, 0)
      }
   }, [coin, isOpen])


   function disableScroll() {
      window.onscroll = function () {
         window.scroll(0, 0)
      };
   }

   function enableScroll() {
      window.onscroll = function () { };
   }



   const deleteClass = () => {
      setIsOpen("n")
      setCoin(undefined)
      enableScroll()
   }
   return (
      <div className="input">
         <div className={`input__popup ${isOpen}`}>
            <div className="popup__block">
               <img src={coin?.img} className="popup__img" />
               <div className="popup__btn-wrap">
                  <div className="popup__title">{coin?.id}</div>
                  <Link onClick={deleteClass} to={`/coins/${coin?.id}`} className="popup__btn">see more</Link>
               </div>
               <button onClick={deleteClass} className="popup__btn-absolute"><RxCross1 /></button>
            </div>
         </div>

         <div className="wrap__p">
            <div className="input-box">
               <form onSubmit={(e) => submit(e)} className="input-box__form">
                  <input onChange={(e) => onTypeInput(e)} placeholder="cryptocurrency..." value={inp.inputValue} type="text" className="input-box__input" />
               </form>
            </div>

         </div>
      </div>
   )
}

export default Input