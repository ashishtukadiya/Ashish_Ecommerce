import "./FormStyles.css"
 import React from 'react'
 
 const Form = () => {
   return (
    <div className="form">
        <form>
            <label>Your Name:</label>
            <input type="text"></input>

            <label>Email:</label>
            <input type="text"></input>

            <label>Subject:</label>
            <input type="text"></input>

            <label>Message: </label>
            <textarea rows="6" cols="10" placeholder="Enter Your Message Here"></textarea>
            <br/>
            <button type="submit" className="btn">Submit</button>
            <button type="reset" className="btn">Reset</button>
        </form>
  </div>
   )
 }
 
 export default Form