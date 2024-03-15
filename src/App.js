import React, {useState} from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import {Routes, Route} from "react-router-dom"
import Navbar from "./Pages/Navbar";
import "./App.css"

const App=()=>{
  const [count, setCount] = useState(0);
  return(
    <div>
      <Navbar/>

      <Routes>
        <Route path="/home" element={<Home name="Sanjoy" />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog count={count} setCount={setCount}/>} />
        <Route path="/contact" element={<Contact count={count} />} />
      </Routes>
    </div> 
  )
}

export default App
