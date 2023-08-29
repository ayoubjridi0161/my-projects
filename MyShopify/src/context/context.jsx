import React from "react";
import { createContext,useReducer } from "react";
import { cartReducer } from "./Reducer";
export const Mycontext = createContext();
const initialState = { cartItems: []};
const ContextProvider = ( {children}) => {
    const [state,dispatch] = useReducer(cartReducer,initialState);
    const addProduct = (payload)=>{
        dispatch({type : "ADD" , payload})
    }
    const getItems = ()=>{
        return state.cartItems;
    }
    const contextValues = {
        addProduct,
        getItems,
        ...state
    }
    return(
    <Mycontext.Provider value={contextValues}>
        {children}
    </Mycontext.Provider>
    )
}
export default ContextProvider