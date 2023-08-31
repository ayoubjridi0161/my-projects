import React, { useContext } from 'react';
import './category_product.css'
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { Mycontext } from '../context/context';


const Category_product = ({title,specs,features,price,stock,Image,sku,id})=>{
    const navigate = useNavigate();
    const location = useLocation();
    const newPath = `/products/${id}`
    const basketPath = `/basket`
    const cartContext = useContext(Mycontext);
    const { addProduct } = cartContext;
    const payload = {id,title,price}
    return(
        
            <div className='big-container'>       
                 <div className='Category-product-title'>
                <Link to={newPath}> {title } {sku}</Link>
            </div>
            <figure>
            <div className='Category-product-img'>
                <img src={`./assets/${Image}`} alt={Image}/>
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
                <button id='view' onClick={()=>{navigate(newPath)}}> view product </button>
                <button id='basket' onClick={()=>{addProduct(payload)}}> Add to basket </button>
                </div>
            </aside>

            </div>

    )
}
export default Category_product