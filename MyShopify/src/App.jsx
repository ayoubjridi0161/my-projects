import { useState,useEffect } from 'react'

import './App.css'
import Categories from './components/categories';

function App() {

  const [results,setResults]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/categories')
    .then(response=>response.json())
    .then(json=>{setResults(json)
    console.log(json)})
  },[]);
  const renderCategories = () =>{
    const categories=[];
    results.map((result)=>{
      categories.push(<Categories result={result}/>)
    })
    return categories;
  }
  return (
    <>
      <header>
        My store
      </header>
      <section className='main-section'>
        <nav className='navigation'>
          {renderCategories()}
          </nav>
          <article className='main'>
              main area
          </article>
      </section>
      <footer>
            footer
      </footer>
      
    </>
  )
}

export default App
