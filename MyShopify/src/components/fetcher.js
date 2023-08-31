const BASE_URL = 'http://localhost:3000/';
export const fetcher = async (url)=>{
    let responseObject = {errorMessage : '' , data : []}
    try{
        const response = await fetch (BASE_URL + url);
        const responseData = await response.json();
        responseObject.data = responseData;
        return responseObject;
    } catch(err){
        responseObject.errorMessage = err.message;
        return responseObject;
    }
}

export const returnProducts = async (id)=>{
    return fetcher('products?catId='+id);   
}
export const returnCategories = async () =>{
    return fetcher('categories');
}
export const returnDetails = async (id)=>{
    return fetcher(`products/${id}`);
}

  
