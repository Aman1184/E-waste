import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import login from '../Assets/login.png'
import { getByPlaceholderText } from '@testing-library/react'
const Navbar = () => {
  const [menu,setMenu]=useState("HOME")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
           <p>SustainX</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("HOME")}}><Link style={{textDecoration:'none',color:"black"}} to='/'>HOME</Link>{menu==="HOME"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("ABOUT US")}}><Link style={{textDecoration:'none',color:"black"}} to='/aboutus'>ABOUT US</Link>{menu==="ABOUT US"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("SCHEDULE A PICKUP")}}><Link style={{textDecoration:'none',color:"black"}} to='/schedule'>SCHEDULE A PICKUP</Link>{menu==="SCHEDULE A PICKUP"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("CONTACT US")}}><Link style={{textDecoration:'none',color:"black"}} to='/contact'>CONTACT US</Link>{menu==="CONTACT US"?<hr/>:<></>}</li>
      </ul>
      <div className='login'>
        <Link to='/login'><button style={{textDecoration:'none',color:"black"}} >LOGIN</button></Link>
        <Link to='/login'><img src={login} alt=""/></Link>
      </div>
    </div>
  )
}
export default Navbar
