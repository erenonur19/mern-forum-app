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
            res.status(401).json({
                message:"Unknown server error.. Try again later",
                error:err.message,
            })
        }

    
    
}