import { useEffect, useState } from "react";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();
  
    return (
      <div className='flex justify-between items-center bg-pink-200 shadow-lg mb-2 sm:bg-amber-200 lg:bg-green-200'>
        <div className='logo-container'>
          <img className='w-36' src={IMG_URL} />
        </div>
        <div className='nav-link'> 
          <ul className="flex">
            <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4"> <Link to='/'>Home</Link> </li>
            <li className="px-4"> <Link to='/about'> About Us </Link></li>
            <li className="px-4"> <Link to='/contact'> Contact Us</Link></li>
            <li className="px-4"> <Link to='/grocery'>Grocery</Link></li>
            <li className="px-4">Cart</li>
            {/* Ternary operator */}
            <button className="px-4" onClick={() => {btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"); console.log(btnName)}}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }

export default Header;  