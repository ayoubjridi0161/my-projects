export const cartReducer = (state,action)=>{

    let index = -1;
    if (action.payload){
        index = state.cartItems.findIndex(x => x.id === action.payload.id);
    }
    switch(action.type){
        case "ADD":
            
            if(index === -1){
                state.cartItems.push({...action.payload, quantity : 1});
                break;
            }
            else{
                state.cartItems[index].quantity+=1;
                break;
            }
            
        case "REMOVE":
            return state;
        
        default:
            return state;
    }
        return state;
}

