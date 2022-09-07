import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import pp from '../img/pp.png'
import dots from '../img/3dots.svg'
import like from '../img/like.png'
import comment from '../img/comment.png'
import share from '../img/share.png'

const SinglePage = () => {
    const { id } =useParams()
    const [post,setPost]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/content/${id}`)
        .then((res)=>setPost(res.data.post[0]))
        .catch(err=>console.log(err))
    });
  return (
    <div className='sp'>
    <div className='sp-1'></div>
    <div className='sp-2'>
    <div className='post' key={post._id}>
                    <div className='post-bilgi'>
                      <div className='post-bilgi-sol'>
                      <img style={{width:'55px',borderRadius:'40px'}} src={pp}  alt="" />
                
                      </div>
                      <div className='post-bilgi-orta'>
                      <h5>{post.username}</h5>
                      <p>Title: {post.title}</p>
                      {/* { <p>{post.date.slice(0,10)}</p> } */}
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
    </div>
    <div className='sp-3'></div>
    </div>
  )
}

export default SinglePage