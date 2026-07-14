const express = require('express')

const router =express.Router();

const {registerUser,loginUser,getInfoUser,updateProfile} = require('../controllers/usercontroller')

router.post('/register',registerUser)

router.post('/login',loginUser)

router.get('/getinfo',getInfoUser)

router.put('/update:id',updateProfile)

router.get('/getall',getAlluser)


module.exports = router
