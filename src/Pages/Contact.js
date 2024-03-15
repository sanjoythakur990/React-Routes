import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = ({count})=>{
    let navigate= useNavigate()
    return (
        <div>
            <h1>Value of count is - {count}</h1>
            <p>This is the Contact Page</p>
            <button onClick={()=> navigate("/blog")}>Go to Blog 1</button>
            <button onClick={()=> navigate("blog")}>Go to Blog 2</button>
        </div>
    )
}

export default Contact