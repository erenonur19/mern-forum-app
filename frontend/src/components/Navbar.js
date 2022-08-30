import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>   
        <NavLink style={({isActive})=>{
            return { color:isActive? 'red':'gray'}
        }} to='/forum'>Home</NavLink>
        <NavLink to='/forum/profile'
        className={({isActive})=>isActive?'active ':'link'
        }
        >Profile</NavLink>

        {/* <NavLink to='/login'
        className={({isActive})=>isActive?'active ':'link'
        }
        >Login</NavLink> */}
    </div>
  )
}

export default Navbar