import { useState,useEffect } from 'react'

import './App.css'

function App() {

  const [results,setResults]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3100/products')
    .then(response=>response.json())
    .then(json=>{setResults(json)
    console.log(json)})
  },[]);
  return (
    <>
      <div className="App">
        Hello Vite!
        {
          results.map((result)=> 
          <div key={result.id}>
            <h1 >{result.title}</h1> 
            
          </div>
          )
        }
        </div>
    </>
  )
}

export default App
