import "./WorkCardStyles.css"
import { useDispatch } from "react-redux";
import React, { useEffect } from 'react'

import { NavLink } from "react-router-dom";
import { addCart, delCart } from '../redux/action'
import { useSelector } from 'react-redux'


// import DescriptionProduct from "./Product/DescriptionProduct";

const WorkCard = ({data}) => {
    const datalocal = data;
    const state = useSelector((state)=>state.handleCart)
    // state.map(cartItem);
    // const qty = props.qty;
        // console.log();    
    // console.log(typeof(state));
    // console.log()
    const dispatch = useDispatch();

    const handleAdd = (product)=>{
        dispatch(addCart(product));
       
    }
    const handleClose = (item) => {
        dispatch(delCart(item))
    }

    const findProductQuantity = (productId) => {
        const found = state.find(element => element.id === productId);
        // console.log(found);
        return found ? found.qty : 0;
      };
    
    

    useEffect(() => {
        localStorage.setItem("cartItems",JSON.stringify(state))
    }, [state])
    
    return(
        <div className="product-container" style={{'display':'flex','justify-content':'center'}}>
        {/* <h1 style={{'textAlign':'center'}}>All Products</h1><br/><br/> */}
      <table style={{'width':'95%','border':' solid black'}}>
      <thead className="product-heading">
            <tr>
                <th><h3>Product</h3></th>
                <th><h3>Name</h3></th>
                <th><h3>Price</h3></th>
                <th><h3>Options</h3></th>
            </tr>
            </thead>
        <tbody>
          {datalocal.map(product => (
            <tr key={product.id}>
              <td><img className='list-img-block' src={product.image} alt={product.title} height="200px" width="180px" /></td>
              <td><p>{product.title.substring(0,20)}...</p></td>
              <td><p>${product.price}</p></td>
              <td><NavLink to={`/project/${product.id}`} className="btn" id="viewbtn">View</NavLink>  <br/><br/>
                                {findProductQuantity(product.id) === 0
                                ?<>
                                <button className="btn" onClick={()=>{handleAdd(product)}}>Add to Cart</button></>
                                
                                
                                :<>
                                <button onClick={()=>handleClose(product)} className="btn" aria-label="Close">-</button>
                                    <span className='qty'> {findProductQuantity(product.id)} </span>
                                    <button className='btn' onClick={()=>handleAdd(product)}>+</button></>
                                }
                                
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
          }
        // <table style={{'width':'1000px','border':'solid'}}>
        //     <thead>
        //     <tr>
        //         <th>hello</th>
        //         <th>how</th>
        //         <th>are </th>
        //         <th>you</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     <tr>

           

               
        //     </tr>
        //     </tbody>
        // </table>
                    // {/* <NavLink to="url.com" className="btn" id="sourcebtn">Source</NavLink>  add your Source URL Here */}
                    // {/* <button></button> */}
                    // {/* </div> */}
            // {console.log("products rendered successfully.")}
        // {/* </div> */}
        
//     );

// }

export default WorkCard




















// import "./WorkCardStyles.css"
// import { addCart } from "../redux/action";
// import { useDispatch } from "react-redux";
// import React from 'react'
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// // import DescriptionProduct from "./Product/DescriptionProduct";

// const WorkCard = (props) => {
//     const dispatch = useDispatch();
//     const addProduct = (product)=>{
//         dispatch(addCart(product));
//     }
//     const navigate = useNavigate();
//     return(
//         <div className="project-card" key={props.id}>
//             <img className="img-resize" src={props.image} alt="img1"/>
//             <h2 className="project-title">{props.title.substring(0,20)}</h2>
//             <h3 className="project-title">${props.price}</h3>
            
//             <div className="pro-details">
//                 {/* <p>{props.text}</p> */}
//                 <div className="pro-btns">
//                     <NavLink to={`/project/${props.id}`} className="btn" id="viewbtn">View</NavLink>    {/* add your View URL Here*/}
//                     <button className="btn" onClick={()=>{addProduct(props)}}>Add to Cart</button>
//                     {/* <NavLink to="url.com" className="btn" id="sourcebtn">Source</NavLink>  add your Source URL Here */}
//                     {/* <button></button> */}
//                 </div>
//             </div>
//             {console.log("products rendered successfully.")}
//         </div>
        
//     );

// }

// export default WorkCard
