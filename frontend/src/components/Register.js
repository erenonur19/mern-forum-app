import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import axios from 'axios'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import TextField from './TextField'
import{useNavigate} from "react-router-dom"

const Register = () => {
  const [error,setError]=useState('')
  const validate=Yup.object({
    username:Yup.string()
    .max(18, 'Kullanıcı adı 18 karakterden büyük olamaz')
    .required('Kullanıcı adı boş bırakılamaz'),
    password:Yup.string()
    .min(8,'Şifreniz en az 8 karakter olmalı.')
    .required('Şifre boş bırakılamaz')
  })
  const {setLor,setUser, setLogged}=useContext(UserContext)
  const navigate=useNavigate()

  return (
    <Formik
    initialValues={{
        username: '',
        password: '',
    }}
    validationSchema={validate}
    onSubmit={(values) => {
      axios.post('http://localhost:8080/api/auth/register', {
        username:values.username,
        password:values.password
      })
      .then(function (response) {
        setError(`Hoşgeldin ${response.data.user.username}, 
        \n yönlendiriliyor.. `)
        setUser({
          username:response.data.user.username
        })
        setLogged(true)
        navigate('/homepage')
      })
      .catch(function (error) {
        setError(error.response.data.message)
        console.log(error.response.data.message);
      });
      
  }}
    >
        {formik=>(
          <div className='form'>
        <h1>Kayıt Ol</h1>
        <p>Profesyonel hayatınızdan en iyi şekilde yararlanın</p>

                     <Form>
                        <TextField label="Kullanıcı adı" name="username" type="text"></TextField>

                        <TextField label="Password" name="password" type="password"></TextField>

                        <div className='f-size'>
                        <p>Kabul Et ve Katıl’ı tıklayarak, Liforum'un <a href='/'>Kullanıcı Anlaşmasını</a>, <a href='/'>Gizlilik Politikasını</a> ve <a href='/'>Çerez Politikasını</a> kabul etmiş olursunuz.</p>
                        </div>
                        <div style={{color:'red',}}>{error}</div>
                        
                        
                        <button type='submit' className='btn'>Kabul Et ve Katıl</button>
                        
                        
                        
                        <div className='or'>Üye misiniz? <a href='/' onClick={(e)=>{
                        e.preventDefault()
                        setLor(true)
                }}>Giriş Yapın</a></div>
                       
    
                     </Form>
                     
        
                     </div>
            
        )}
    </Formik>
    
  )
}

export default Register
