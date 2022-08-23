import React from 'react'

function Login() {
  return (
    <div className='form'>
        <h1>Oturum Aç</h1>
        <p>Profesyonel dünyanızla ilgili güncel haberlere sahip olun</p>
        
        <input placeholder="E-posta veya Telefon"></input>
        
        <input placeholder="Şifre"></input>
        <a href='/'>Şifrenizi mi unuttunuz? </a>
        <button className='btn'>Oturum açın</button>
        
        <div className='or'>Üye değil misiniz? <a href='/'>Hemen Katılın</a></div>
        {/* <button className='btn' style={{backgroundColor:'#fff',color:'#0073b1', border:'1px solid black'}}>Üye Ol</button> */}
       
    </div>
  )
}

export default Login
