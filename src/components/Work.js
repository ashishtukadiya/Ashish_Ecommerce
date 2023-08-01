import "./WorkCardStyles.css"
import { addCart } from "../redux/action";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import WorkCard from "./WorkCard";
// import WorkCardData from "./WorkCardData"

import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
// import DescriptionProduct from "./Product/DescriptionProduct";

const Work = () => {
    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product));
    }

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
    }, [])

    return (

    //     <div>
    //   <h1 style={{'textAlign':'center'}}>All Products</h1><br/><br/>
    //   <table style={{'width':'100%','border':' solid'}}>
    //   <thead>
    //         <tr>
    //             <th><h3>Product</h3></th>
    //             <th><h3>Name</h3></th>
    //             <th><h3>Price</h3></th>
    //             <th><h3>Options</h3></th>
    //         </tr>
    //         </thead>
    //     <tbody>
    //       {data.map(product => (
    //         <tr key={product.id}>
    //           <td><img src={product.image} alt={product.title} height="200px" width="180px" /></td>
    //           <td><p>{product.title.substring(0,20)}...</p></td>
    //           <td><p>${product.price}</p></td>
    //           <td><NavLink to={`/project/${product.id}`} className="btn" id="viewbtn">View</NavLink>  
    //                             <button className="btn" onClick={()=>{addProduct(product)}}>Add to Cart</button></td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>



    <div className="work-container">
    {/* <br /><br /><br /> */}
    {/* <div className="cat-btn">
    <button onClick={()=> navigate("/productcategories")} className="btn cat-btn">Product categories</button>
    </div> */}
    
    <h1 className="project-heading">
        All Products
    </h1>
    {/* <div className="project-container"> */}
        
                <WorkCard
                    data={data}
                    // key={ind}
                    // image={val.image}
                    // title={val.title}
                    // text={val.text}
                    // view={val.text}
                    // id={val.id}
                    // price={val.price}
                />

    
    {/* </div> */}
</div>
    



        // <div className="work-container">
        //     {/* <br /><br /><br /> */}
        //     {/* <div className="cat-btn">
        //     <button onClick={()=> navigate("/productcategories")} className="btn cat-btn">Product categories</button>
        //     </div> */}
            
        //     <h1 className="project-heading">
        //         All Products
        //     </h1>
        //     <div className="project-container">
                
        //         {data.map((val, ind) => {
        //             return (
        //                 <WorkCard
        //                     key={ind}
        //                     image={val.image}
        //                     title={val.title}
        //                     text={val.text}
        //                     view={val.text}
        //                     id={val.id}
        //                     price={val.price}
        //                 />
        //             )
        //         })}
        //     </div>
        // </div>


    );
}

export default Work

// Podcast Thriving Facebook community and top-
// ranked, Amy inspires a grounded, tangible and self-
// affirming sense of "Wow! I really can do this" for
// over 100,000 online entrepreneurs. Best-selling
// marketing courses