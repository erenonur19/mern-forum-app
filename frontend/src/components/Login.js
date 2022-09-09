import {useContext} from 'react'
import UserContext from '../context/UserContext'
import { useState } from 'react'
import axios from 'axios'
import{useNavigate} from "react-router-dom"

function Login() {
  const navigate=useNavigate()
  const handleLogin=()=>{
    if(username.length<6 && password.length<8){
      setError('Lütfen geçerli bir kullanıcı adı ve şifre giriniz')
    }
    else{

        axios.post('http://localhost:8080/api/auth/login', {
          username,
          password
        }).then(function (response) {
          const uName=response.data.user.username
          setError(`Hoşgeldin ${uName}, 
          \n yönlendiriliyor.. `)
          localStorage.setItem('username',uName)
          setLogged(true)
          navigate('/forum')
        })
        .catch(function (error) {
          setError(error.response.data.message)
          console.log(error.response.data.message);
        })
        .finally(()=>{
          setError('Bilinmeyen Hata.. Lütfen daha sonra deneyiniz')
        })
        
       
    }
  }

  const [username,setUsername]=useState('')
  const[password, setPassword]=useState('')
  const {setLor,setLogged}=useContext(UserContext)
  const[error,setError]=useState('')
  return (
    <div className='form'>
        <h1>Oturum Aç</h1>
        <p>Profesyonel dünyanızla ilgili güncel haberlere sahip olun</p>
        
        <input 
        value={username} 
        placeholder="Kullanıcı adı"
        onChange={(e)=>{
            setUsername(e.target.value)
        }} 
        />
        
        <input 
        value={password}
        type="password" 
        placeholder="Şifre"
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
         />

        <a href='/'>Şifrenizi mi unuttunuz? </a>
        <button onClick={()=>{
         handleLogin()
        }} className='btn'>Oturum açın</button>
        <div style={{color:'red',}}>{error}</div>
        
        <div className='or'>Üye değil misiniz? <a href='/' onClick={(e)=>{
        e.preventDefault()
        setLor(false)
}}>Hemen Katılın</a></div>
        {/* <button className='btn' style={{backgroundColor:'#fff',color:'#0073b1', border:'1px solid black'}}>Üye Ol</button> */}
       
    </div>
  )
}

export default Login
