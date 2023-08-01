import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const Checkout = () => {
    // const state = useSelector((state) => state.addItem)
    const state = useSelector((state)=>state.handleCart)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price*item.qty;
        return (
            <table style={{'width':'100%'}}>
            <tr className="list-group-item d-flex justify-content-between lh-sm">
                <td>
                    <h2 className="my-0">{item.title.substring(0,35)}...</h2>
                </td>
                <td>
                    <h2 className="my-0">{item.price.toFixed(2)}</h2>
                </td>
                <td>
                    <h2 className="my-0">{item.qty}</h2>
                </td>
                <td style={{'textAlign':'center'}} className="text-muted"><h2>${item.price*item.qty}</h2></td>
            </tr>
            </table>
        );
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3" style={{'text-align':'center'}}>
                            <h1>Your Cart</h1>
                            <p>({state.length} ITEMS)</p>
                            {/* <span className="text-cart">Your cart</span> */}
                            {/* <span className="text-cart">({state.length})</span> */}
                        </h4><br/><br/><br/>
                        <div style={{'border':'solid','width':'100%','display':'flex','justify-content':'center','flex-direction':'column'}}>
                        <table style={{'width':'100%'}}>
                                <tr><td><h1>Product Name:</h1></td>
                                <td><h1>Price:</h1></td>
                                <td><h1>Qty:</h1></td>
                                <td style={{'textAlign':'center'}}><h1>Subtotal:</h1></td>
                                
                                </tr><br/><br/><br/>
                                </table>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <br/><table style={{'width':'90%'}}><br/>
                                <tr className="tr-top-border"style={{'border-top':'solid white'}}>
                                <td></td>
                                <td></td>
                                <td style={{'textAlign':'center'}}><h1>Total (USD)</h1></td>
                                
                                <td style={{'textAlign':'right'}}><h1><strong>${total.toFixed(2)}</strong></h1></td>
                                </tr>
                                </table>
                            </li>
                        </ul>
                        </div>
                       

                    </div>
                </div>
            </div>
            <NavLink to="/home" className='btn'>GO TO HOMEPAGE</NavLink>
                        
        </>
    )
}

export default Checkout