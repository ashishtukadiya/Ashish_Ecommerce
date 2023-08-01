import { Link } from "react-router-dom"
import "./AboutContentStyles.css" 
import React from 'react'
import ReactImg1 from "../assets/react1.jpg"
import ReactImg2 from "../assets/react2.webp"
const AboutContent = () => {
  return (
    <div className="about">
        {/* AboutContent */}
        <div className="left">
            <h1>Who Am I?</h1>
            <p>
                Risus nullam eget felis eget nunc. Tortor at risus viverra adipiscing at.
                Lorem mollis aliquam ut porttitor.
                Lacus vel facilisis volutpat est.
                Sagittis vitae et leo duis ut diam.
                Orci phasellus egestas tellus rutrum tellus pellentesque eu.
                Sit amet porttitor eget dolor.
                Scelerisque felis imperdiet proin fermentum leo vel orci porta.
            </p>
            <Link to="/contact">
                <button className="btn"> Contact </button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={ReactImg1} className="img" alt="ReactImg1" />
                </div>
                <div className="img-stack bottom">
                    <img src={ReactImg2} className="img" alt="ReactImg2" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent