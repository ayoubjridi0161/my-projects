import React from 'react';
import '../app.css';

const Categories = ({id , title, event , Key}) => {
  return (
    <li key={Key} id={id} onClick={()=>event(id)} className="product" >{title}</li>
  );
};

export default Categories;



