import React from 'react'
import '../Homepage.css'
import pp from '../img/pp.png'
import estü from '../img/estü.png'
import dots from '../img/3dots.svg'
import like from '../img/like.png'
import comment from '../img/comment.png'
import share from '../img/share.png'
const Homepage = () => {
  return (
    <div className='h-page'>
      <div className='l-side'></div>
          <div className='center'>
            <div className=''>
              <div className='addP'>
                <div className='post-top'>
                <img alt='pp' src={pp} style={{borderRadius:'18px', width:'38px', height:'45px'}}></img>
                <input placeholder='Başlık gir' className='post-title' type='text'></input>
                </div>
                
                <textarea className='post-inp' placeholder='Gönderi Başlat' />
                <button style={{width:'30%', marginLeft:'70%'}} className='btn'>Paylaş</button>
              </div>
              




              <div className='posts'>
                
              <hr></hr>
                Posts
                <div className='post'>
                  <div className='post-bilgi'>
                    <div className='post-bilgi-sol'>
                    <img style={{width:'65px'}} src={estü}  alt="" />
               
                    </div>
                    <div className='post-bilgi-orta'>
                    <h6>Eskişehir Teknik Üniversitesi</h6>
                    <p>12.452 takipçi</p>
                    <p>02.09.2022</p>
                    </div>
                    
                    <div className='post-bilgi-sag'>
                    <img alt='dots' src={dots}></img>
                    </div>
                  
                  </div>

                  <div className='post-icerik'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, sit consequatur quod laudantium nulla necessitatibus magnam voluptatibus repellendus quasi provident sequi possimus explicabo. Modi omnis quaerat dolores, laudantium et accusantium!</p>
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
                <div className='post'>
                  <div className='post-bilgi'>
                    <div className='post-bilgi-sol'>
                    <img style={{width:'65px'}} src={estü}  alt="" />
               
                    </div>
                    <div className='post-bilgi-orta'>
                    <h6>Eskişehir Teknik Üniversitesi</h6>
                    <p>12.452 takipçi</p>
                    <p>02.09.2022</p>
                    </div>
                    
                    <div className='post-bilgi-sag'>
                    <img alt='dots' src={dots}></img>
                    </div>
                  
                  </div>

                  <div className='post-icerik'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, sit consequatur quod laudantium nulla necessitatibus magnam voluptatibus repellendus quasi provident sequi possimus explicabo. Modi omnis quaerat dolores, laudantium et accusantium!</p>
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
                <div className='post'>
                  <div className='post-bilgi'>
                    <div className='post-bilgi-sol'>
                    <img style={{width:'65px'}} src={estü}  alt="" />
               
                    </div>
                    <div className='post-bilgi-orta'>
                    <h6>Eskişehir Teknik Üniversitesi</h6>
                    <p>12.452 takipçi</p>
                    <p>02.09.2022</p>
                    </div>
                    
                    <div className='post-bilgi-sag'>
                    <img alt='dots' src={dots}></img>
                    </div>
                  
                  </div>

                  <div className='post-icerik'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, sit consequatur quod laudantium nulla necessitatibus magnam voluptatibus repellendus quasi provident sequi possimus explicabo. Modi omnis quaerat dolores, laudantium et accusantium!</p>
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
                <div className='post'>
                  <div className='post-bilgi'>
                    <div className='post-bilgi-sol'>
                    <img style={{width:'65px'}} src={estü}  alt="" />
               
                    </div>
                    <div className='post-bilgi-orta'>
                    <h6>Eskişehir Teknik Üniversitesi</h6>
                    <p>12.452 takipçi</p>
                    <p>02.09.2022</p>
                    </div>
                    
                    <div className='post-bilgi-sag'>
                    <img alt='dots' src={dots}></img>
                    </div>
                  
                  </div>

                  <div className='post-icerik'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, sit consequatur quod laudantium nulla necessitatibus magnam voluptatibus repellendus quasi provident sequi possimus explicabo. Modi omnis quaerat dolores, laudantium et accusantium!</p>
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
            </div>
          </div>
      <div className='r-side'></div>
    </div>
  )
}

export default Homepage