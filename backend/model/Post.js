const mongoose=require('mongoose')
const {Schema}=mongoose


const postSchema=new Schema({
    username:{
        type:String,
        required:true,     
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true,
    },
    image:{
        type:String
    },
    comments:{
        type:Array,
        "default":[]
    }
})

const Post=mongoose.model('Post',postSchema)

module.exports=Post;