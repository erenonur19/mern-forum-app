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
        type:String,
        "default": ''
    },
    comments:{
        type:Array,
        "default":[]
    },
    date: { type: Date, default: Date.now 
    },
})

const Post=mongoose.model('Post',postSchema)

module.exports=Post;