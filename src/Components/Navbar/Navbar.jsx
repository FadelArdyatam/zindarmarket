import React, { useState } from 'react'
import './Navbar.css'

import cartIcon from '../Assets/cart_icon.png'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);


  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <Link to={"/"} style={{textDecoration:'none'}}>
            <p>ZINDAR MARKET</p>
          </Link>
        </div>
        <ul className='nav-menu'>
          <li onClick={()=> {setMenu("shop")}}><Link style={{textDecoration:'none'}} to={"/"}>Shop</Link>{menu==="shop"? <hr/>: <></>}</li>
          <li onClick={()=> {setMenu("men")}}><Link style={{textDecoration:'none'}}  to={"/men"}>Men</Link>{menu==="men"? <hr/>: <></>}</li>
          <li onClick={()=> {setMenu("women")}}><Link style={{textDecoration:'none'}}  to={"/women"}>Women</Link>{menu==="women"? <hr/>: <></>}</li>
          <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration:'none'}}  to={"/kids"}>Kids</Link>{menu==="kids"? <hr/>: <></>}</li>
        </ul>
        <div className='nav-login-cart'>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
          <Link to={"/cart"}>
            <img src={cartIcon} alt="" />
          </Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar