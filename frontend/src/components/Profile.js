import React from 'react'
import pp from '../img/pp.png'
import line from '../img/line.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import like from '../img/like.png'
import comment from '../img/comment.png'
import share from '../img/share.png'
import dots from '../img/3dots.svg'
const Profile = () => {
  const navigate=useNavigate()
const [posts,setPosts]=useState([])
  useEffect(()=>{
    axios.post(`http://localhost:8080/api/content/getUsersPost`, {
      username: localStorage.getItem('username')
    })
    .then(function(response){
      setPosts(response.data.postlar)
    })
    .catch(function(error){
      console.log(error);
    })
  })
  return (
    <div className='profile'>
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
        <div className='r-posts'>
        {
          posts.map((post)=>{
            return(
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
                      navigate(`/forum/${post._id}`)
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
            )
          })
        }
        </div>
        <div className='r-pad'>

        </div>

    </div>
  
  )
}

export default Profile