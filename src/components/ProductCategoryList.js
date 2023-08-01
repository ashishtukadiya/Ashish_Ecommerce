import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCategoryList = (props) => {
  return (
    // <div>ProductCategory</div>
    <div className='category-main-div'>
        
        <div className="cat-btns">
                    
                    <NavLink to={`/productcategory/${props.data}`} className="fixedbtn" id="viewbtn">{props.data}</NavLink> 
                    {/* add your View URL Here*/}
                    {/* <NavLink to="url.com" className="btn" id="sourcebtn">Source</NavLink>  add your Source URL Here */}
                    {/* <button></button> */}                    
        </div>
            {/* {console.log("products rendered successfully.")} */}
        
    </div>

  )
}

export default ProductCategoryList