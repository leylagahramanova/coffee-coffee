import React from 'react';
import logo from '../img/logo.png';

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="grid-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <p>JavaJolt Roasters</p>
          <div className="footer-icons">

            < Link  style={iconStyle} href="#"><FaFacebook size={40} style={{
              color: "#1877F2", paddingRight: '5px',
              marginBottom: "5px"
            }} /></ Link >
            < Link  style={iconStyle} href="#"><FaTwitter size={40} style={{
              color: "	#1DA1F2", marginRight: '3px',
              marginBottom: "5px"
            }} /></ Link >
            < Link style={iconStyle} href="#"><FaInstagram size={40} style={{
              color: "black", marginRight: '3px',
              marginBottom: "5px"
            }} /></ Link >
            < Link style={iconStyle} href="#"><FaGoogle size={40} style={{
              color: "white", marginRight: '3px',
              marginBottom: "5px"
            }} /></ Link >
            < Link style={iconStyle} href="#"><FaYoutube size={40} style={{
              color: "red", marginRight: '3px',
              marginBottom: "5px"
            }} /></ Link >
          </div>
        </div>
        <div className="footer-info">
          <h3>   Contact</h3>
          <div className='info'>
            <ul>
              <li><i><FaLocationDot size={40} style={{ color: '#FBBC04' }} /></i><p>4140 Parker Rd.</p></li>
              <div  className='parker'>              <p>Allentown, New</p>
              <p>Mexico 31134</p></div>

              <li><i><BsTelephone size={40} style={{ color: '#FBBC04' }} /></i> <p> (319) 555-0115 </p></li>

            </ul>
</div>

          </div>
        </div>
      </div>
      );
}
      const iconStyle = {
        display: 'inline-block',
      width: '48px',
      height: '48px',
      cursor: 'pointer',
      fontSize: '20px',
      textAlign: 'center',
      lineHeight: '8rem',
};
      export default Footer;

