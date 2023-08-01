import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

const localStorage = () => {
    
  const [cartItems, setCartItems] = useSelector((state)=>state.handleCart);

  useEffect(() => {
    // Load cart data from local storage on component mount
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
}

export default localStorage


  
  