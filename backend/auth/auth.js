const User=require('../model/User')
const bcyrpt=require('bcrypt')
exports.register=async(req,res,next)=>{
  const {username,password}=req.body


  const user=await User.findOne({username})
  if(user){
    res.status(400).json({
        message:"Bu kullanıcı adı kullanılıyor.."
    })
  }
  bcyrpt.hash(password,10).then(async(hash)=>{
    await User.create({
        username,
        password:hash,
    })
    .then((user)=>
    res.status(200).json({
        message:"User succesfully created",
        user,
    })
    )
    .catch((err)=>{
        res.status(400).json({
            message:"User not succesfully created",
            error:err.mesage,
        })
    })
  })
}

exports.login=async(req,res,next)=>{
    const{username,password}=req.body
    if(!username || !password){
        return res.status(400).json({
            message:"Username or password not provided"
        })
    }
    try{
        const user=await User.findOne({username})
        if(!user){
            res.status(401).json({
                message:"Giriş başarısız",
                error:"Kullanıcı bulunamadı"
            })
        }
        else{
          bcyrpt.compare(password,user.password).then(function(result){
            result ? res.status(200).json({
                message:"Giriş Başarılı",
                user
            }) 
            : res.status(400).json({
                message:"Hatalı Şifre.."
            })

          })
        }
    } catch(err){
        res.status(400).json({
            message:"Bir hata oluştu.. Lütfen tekrar deneyin",
            error:err.message
        })
    }
}