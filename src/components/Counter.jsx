import React from "react";
import { useSelector } from "react-redux";

const Counter = ()=>{
    const dataStore = useSelector(state=> state.num)
    return(
        <h2>{dataStore}</h2>
    )
}

export default Counter;