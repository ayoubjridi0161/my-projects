import React from 'react'
import "../index.css"

const GameCircle = ({id, children, circleclick, className }) => {
    
  function onClick(id){
        circleclick(id);
    }  
    return (
    <div  className={`gamecircle ${className}`} onClick={() => onClick(id)}>
      {children}


    </div>
  )
}

export default GameCircle