import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Auth = () => {
  
    const [displayAuth, setDisplayAuth] = useState(false);

    const userLogout = () => {
       alert("User logged out");
    };

    return (
        <div className="auth-container">
            <button type="button"><FaUserCircle size={24} onClick={() => setDisplayAuth(prevState => !prevState)}/></button>
            <IoMdArrowDropdown size={24} className={`drop-down ${displayAuth ? "display-auth":""}`}/>
            <ul className={`user-menu ${displayAuth ? "display-auth":""}`}>
                <li className="user-menu-item register"><Link to="/register"><FaUser size={18}/> Register</Link></li>
                <li className="user-menu-item login"><Link to="/login"><FaSignInAlt size={18}/> Login</Link></li>
                <li className="user-menu-item register"><Link to="/" onClick={() => userLogout()}><FaSignOutAlt size={18}/> Logout</Link></li>
            </ul>
        </div>
    )
}

export default Auth