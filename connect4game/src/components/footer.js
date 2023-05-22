import React from 'react'
import './footer.css'
import './header.css'
const Footer = ({setGame,suggest,state}) => {
  return (
    <div className='panel footer'>
      {state === "playing" &&     <button onClick={()=>suggest()}>Suggest</button> }
      {state !== "playing" && <button onClick={()=>setGame()}>New game</button> }
    
    </div>
  )
}

export default Footer