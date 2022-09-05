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