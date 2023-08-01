import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
// import Work from '../components/Work'
import Footer from '../components/Footer'


const home = () => {
  const token = localStorage.getItem('userToken');
  
  


  // const [token,settoken] = useState(localStorage.getItem("usertoken") ?? null);


  return (
    <div>
       {token ? (
        <h1>Welcome! You are logged in.</h1>
      ) : (
        <h1>Please log in to access this page.</h1>
      )}

      <Navbar />
      <HeroImg /> 
      {/* <Work /> */}
      <Footer />
      {/* <button className='btn'>button</button> */}
    </div>
  )
}

export default home