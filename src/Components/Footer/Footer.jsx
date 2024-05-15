import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import linkdin_icon from '../Assets/linkdin_icon.png'
import github from '../Assets/github.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="/"/>
            <p>SustainX</p>
        </div>
        <ul className="footer-links">
            <li><Link style={{textDecoration:'none',color:"black"}} to='/aboutus'>ABOUT US</Link></li>
            <li><Link style={{textDecoration:'none',color:"black"}} to='/schedule'>SCHEDULE A PICKUP</Link></li>
            <li><Link style={{textDecoration:'none',color:"black"}} to='/contact'>CONTACT US</Link></li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
            <a href='https://www.instagram.com/__chitransh__shukla/'>
                <img src={instagram_icon} alt="/"/></a>
            </div>
            <div className="footer-icon-container">
            <a href='https://www.linkedin.com/in/chitranshshukla'>
                <img src={linkdin_icon} alt="/"/></a>
            </div>
            <div className="footer-icon-container">
            <a href='https://www.github.com/shuklachitransh'>
                <img src={github} alt="/"/></a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
