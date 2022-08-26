import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Register = () => {
  const {setLor}=useContext(UserContext)
  return (
    <div className='form'>
        <h1>Kayıt Ol</h1>
        <p>Profesyonel hayatınızdan en iyi şekilde yararlanın</p>
        
        <input placeholder="E-posta veya Telefon"></input>
        
        <input placeholder="Şifre"></input>
        <div className='f-size'>
        <p>Kabul Et ve Katıl’ı tıklayarak, Liforum'un <a href='/'>Kullanıcı Anlaşmasını</a>, <a href='/'>Gizlilik Politikasını</a> ve <a href='/'>Çerez Politikasını</a> kabul etmiş olursunuz.</p>
        </div>
        
        <button className='btn'>Kabul Et ve Katıl</button>
        
        <div className='or'>Üye misiniz? <a href='/' onClick={(e)=>{
        e.preventDefault()
        setLor(true)
}}>Giriş Yapın</a></div>
        {/* <button className='btn' style={{backgroundColor:'#fff',color:'#0073b1', border:'1px solid black'}}>Üye Ol</button> */}
       
    </div>
  )
}

export default Register
