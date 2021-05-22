import React from 'react'
import './Header.css'
import dankMemer from '../Assets/dankMemer.png'
import trollFace from '../Assets/trollFace.png'

function Header() {
   return (
      <header className="head">
         <img 
            src={dankMemer} 
            alt="DankMemer" 
         />
         <h1>MEME GENERATOR</h1>
         <img 
            src={trollFace} 
            alt="TrollFace" 
         />
      </header>
   )
}

export default Header