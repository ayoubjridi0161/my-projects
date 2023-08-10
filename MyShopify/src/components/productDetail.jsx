import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { returnDetails } from "./fetcher";
import Category_product from "./category_product";

import './category_product.css'
const ProductDetail = ()=>{
    const {ProductId} = useParams();
    const navigate= useNavigate();  
    const [product, setProduct] = React.useState({errorMessage: '' , data : {} });
    const basketPath = `/basket`
    React.useEffect(()=>{
        const fetchProduct = async ()=>{
            const response = await returnDetails(ProductId);
            setProduct(response);
            console.log(response);
        }
        fetchProduct();
    },[]);
    
    return(
        <article className='big-container'>
            
            <div className='Category-product-title'>
            {product.data.title  } {product.data.sku}
            </div>
            <figure>
            <div className='Category-product-img'>
                <img src={`./src/assets/${product.data.Image}`} alt={product.data.Image}/>
                </div>
            </figure>
            
            <div  className='Category-product-features'>
                <h3>Features</h3>
                <ul>
                    {product.data.features?.map((f,i)=>
                        <li key={`feature${i}`}>{f}</li>
                    )}
                </ul>
            </div>

            <aside className='Category-product-finance'>
                <div className='Category-product-price'>
                $ {product.data.price}
                </div>
                <div className='Category-product-stock'>
                <label >stock : {product.data.stock}</label>
                </div>
                <div className='Category-product-action'>
               
                <button id='basket' onClick={()=>{
                    
                    }}> Add to basket </button>
                </div>
            </aside>
            
            <div className='Category-product-description'>
                <p>{product.data.description}</p>
            </div>
            

        </article>
    )
}
export default ProductDetail;