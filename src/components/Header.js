import { useState } from "react";
import { IMG_URL } from "../utils/constant";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  console.log(btnName)
  console.log("header render")

  // let btnName = "Login";
  
    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src={IMG_URL} />
        </div>
        <div className='nav-link'>
          <ul>
            <li>Home</li>
            <li>About Us </li>
            <li>Contact Us</li>
            <li>Cart</li>
            {/* Ternary operator */}
            <button className="login-btn" onClick={() => {btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"); console.log(btnName)}}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }

export default Header;  