import {createStore} from 'redux'

const initialState = {
    num:0
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "sumar":
            return{
                ...state,
                num: state.num + 2
            }
        case "restar":
            return{
                ...state,
                num: state.num - 2
            }
        case "dividir":
            return{
                ...state,
                num: state.num / 2
            } 
        case "multiplicar":
            return{
                ...state,
                num: state.num * 2
            }
        case "text":
            return{
                ...state,
                 num: Number(action.payload)
            } 
        default:
             return state
    }
};

export const store = createStore(reducer);