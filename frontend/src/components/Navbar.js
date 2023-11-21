import {Link} from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const {user} = useAuthContext();
  const {logout} = useLogout();
  const [nav,setNav]=useState(false);
  const handleClick = ()=>{
    logout();
  }

  const handleHamClick = ()=>{
    if (nav===false)
    setNav(true)
    else
    setNav(false)
  }

  return ( 
    <> 
      <nav>
        <label className="logo">SparkleRide</label>
        <ul>
          <li><Link to = "/" className="Link">Home</Link></li>
          <li><Link to = "/about" className="Link">About Us</Link></li>
          <li><Link to = "/about" className="Link">Services</Link></li>
          <li><Link to = "/about" className="Link">Contact Us</Link></li>
        </ul>
        <ul>
          {user && (
          <li>
            <button onClick={handleClick} className="Link navbtn">Logout</button>
          </li>
        )}
        {!user && (
          <li>
          <Link to="/login" className="Link navbtn">Login</Link>
          </li>
        )}
        {!user && (
          <li>
          <Link to="/register" className="Link navbtn">Register</Link>
          </li>
        )}
        </ul>
        <FaBars className="hamburger" onClick={handleHamClick}/>
      </nav>
      {
       nav && <div className="mobile-navbar">
       <ul>
           <li><Link to = "/" className="Link">Home</Link></li>
           <li><Link to = "/about" className="Link">About Us</Link></li>
           <li><Link to = "/about" className="Link">Services</Link></li>
           <li><Link to = "/about" className="Link">Contact Us</Link></li>
         {user && (
           <li>
             <button onClick={handleClick} className="Link">Logout</button>
           </li>
         )}
         {!user && (
           <li>
           <Link to="/login" className="Link navbtn">Login</Link>
           </li>
         )}
         {!user && (
           <li>
           <Link to="/register" className="Link navbtn">Register</Link>
           </li>
         )}
         </ul>
       </div> 
      }
      </>
  );
}
 
export default Navbar;