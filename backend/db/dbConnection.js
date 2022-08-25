const mongoose = require('mongoose'); 
const connectDB=async()=>{
    mongoose.connect('mongodb://localhost/MERNForum',{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
        console.log("Connected to database succesfully..");
    }).catch(err=>console.log("DB connection error"+err));       
}
module.exports=connectDB