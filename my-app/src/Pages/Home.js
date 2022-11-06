import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./pages.css";
const Home= () => {
    return (
    <div>
 <h1>Home</h1>
 <Link className="link" to="/blogs">ill take you to blogs</Link>
 <Link className="link" to="/blogs2">ill take you to the junior version of blogs</Link>
 <Outlet />
    </div>
   
    );
    
  }
  
  export default Home;