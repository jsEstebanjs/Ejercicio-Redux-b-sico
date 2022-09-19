import React from "react";
import { useDispatch } from "react-redux";
import './Button.css'

const Button = ({children,type})=>{
    const dispatch = useDispatch()
    return(
        <button 
        onClick={()=>dispatch({type: type })}
        type="button">
            {children}
        </button>
    )
}

export default Button;