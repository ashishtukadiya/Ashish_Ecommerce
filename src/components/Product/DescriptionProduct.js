import { NavLink, useParams } from "react-router-dom";
import "../WorkCardStyles.css"
import { useSelector, useDispatch } from "react-redux";
import { addCart,delCart } from "../../redux/action";
import React, { useEffect, useState } from 'react';
// import ProjectCardData from "../WorkCardData";

const DescriptionProduct = () => {
//     const array1 = [
//         {   
//             id:1,
//           title: "Ecommerce Website Design",
//           text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempus imperdiet nulla malesuada pellentesque. Sem integer vitae justo eget magna fermentum iaculis.", 
//           view: "https://www.youtube.com/"
//       },
//         {
//             id:4,
//           title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//           price:109.95,
//           description:"",text:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//           category:"men's clothing",
//           imgsrc:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//           rating:"3.3"
//       }
//   ];
  
    // const found = array1.find(element => element.id === 4);
    // console.log(found);
    // console.log(found.title);

    let params = useParams();
    // let newData = ProjectCardData;

    // console.log(params.id, newData);
    // console.log(params.id);
    // // console.log(newData[params.id])
    // let idDataType = typeof newData[5].id;
    // console.log(idDataType);    
    let paramsid = parseInt(params.id);
    console.log(paramsid);

    const state = useSelector((state)=>state.handleCart);

    const findProductQuantity = (productId) => {
        const qtfind = state.find(element => element.id === productId);
        // console.log(found);
        return qtfind ? qtfind.qty : 0;
      };

    // Finding id from array
    // let found = newData.find(element => element.id === paramsid);

    const dispatch = useDispatch(); // used for redux components to update to cart
    const handleAdd = (product)=>{ // used for adding the product to cart array
        dispatch(addCart(product)); 
    }
    const handleClose = (item) => { //used for deleting item from cart array
        dispatch(delCart(item))
    }

    const [found, setData] = useState({})
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${paramsid}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
    }, [])


    useEffect(() => { // used for adding items in cart to local storage whenever the state is changed
        localStorage.setItem("cartItems",JSON.stringify(state))
    }, [state])



    return(
        <div className="product-card">
            <br/><br/><br/><br/>
            <img className="img-block" src={found?.image} alt="img1"/>
            <h1 className="product-title">{found?.title}</h1>
            <br /><br /><br />
            <div className="price">
                <div className="hding"><h2>Price:</h2></div>
                <div className="pring"><h1>${found?.price}</h1></div>
            </div><br /><br />
            <div className="product-details">
                <h2>Description: </h2><br/>
                <p>{found?.text}{found?.description}</p>
            </div>
            <div className="">
            {findProductQuantity(found.id) === 0
                                ?<>
                                <button className="btn" onClick={()=>{handleAdd(found)}}>Add to Cart</button></>
                                
                                
                                :<>
                                <button onClick={()=>handleClose(found)} className="btn" aria-label="Close">-</button>
                                    <span className='qty'> {findProductQuantity(found.id)} </span>
                                    <button className='btn' onClick={()=>handleAdd(found)}>+</button></>
                                }
                <NavLink to="/cart" className="btn cart-btn">Go to Cart</NavLink>
            </div>
        </div>
    );
}

export default DescriptionProduct