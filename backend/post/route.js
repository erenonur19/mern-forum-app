const express=require('express')
const router=express.Router()
const { getPosts } = require('./posts')
const { helloWorld } = require('./posts')
const { createPost } = require('./posts')
const { getPost } = require('./posts')
const { leaveComment } = require('./posts')
const { getUsersPost } = require('./posts')
router.route('/getPosts').get(getPosts)
router.route('/createPost').post(createPost)
router.route('/getUsersPost').post(getUsersPost)
router.route('/').post(helloWorld)
router.route('/:id').get(getPost)
router.route('/:id').post(leaveComment)

module.exports=router