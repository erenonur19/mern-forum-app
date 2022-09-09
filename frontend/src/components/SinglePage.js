import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import pp from '../img/pp.png'
import dots from '../img/3dots.svg'
import like from '../img/like.png'
import commentimg from '../img/comment.png'
import share from '../img/share.png'
import send from '../img/send.png'

const SinglePage = () => {
    const { id } =useParams()
    const [post,setPost]=useState({})
    const [comment, setComment]=useState('')
    const [comments,setComments]=useState([])
    const getPost=()=>{
      axios.get(`http://localhost:8080/api/content/${id}`)
      .then((res)=>{
        setPost(res.data.post[0])
        setComments(res.data.post[0].comments)
      })
      .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getPost()
    });
  return (
    <div className='sp'>
    <div className='sp-1'></div>
    <div className='sp-2'>
    <div className='post'>
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
                      <ul><img src={commentimg} alt='comment'></img> Yorum Yap</ul>
                      <ul><img src={share} alt='share'></img> Paylaş</ul>
                    </li>
                    </div>
                    <div className='comments'>
                     {
                      comments.map((comment)=>{
                        return(
                        <div className='comment'>
                        <img alt='pp' src={pp} style={{borderRadius:'28px', width:'45px', height:'45px'}}></img>
                        <div className='comment-2 ml-1'>
                        <h6>{comment.username}</h6>
                        <p>{comment.comment}</p>
                        </div>
                        <br></br>
                        </div>
                        ) 
                      })
                     } 
                     <div className='comment' style={{marginTop:'2vh'}}>
                        <img alt='pp' src={pp} style={{borderRadius:'28px', width:'45px', height:'45px'}}></img>
                        <div className='comment-3 ml-1'>
                        <h6>{comment.username}</h6>
                        <input 
                        style={{
                          width:'28vw'
                        }}  
                        placeholder='Yorum ekle'
                        value={comment}
                        onChange={(e)=>{
                            setComment(e.target.value)
                        }} 
                        ></input>
                        <img onClick={()=>{
                            if(comment.length<3){
                              alert('Yorum 3 karakterden kısa olamaz.')
                            }
                            else{
                              axios.post(`http://localhost:8080/api/content/${id}`,{
                                username:localStorage.getItem('username'),
                                comment
                              }).then((res)=>{
                                console.log(res)
                                setComment('')
                                getPost()
                              }).catch((err)=>{
                                console.log(err);
                              })
                            }
                        }} className='ml-2' style={{width:'28px', height:'28px', marginTop:'0.9vh'}} alt='send' src={send}></img>
                        </div>
                        <br></br>
                        </div>
                    
                  
                    
                    </div>
                                
    </div>
    </div>
    <div className='sp-3'></div>
    </div>
  )
}

export default SinglePage