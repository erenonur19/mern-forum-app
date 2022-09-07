import { Outlet } from "react-router-dom";
import { useState } from 'react'
import{useNavigate} from "react-router-dom"
import Navbar from './Navbar'
import '../Homepage.css'
const Layout = () => {
    const navigate=useNavigate()
 
    const [username]=useState(localStorage.getItem('username'))
  
  return (
    <>
      {
        <div>
    
        {username 
        ?
        <div>
            <Navbar/>
            <Outlet/>
        </div>
        
        : <div>
          <h1>Bu sayfayı görmek için giriş yapmalısınız..</h1>
          <button onClick={()=>{
            navigate('/')
          }}>Giriş Yap</button>
        </div>} 
      
    
        </div>
      }

  
    </>
  )
};

export default Layout;