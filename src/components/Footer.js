import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
import "./FooterStyles.css"

const Footer = () => {
  return (
    <div className='footer'>
        {/* <h1>Footer</h1> */}
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>123 location</p>
                        <p>567 location, City</p>
                        <p>State, Country</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    1231233453</h4>
                </div>
                <div className='mail'>
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    123xyz@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About The Company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur ipsum libero, porta ac accumsan at, consequat sed orci.</p>
            
                <div className='social'>
                <h4>
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer