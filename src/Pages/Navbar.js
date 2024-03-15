import React from "react";
import {Link, NavLink} from "react-router-dom"

const Navbar=()=>{
    return (
        <div className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>   {/*  NavLink will have a class "active"*/}
        </div>
    )
}

export default Navbar




            // <a href="/home">Home</a>
            // <a href="/about">About</a>
            // <a href="/blog">Blog</a>
            // <a href="/contact">Contact</a>
            