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
const Homepage = () => {

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
      <div className='l-side'></div>
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
                    <img style={{width:'65px'}} src={estü}  alt="" />
               
                    </div>
                    <div className='post-bilgi-orta'>
                    <h5>{post.username}</h5>
                    <p>Title: {post.title}</p>
                    <p>{post.date}</p>
                    </div>
                    
                    <div className='post-bilgi-sag'>
                    <img alt='dots' src={dots}></img>
                    </div>
                  
                  </div>

                  <div className='post-icerik'>
                    <p>{post.content}</p>
                  <img style={{width:'100%', paddingTop:'5px'}} alt='örnek foto' src='https://picsum.photos/400/400?random=1' />  
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
      <div className='r-side'></div>
    </div>
  )
}

export default Homepage