import React, { useEffect } from 'react'
import { NavLink, json } from 'react-router-dom'
import { useState } from 'react'
import ProductCategoryList from './ProductCategoryList'
const ProductCategories = (props) => {

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(
                json=>{
                // console.log(json)
                setData(json);} 
                )
    },[])
    return (
    <div>
        <h1 className="project-heading">
                All Categories
            </h1>
            <div className="project-container">
                
                {data.map((val,ind) => {
                    return (
                        <ProductCategoryList
                            key={ind}
                            data={val}
                            
                        />
                    )
                })}
            </div>
    </div>
    )
}

export default ProductCategories


// <div className='category-main-div'>
    //     <div className="project-card">
    //         <img className="img-resize" src={props.image} alt="img1"/>
    //         <h2 className="project-title">{props.title}</h2>
            
    //         <div className="pro-details">
    //             {/* <p>{props.text}</p> */}
    //             <div className="pro-btns">
    //                 <NavLink to={`/project/${props.id}`} className="btn" id="viewbtn">View</NavLink>    {/* add your View URL Here*/}
    //                 {/* <NavLink to="url.com" className="btn" id="sourcebtn">Source</NavLink>  add your Source URL Here */}
    //                 {/* <button></button> */}
    //             </div>
    //         </div>
    //         {console.log("products rendered successfully.")}
    //     </div>

    // </div>