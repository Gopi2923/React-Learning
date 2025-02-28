import { useEffect, useState } from "react";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  console.log(btnName)
  console.log("header render")

  // let btnName = "Login";

   // * if no dependency array => useEffect is called on every component render of the component
  // * if the dependency array is empty => useEffect is called only on the initial render(just once) of the component
  // * if the dependency array contains a dependency => useEffect is called everytime the value of the depencecy changes
  // * Dependency: A depency can be a state variable (or) a function

  // useEffect(() => {
  //   console.log(`useEffect Called`);
  // }, [btnNameReact]);
  
    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src={IMG_URL} />
        </div>
        <div className='nav-link'>
          <ul>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/about'> About Us </Link></li>
            <li> <Link to='/contact'> Contact Us</Link></li>
            <li>Cart</li>
            {/* Ternary operator */}
            <button className="login-btn" onClick={() => {btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"); console.log(btnName)}}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }

export default Header;  