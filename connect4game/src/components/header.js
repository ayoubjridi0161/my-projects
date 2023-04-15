import React from 'react'
import './header.css'

const Header = ({player}) => {
  return (
    <div className='panel header'>
        <div className='header-text'>
            player {player} turn
        </div>
    </div>
  )
}

export default Header