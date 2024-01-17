import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

import { IoMdClose } from "react-icons/io";
import { useAppSelector } from "../app/hooks";
import Auth from "./Auth";



const Header = () => {

  const products = useAppSelector((state) => state.products);
  const [displaySearch, setDisplaySearch] = useState(false);
  const displaySearchHandle = () => {
    setDisplaySearch(!displaySearch);
  }

  return (
    <div className="nav-menu-wrapper">
      <div className="container">
        <div className="nav-menu-box">
            <Link to="/" className="nav-menu-logo">
                My Shop
            </Link>  
            <div className={`search-form-container ${displaySearch? "display-search-form":""}`}>
              <div className="container">
                <div className="search-form-header">
                  <div></div>
                  <button className="close-search-container" onClick={() => setDisplaySearch(false)}>
                    <IoMdClose />
                  </button>
                </div>
                <form className="search-form">
                  <input type="text" className="search-input" id="search-input" name="search-input" placeholder="Search..."/>
                  <button className="search-button" type="submit">Search</button>
                </form>
              </div>
            </div>
            <ul className="nav-menu">
              <li className="nav-menu-item search">
                <button type="button" onClick={() => displaySearchHandle()}><FaSearch size={24}/></button>
              </li>
              <li className="nav-menu-item cart">
                <Link to="/cart"><BsCart4 size={24}/></Link>
                <span>({products.productCart.length})</span>
              </li>
              <li className="nav-menu-item user">
                 <Auth/>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header