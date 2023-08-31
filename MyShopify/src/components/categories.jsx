import React from 'react';
import '../app.css';
import { useParams } from 'react-router-dom';
import { returnProducts } from './fetcher';
import Category_product from './category_product';

const Categories = ({id , title, event , Key}) => {
  const {categoryId} = useParams();
  const [products,setproducts] = React.useState({
  errorMessage:'' , 
  data:[]})
  
  React.useEffect(()=>{
    const fetchproducts = async ()=>{
      const response = await returnProducts(categoryId);
      setproducts(response);
    }
    fetchproducts();
  },[categoryId])

  const renderProducts= () =>{
    return products.data.map( p => <Category_product {...p}>{p.title}</Category_product>)
  }
  return (
  <section className='main-categories'>
  {products.data && renderProducts()}
  </section>
)
};

export default Categories;



