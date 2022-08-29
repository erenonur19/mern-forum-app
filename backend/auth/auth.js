const User=require('../model/User')
exports.register=async(req,res,next)=>{
  const {username,password}=req.body

        try{
            await User.create({
                username,
                password
            })
            .then(user=>
                res.status(200).json({
                    message:"User succesfully created",
                    user,
                })
                )
        }
        catch(err){
            res.status(400).json({
                message:"Unknown server error.. Try again later",
                error:err.message,
            })
        }
}

exports.login=async(req,res,next)=>{
    const{username,password}=req.body
    if(!username&&!password){
        return res.status(400).json({
            message:"Username or password not provided"
        })
    }
    try{
        const user=await User.findOne({username,password})
        if(!user){
            res.status(401).json({
                message:"Login not successfull",
                error:"User not found"
            })
        }
        else{
            res.status(200).json({
                message:"Login successful",
                user,
            })
        }
    } catch(err){
        res.status(400).json({
            message:"Unknown error occured.. Please try again later.",
            error:err.message
        })
    }
}