import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import ProductDetail from './components/productDetail.jsx';
import { Basket, Checkout } from './components/buying.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<App />} />
    <Route path='products/:ProductId' element={<ProductDetail/>}/>
    <Route path='basket' element={<Basket/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
