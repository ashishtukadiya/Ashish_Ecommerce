import React, { useEffect, useState } from "react";
import "./index.css"
import Home from "./routes/home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes, useNavigate, BrowserRouter, Navigate } from "react-router-dom";
import Product from "./routes/Product";
// import DescriptionProduct from "./components/Product/DescriptionProduct";
import Id from "./routes/Id";
// import Login from "./components/Login/Login";
import SignIn from "./components/Signin/SignIn";
import Logout from "./components/Signin/Logout";
import SignUp from "./components/SignUp/SignUp";
// import LoadingScreen from "./components/LoadingScreen";
import ProductCategories from "./components/ProductCategories";
// import ProductCategory from "./components/ProductCategory";
// import Formik from "./components/Formik";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";




function App() {
  const [tokenAvailable,settokenAvailable]=useState(false);
  const navigate = useNavigate()
  const LocalToken=localStorage.getItem("userToken")
  const [token,setToken] = useState(LocalToken);

  useEffect(()=>{
    console.log("token",LocalToken)
  },[LocalToken])

  const handleSignup = (userData) => {
    console.log(userData);

  
  }
  useEffect(() => {
    if(token){
      settokenAvailable(true);
    }
    else{
      settokenAvailable(false);
    }
  
    return () => {
      
    }
  }, [token])
  

  return (
    <>
      {/* {token ? <Home /> : <SignIn token={token} setToken={setToken} />} */}
      <Routes>
        {!tokenAvailable?
          <> 
            <Route path="/" element={<SignIn />}/>
            <Route path="/home" element={<SignIn />}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp onSignup={handleSignup}/>} />
            {/* <Route path="/formik" element={<Formik />} /> */}
            </>    
        :<>
        {/* <Route render={() =>
          {
            return (token ? navigate("/home") : navigate("/project"))
          }
        }/> */}
        <Route path="/" element={<Home/>} / >
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/project/:id" element={<Id />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/loading" element={<LoadingScreen />} /> */}
        <Route path="/signup" element={<SignUp onSignup={handleSignup}/>} />
        <Route path="/productcategories" element={<ProductCategories />} />
        <Route path="/productcategory/:category" element={<Product />} />{/*<ProductCategory />*/}
        {/* <Route path="/formik" element={<Formik />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        </>}
       
        <Route render={() =>
          {
            return token ? <Home /> : <SignIn token={token} setToken={setToken}/>
          }
        }/>
        {/* <Route
          render={() => {
            return token ? (navigate("/home")) : (navigate("/signin"));
            }}
          /> */}
      </Routes>
    </>
  );
}

export default App;
