const mongoose=require('mongoose')
const {Schema}=mongoose;

const userSchema=new Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        unique:true,
        required:true,
    },
    date: { type: Date, default: Date.now },
})

const User=mongoose.model('User', userSchema);

module.exports=User;