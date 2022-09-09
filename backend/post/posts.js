const Post=require('../model/Post')
exports.getPosts=async(req,res,next)=>{
 const postlar = await Post.find({})
 res.send(postlar)
}
exports.createPost=async(req,res,next)=>{
    const {username,title,content}=req.body

    await Post.create({
        username,
        title,
        content,
    }).then((post)=>
    res.status(200).json({
        message:"Post başarıyla oluşturuldu",
        post
    })
    )
    .catch((err)=>{
        res.status(400).json({
            message:"Post oluşturulamadı..Tekrar Deneyin",
            error:err.message,
        })
    })
}
exports.helloWorld=async(req,res,next)=>{
    res.send('Hello World')
}
exports.getPost=async(req,res,next)=>{

    await Post.find({_id:req.params.id})
    .then((post)=> {
        return res.status(200).json({
            message:"Post başarıyla geldi",
            post
        })
}).catch((err)=>{
    return res.status(400).json({
        message:'Post bulunamadı',
        error:err.message,
    })
})
}

exports.leaveComment=async(req,res,next)=>{
    const{username, comment}=req.body
    await Post.updateOne({_id:req.params.id},
    {$push: {
        comments:[{username,comment}]
    }}).then((post)=>{
       return res.status(200).json({
            message:'Yorum başarıyla eklendi',
            post
        })
    }).catch((err)=>{
        return res.status(400).json({
            message:"Yorum Ekleme başarısız",
            error:err.message
        })
    })
}

exports.getUsersPost=async(req,res,next)=>{
    const {username}=req.body
    await Post.find({username:username})
    .then((postlar)=>{
        return res.status(200).json({
            message:"Postlar başarıyla geldi",
            postlar,
        })
    }).catch((err)=>{
        return res.status(400).json({
            message:"Post bulunamadı",
            error:err.message
        })
    })
     
}