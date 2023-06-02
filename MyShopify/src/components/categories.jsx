import React from 'react';
import '../app.css';

const Categories = ({id , title, event}) => {
  return (
    <div key={id} id={id} onClick={()=>event(id)} className="product" >{title}</div>
  );
};

export default Categories;



