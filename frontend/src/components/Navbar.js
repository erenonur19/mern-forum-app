import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Navbar.css';
import logo from '../img/logo.png'
import search from '../img/search.png'
import home from '../img/home.png'
import chat from '../img/chat.png'
import user from '../img/user.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
     <a href='/forum'> <img alt='logo' src={logo} style={{width:'100px'}}/></a>
     <div className='search'>
     <a href="/forum"><img alt='logo' src={search} style={{width:'20px', marginLeft:'10px'}} /></a>
     <input className='nav-inp' placeholder='Arama Yap'></input>
     </div>
      
      </div>
      <div className='nav-nav'>
        <li className='nav-link'>
            <ul>
            <NavLink to='/forum'><img style={{width:'33px'}} src={home} alt='homepage'/></NavLink>
            </ul>
          <ul><NavLink to='/forum/mesaj'><img style={{width:'32px'}} src={chat} alt='chat'/></NavLink></ul>
          <ul><NavLink to='/forum/profile'><img style={{width:'32px'}} src={user} alt='chat'/></NavLink></ul>
        </li>
      
      
      

      </div>
        

        {/* <NavLink to='/login'
        className={({isActive})=>isActive?'active ':'link'
        }
        >Login</NavLink> */}
    </div>
  )
}

export default Navbar