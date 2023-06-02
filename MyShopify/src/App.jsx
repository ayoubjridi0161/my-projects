import { useState,useEffect } from 'react'

import './App.css'
import Categories from './components/categories';
import {fetcher} from './components/fetcher.js';

function App() {

  const [categories,setcategories]=useState([]);
  const [products,setproducts] = useState([]);

  useEffect(()=>{
    fetcher('categories',setcategories);
  },[]);
  
  const handleProductsclick = id =>{
    
      fetcher('products?catId='+id, setproducts);
  }
  const renderCategories = () =>{
    const category=[];
    categories.map((result)=>{
      category.push(<Categories id={result.id} title={result.title} event={handleProductsclick} />)
    })
    return category;
  }
  const renderProducts= () =>{
    return( 
    products.map((p) =>
      <div >{p.title}</div>
     ));
  }
  return (
    <>
      <header>
        My store
      </header>
      <section className='main-section'>
          <nav className='navigation'>
            { renderCategories()}
          </nav>
          <article className='main'>
            {products && renderProducts()}
              </article>
      </section>
      <footer>
            footer
      </footer>
      
    </>
  )
}

export default App
