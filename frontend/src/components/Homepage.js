import React from 'react'
import '../Homepage.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import pp from '../img/pp.png'
import estü from '../img/estü.png'
import dots from '../img/3dots.svg'
import like from '../img/like.png'
import comment from '../img/comment.png'
import share from '../img/share.png'
import plus from '../img/plus.png'
import logo from '../img/logo.png'
import line from '../img/line.png'
import arrow from '../img/r-arrow.png'
import {useNavigate} from 'react-router-dom'
const Homepage = () => {
  const navigate=useNavigate()
  const [posts,setPosts]=useState([])
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')
  useEffect(()=>{
    getPosts()
  },[])
  const getPosts=()=>{
    axios.get('http://localhost:8080/api/content/getPosts')
    .then(function(response){
      setPosts(response.data)
    })
    .catch(function (error){
      console.log(error)
    })
  }

  const handleAddPost=()=>{
    if(title===''||content===''){
      alert('Başlık ve gönderi alanı boş bırakılamaz!')
    }
    else{
      axios.post('http://localhost:8080/api/content/createPost',
      {
        username:localStorage.getItem('username'),
        title,
        content
      }
      )
      .then(function(response){
        console.log(response);
        setTitle('')
        setContent('')
        getPosts()
      })
      .catch(function(error){
        console.log(error)
      })
    }
    
  }
  return (
    <div className='h-page'>
      <div className='l-side'>
      <div className='l-side-content'>
      <img alt='pp' src={pp} style={{borderRadius:'30px', width:'70px', height:'70px'}}></img>
      <a href='/forum' style={{textDecoration:'none', fontSize:'2rem',color:'blue'}} className='mt-1'>{localStorage.getItem('username')}</a>
      <p>Eskişehir Teknik Üniversitesi eğitim kurumunda öğrenci</p>
      <img className='mt-1' alt='line' src={line} style={{width:'95%',height:'12px'}}/>
      <div className='l-side-2 mt-1'>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <p>bağlantı</p>
      <a href='/forum'style={{color:'blue', textDecoration:'none'}}>13</a>
      </div>
      
      <h6 className='mt-1 ml-1'>İletişim ağınızı büyütün</h6>
      {/* <p>------------------------------</p>
      <p>Özel araç ve içgörülere ulaşın</p>
      <a href='/forum'>Premiumu ücretsiz deneyin</a> */}

      </div>
      </div>
      
     
      </div>
          
          
            <div className='center'>
              <div className=''>
                <div className='addP'>
                  <div className='post-top'>
                  <img alt='pp' src={pp} style={{borderRadius:'18px', width:'38px', height:'45px'}}></img>
                  <input placeholder='Başlık gir' className='post-title' type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
                  </div>
                  
                  <textarea 
                  value={content} 
                  className='post-inp' 
                  placeholder='Gönderi Başlat'
                  onChange={(e)=>{
                    setContent(e.target.value)
                  }} 
                  />
                  <button style={{width:'30%', marginLeft:'70%'}} className='btn' onClick={()=>{
                    handleAddPost()
                  }}>Paylaş</button>
                </div>
                




                <div className='posts'>
                  
            
                  {
                    posts.map((post)=>(
                      <div className='post' key={post._id}>
                    <div className='post-bilgi'>
                      <div className='post-bilgi-sol'>
                      <img style={{width:'55px',borderRadius:'40px'}} src={pp}  alt="" />
                
                      </div>
                      <div className='post-bilgi-orta'>
                      <h5>{post.username}</h5>
                      <p>Title: {post.title}</p>
                      <p>{post.date.slice(0,10)}</p>
                      </div>
                      
                      <div className='post-bilgi-sag'>
                      <img alt='dots' src={dots}></img>
                      </div>
                    
                    </div>

                    <div className='post-icerik'>
                      <p>{post.content}</p>
                    <img onClick={()=>{
                      navigate(post._id)
                    }} style={{width:'100%', paddingTop:'5px'}} alt='örnek foto' src='https://picsum.photos/400/400?random=1' />  
                    </div>
                    
                    <div className='user-int'>
                    <li>
                      <ul><img src={like} alt='like'></img> Beğen</ul>
                      <ul><img src={comment} alt='comment'></img> Yorum Yap</ul>
                      <ul><img src={share} alt='share'></img> Paylaş</ul>
                    </li>
                    </div>
                                
                  </div>
                    ))
                  }
            
                  
                
                </div>
              </div>
           
            </div>
      <div className='r-side'>

                  <div className="r-side-content mt-1">
                    <h4 className='gray'>Akışınıza ekleyin</h4>
                    <div className='öneri mt-1'>
                    <img style={{width:'50px',height:'50px', borderRadius:'25px', marginRight:'10px'}} src={pp}  alt="" />
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <h5>Vibes</h5>
                    <p style={{fontSize:'0.8rem'}}>Şirket | İnternet</p>
                    <button className='btn-btn2 mt-1'><img alt='plus'src={plus} style={{width:'15px', height:'12px'}}></img> Takip et</button>
                    </div>
                    
                    </div>
                    <div className='öneri mt-2'>
                    <img style={{width:'50px',height:'50px', borderRadius:'25px', marginRight:'10px'}} src={logo}  alt="" />
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <h5>NeoAnka</h5>
                    <p style={{fontSize:'0.8rem'}}>Hiring for MERN Stack Developer</p>
                    <button className='btn-btn2 mt-1'><img alt='plus'src={plus} style={{width:'15px', height:'12px'}}></img> Takip et</button>
                    </div>
                    
                    </div>
                    <div className='öneri mt-2'>
                    <img style={{width:'50px', height:'50px',borderRadius:'25px', marginRight:'10px'}} src={estü}  alt="" />
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <h5>ESTU</h5>
                    <p style={{fontSize:'0.8rem'}}>Meslek Eğitimi ve Eğitmenlik</p>
                    <button className='btn-btn2 mt-1'><img alt='plus'src={plus} style={{width:'15px', height:'12px'}}></img> Takip et</button>
                    </div>
                    
                    </div>
                    <div className='deneme mt-2' style={{display:'flex'}}>
                    <p style={{marginRight:'0.3em'}}>Tüm tavsiyeleri görüntüle</p> 
                    <img alt='arrow'src={arrow} style={{width:'7%'}}></img>
                    
                    </div>
          
                    
                  </div>
      </div>
    </div>
  )
}

export default Homepage