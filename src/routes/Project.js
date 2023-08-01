import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'
import ProductCategoryList from '../components/ProductCategoryList'
import ProductCategories from '../components/ProductCategories'
// import WorkCard from '../components/WorkCard'

const Project = () => {
  const [state,setState] = useState(0)

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    handleState(buttonId);
  };

  const handleState=(state) => {
    if (state===0){
      console.log("handleState: "+state);
      setState(0);
    }
    else if(state===1){
      console.log("handleState: "+state);
      setState(1);
    }
  }
  return (
    <div> 
      {/* <h1>Project</h1> */}
      <Navbar />
      <HeroImg2 heading="PRODUCTS" text="Some best selling products"/>  
      <div className='option-btn'>
      <button
        className={activeButton === 0 ? 'active btn ' : 'btn btn-light'}
        onClick={() => handleButtonClick(0)}
      >
        All Products
      </button>
      <button
        className={activeButton === 1 ? 'active btn ' : 'btn btn-light'}
        onClick={() => handleButtonClick(1)}
      >
        Categories
      </button>
      {/* <button onClick={()=>{ handleState(0)}} className='btn pro-cat-btn'>All Products</button> */}
      {/* <button onClick={()=>{handleState(1)}} className='btn pro-cat-btn'>Categories</button> */}
      </div>
      {!state ? <Work/> : <ProductCategories />}
      {/* <Work/> */}
      <PricingCard />
      <Footer />


      </div>
  )
}

export default Project