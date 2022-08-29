import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const HomepageContainer = () => {

  const {logged,user}=useContext(UserContext)
  return (
    <div>
      
    <h1>Hello World</h1>
    <div>{logged ? <h1>giriş yapıldı</h1> : <h1>Griş yapılmadı</h1> }</div>
    <div>{user.username}</div>
    

    </div>
  )
}

export default HomepageContainer
