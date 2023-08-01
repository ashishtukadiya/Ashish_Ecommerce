import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar';

const Logout = () => {
    const navigate = useNavigate();
    const logoutbutton = () => {
        navigate("/home")
        localStorage.clear();
        window.location.reload();
    }
  return (
    <>
    <Navbar />
    <div className='logout-btn' style={{"paddingTop":"20%", "textAlign":"center"}}>
        {/* <h2>Logout Successful</h2> */}
    <Link>
        <button className='btn logout-btn' onClick={logoutbutton}>Click to Log-Out</button>
    </Link>    
    </div>
    </>
  )
}

export default Logout