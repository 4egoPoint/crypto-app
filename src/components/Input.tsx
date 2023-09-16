
import { inputValueUpdate } from "../features/input/inputSlice"
import { useAppSelector, useAppDispatch } from '../app/hooks'
import "./style/input.css"

const Input = () => {
   const dispatch = useAppDispatch()
   const inp = useAppSelector((state) => state.inputValue)

   const submit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
   }

   const onTypeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(inputValueUpdate(e.target.value))
   }

   return (
      <div className="input">
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