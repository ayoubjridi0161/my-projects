import React from 'react';
import './category_product.css'
import { Link,useNavigate } from 'react-router-dom';


const Category_product = ({title,specs,features,price,stock,Image,sku,id})=>{
    const navigate = useNavigate();
    return(
        <article className='big-container'>
            
            <div className='Category-product-title'>
                <Link to={`products/${id}`}> {title } {sku}</Link>
            </div>
            <figure>
            <div className='Category-product-img'>
                <img src={`./src/assets/${Image}`} alt={Image}/>
                </div>
            </figure>
            
            <aside >
                <div className='Category-product-info-dimensions'>
                <h3>Dimensions</h3>
                <label>
                    {specs.dimensions.width + " * " + specs.dimensions.height + " * " + specs.dimensions.depth}
                </label>
                </div>
                {specs.capacity &&
                <div className='Category-product-info-capacity'>
                <h3>capacity</h3>
                <label>
                    {specs.capacity}
                </label>
                </div>
                }
                <div  className='Category-product-features'>
                <h3>Features</h3>
                <ul>
                    {features.map((f,i)=>
                        <li key={`feature${i}`}>{f}</li>
                    )}
                </ul>
                </div>
            </aside>
            <aside className='Category-product-finance'>
                <div className='Category-product-price'>
                $ {price}
                </div>
                <div className='Category-product-stock'>
                <label >stock : {stock}</label>
                </div>
                <div className='Category-product-action'>
                <button id='view' onClick={()=>{navigate(`products/${id}`)}}> view product </button>
                <button id='basket' onClick={()=>{navigate(`basket`)}}> Add to basket </button>
                </div>
            </aside>

        </article>
    )
}
export default Category_product