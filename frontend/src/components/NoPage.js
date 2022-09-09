import React from 'react'

import { useNavigate } from 'react-router-dom'

const NoPage = () => {
  const navigate=useNavigate()
  return (
    <div style={{
      display:'flex', height:'100vh', justifyContent:'center', flexDirection:'column', alignItems:'center', backgroundColor:'#f8f4ec'
      }}>
          <h1>Böyle bir sayfa yok:(</h1>
          <button onClick={()=>{
              navigate('/forum')
          }}>Anasayfaya Dön</button>
      </div>
  )
}

export default NoPage
