import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductCategories from "../components/ProductCategories"
import ProductCategory from "../components/ProductCategory"


const Product = () => {
  return (
    <>
    {/* <div>Product</div> */}
    <Navbar />
    <ProductCategory />
    <Footer />
    </>
  )
}

export default Product