import React from 'react'
import './Hero.css'
import headimg from '../Assets/head img.png'
import hero_img from '../Assets/bg.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h1>CROSSING REPUBLIC #1 FREE<br/>E-WASTE RECYCLER</h1>
            <p>Serving the central valley and entire cross area</p>
            <div>
                <div className='head-img'>
                    <img src={headimg} alt=""/>
                </div>
            </div>
            <Link to='/schedule'><button>SCHEDULE A PICKUP</button></Link>
        </div>
        <div className='hero-right' >
            <img src={hero_img}  alt=""/>
        </div>                  
    </div>
  )
}
export default Hero
