import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import WorkCard from './WorkCard';

const ProductCategory = () => {
    const params = useParams();
    console.log(params);
     const [found,setData] = useState([])
     const catfound = params.category;
     useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${params.category}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
    }, [])
    // console.log(found);
  
  
  
    return (
        <div className="work-container">
            {/* <br /><br /><br /> */}
            {/* <div className="cat-btn">
            <button onClick={()=> navigate("/productcategories")} className="btn cat-btn">Product categories</button>
            </div> */}
            <br/><br/>
            <h1 className="project-heading">
                { catfound.toUpperCase() } PRODUCTS
            </h1>
            <div className="category- container">
                
                {/* {found.map((val, ind) => { */}
                    {/* return ( */}
                        <WorkCard
                            data={found}
                            // key={ind}
                            // image={val.image}
                            // title={val.title}
                            // text={val.text}
                            // view={val.text}
                            // id={val.id}
                            // price={val.price}
                        />
                    {/* ) */}
                {/* })} */}
            </div>
        </div>


    );
}

export default ProductCategory