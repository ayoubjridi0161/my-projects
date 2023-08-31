import { useState,useEffect } from 'react'

import './App.css'
import Categories from './components/categories';
import {returnCategories} from './components/fetcher.js';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import ProductDetail from './components/productDetail.jsx';
import { Basket, Checkout } from './components/buying.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';


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
  
  /*const handleProductsclick = id =>{
      const fetchData = async ()=>{
        const response = await returnProducts(id);
        setproducts(response);
      }
      fetchData();
  }*/

  
  return (
    <>
      <BrowserRouter>
   <Routes>
    <Route 
      path='/' 
      element={<Layout categories={categories}/>} >
          <Route index element={<Home/>}/>
          <Route path='products/:ProductId' element={<ProductDetail/>}/>
          <Route path='basket' element={<Basket/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path = 'categories/:categoryId' element={<Categories/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
