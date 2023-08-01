import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import {delItem} from '../redux/actions/index'
import { NavLink } from 'react-router-dom'
import { addCart, delCart } from '../redux/action'


const Cart = () => {
    // const state = useSelector((state)=> state.addItem)
    const state = useSelector((state)=>state.handleCart)
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delCart(item))
    }
    const handleAdd = (item) =>{
        dispatch(addCart(item))
    }
    useEffect(() => {
        localStorage.setItem("cartItems",JSON.stringify(state))
    }, [state])

    const cartItems = (cartItem) => {
        return(
            // <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    {/* <button onClick={()=>handleClose(cartItem)} className="btn" aria-label="Close">Remove</button> */}
                    {/* <div className="row justify-content-center"> */}
                        {/* <div className="col-md-4"> */}
                        <table style={{'width':'100%','border':'solid'}}>
                            <tr className="scale">
                                <td></td>
                                {/* <td><h3>PRODUCT NAME:</h3></td> */}
                                {/* <td><h3>PRICE</h3></td> */}
                                {/* <td><h3>QUANTITY</h3></td> */}
                                {/* <td><h3>SUBTOTAL</h3></td> */}

                            </tr>
                            <tr className="scale">
                                <td>
                                <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                                </td>
                                <td>
                                <h3>{cartItem.title}</h3>  
                                </td>
                                <td>
                                <p>${cartItem.price.toFixed(2)}</p>
                                </td>
                                <td>
                                    <button onClick={()=>handleClose(cartItem)} className="btn" aria-label="Close">-</button>
                                    <span className='qty'> {cartItem.qty} </span>
                                    <button className='btn' onClick={()=>handleAdd(cartItem)}>+</button>
                                    
                                </td>
                                <td>
                                <p className="lead fw-bold">${(cartItem.price*cartItem.qty).toFixed(2)}</p>
                                </td>
                            </tr>
                            </table>
                            {/* <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">${cartItem.price*cartItem.qty}</p>
                        </div>
                        <button className='btn' onClick={()=>handleAdd(cartItem)}>Add</button>
                        <span><h2>{cartItem.qty}</h2>
                        </span>
                        <button onClick={()=>handleClose(cartItem)} className="btn" aria-label="Close">Remove</button> */}
                        {/* <br/><br/> */}
                    
                </div>
            // </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="">
                <div className="">
                    <div className="row" style={{'border':'3px solid','textAlign':'center'}}>
                        <h1>Your Cart is Empty</h1>
                        
                    </div>
                    <div style={{'text-align':'center'}}>
                        <br/><br/>
                    <NavLink to="/home" className='btn'>GO TO HOMEPAGE</NavLink>
                    </div>
                    </div>
                </div>
        );
    }

    const clearCart= () =>{
        localStorage.removeItem('cartItems');
        window.location.reload();
    }

    const button = () => {
        return(
            <div className="container">
                <div className="checkout-btns" >  {/*style={{'width':'100%','text-align':'center','justify-content':'space-between'}}*/}
                    <br/><NavLink to="/checkout" className="btn checkout-btn">Proceed To checkout</NavLink>
                    <NavLink onClick={()=>{clearCart()}} className='btn checkout-btn'>Clear Cart</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>

            {state.length === 0 && emptyCart()}
            {state.length !== 0 ? state.map(cartItems) : <>{() =>{ clearCart() } }</>}
            {state.length !== 0 ? button() : <>  {() => { clearCart() } }</>}
        </>

    )
}

export default Cart