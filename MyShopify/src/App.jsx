import { useState,useEffect } from 'react'

import './App.css'
import Categories from './components/categories';
import {fetcher,returnCategories,returnProducts} from './components/fetcher.js';
import Category_product from './components/category_product';



function App() {

  const [categories,setcategories]=useState({errorMessage : '', data:[]});
  const [products,setproducts] = useState({errorMessage : '', data:[]});

  useEffect(()=>{
     const fetchData = async ()=>{
      const response = await returnCategories();
      setcategories(response);
     }
      fetchData();
  },[]);
  
  const handleProductsclick = id =>{
      const fetchData = async ()=>{
        const response = await returnProducts(id);
        setproducts(response);
      }
      fetchData();
  }
  const renderCategories = () =>{
    const category=[];
    categories.data.map((result,i)=>{
      category.push(<Categories  id={result.id} Key={i} title={result.title} event={handleProductsclick} />)
    });
    return category;
  }
  const renderProducts= () =>{
    return    products.data.map(p => <Category_product {...p}>{p.title}</Category_product>)
  }
  return (
    <>
      <header>
        My store
      </header>
      
      <section className='main-section'>
          <nav className='navigation'>
            <ul >
            { renderCategories()}
            </ul>
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
