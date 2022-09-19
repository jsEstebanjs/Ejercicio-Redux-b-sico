import React from "react";
import { useDispatch,useSelector} from "react-redux";
import './Button.css'

const Input= ()=>{
    const text = useSelector(state=> state.num)
    const dispatch = useDispatch()
    return(
        <input
        value={text}
        onChange={(e)=>dispatch({type:'text',payload:e.target.value})}
        type="number"
        placeholder="Ingresa un valor" />
    )
}

export default Input;