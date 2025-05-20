import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="main">
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </header>
    </div>
  );
}
export default Navbar;

