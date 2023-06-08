import React from "react";
import { useParams } from "react-router-dom";
import { returnDetails } from "./fetcher";
const ProductDetail = ()=>{
    const params = useParams();
    const [details,setDetails] = React.useState({errorMessage : '', data:[]});
    React.useEffect(()=>{
        const fetchData= async ()=>{
            const response = await returnDetails(params.ProductId);
            setDetails(response);
        }
        fetchData();
    },[
    ]);
    
    return(
        <article className='big-container'>
            
            <div className='Category-product-title'>
                {details.data.title } {details.data.sku}
            </div>
            <figure>
            <div className='Category-product-img'>
                <img src={`./src/assets/${details.data.Image}`} alt={details.data.Image}/>
                </div>
            </figure>
            
            <aside >
                <div className='Category-product-info-dimensions'>
                <h3>Dimensions</h3>
                <label>
                    {details.data.specs.dimensions.width + " * " + details.data.specs.dimensions.height + " * " + details.data.specs.dimensions.depth}
                </label>
                </div>
                {details.data.specs.capacity &&
                <div className='Category-product-info-capacity'>
                <h3>capacity</h3>
                <label>
                    {details.data.specs.capacity}
                </label>
                </div>
                }
                <div  className='Category-product-features'>
                <h3>Features</h3>
                <ul>
                    {details.data.features?.map((f,i)=>
                        <li key={`feature${i}`}>{f}</li>
                    )}
                </ul>
                </div>
            </aside>
            <aside className='Category-product-finance'>
                <div className='Category-product-price'>
                $ {details.data.price}
                </div>
                <div className='Category-product-stock'>
                <label >stock : {details.data.stock}</label>
                </div>
                <div className='Category-product-action'>
                
                <button id='basket' onClick={()=>{navigate(`basket`)}}> Add to basket </button>
                </div>
            </aside>

        </article>
    )
    
}
export default ProductDetail;