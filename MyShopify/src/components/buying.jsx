import React from "react"
import { Mycontext } from "../context/context"
export const Basket =()=>{
    const cartContext = React.useContext(Mycontext);
    const { getItems }= cartContext;
    
    const renderbasket =()=>{
        const cartItems = getItems();
        return(
            <ul>
                {
                    cartItems?.map(x =>{
                        return(
                            <li key={x.id}>{x.title} {x.price} {x.quantity}</li>
                        )
                    })
            }
            </ul>
        )
    }
    return(
        <div>
            <h1> Basket </h1>
            {renderbasket()}
        </div>
    )
}
export const Checkout =()=>{
    return(
        <div>
            <h1> Checkout </h1>
        </div>
    )
}