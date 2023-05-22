import React from 'react'
import './header.css'

const Header = ({message}) => {
  
  return (
    <div className='panel header'>
        <div className='header-text'>
            {message}
        </div>
    </div>
  )
}

export default Header