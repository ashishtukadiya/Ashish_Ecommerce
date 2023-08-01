import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./NavbarStyles.css"
import { Fa500Px, FaAllergies, FaBars, FaTimes} from "react-icons/fa"
import { useSelector } from 'react-redux'


const Navbar = () => {
    const state = useSelector((state)=>state.handleCart)
   
    // const navigate = useNavigate();
    const [click, setClick]= useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor]= useState(false);
    const changeColor = () => {
        if(window.scrollY >= 10){
            setColor(true);}
        else{
            setColor(false);
        }
    }
    const onlogoutclick =() =>{
        // navigate("/signin");
    }

    window.addEventListener("scroll", changeColor);
    return (
    <div className={color ? "header header-bg" : "header"} >
        {/* <img src="./assets/intro-bg.jpg" alt="" /> */}
        <Link to="/">
            <h1> StyleVista</h1>  {/*<Fa500Px size={20} style={{color: "white"}}/>*/}
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/project">Products</Link>
            </li>
            {/* <li>
                <Link to="/product">Products</Link> 
            </li> */}
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/cart">Cart({state.length})</Link>
            </li>
            <li>
                <button className='logout-button'>
                <Link to="/Logout">Logout</Link>
                </button>
            </li>
            
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "white"}}/>) : (<FaBars size={20} style={{color: "white"}}/>)}
        </div>
    </div>
  )
}

export default Navbar