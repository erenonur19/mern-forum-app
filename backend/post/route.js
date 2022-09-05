const express=require('express')
const router=express.Router()
const { getPosts } = require('./posts')
const { helloWorld } = require('./posts')
const { createPost } = require('./posts')
router.route('/getPosts').get(getPosts)
router.route('/createPost').post(createPost)
router.route('/').post(helloWorld)
module.exports=router