const express = require('express')

const router = express.Router()

const {createTask,getAllTask,getTaskByUser,updateTask,deleteTask, getAllTask} = require('../controllers/taskcontroller')

router.post ('/create',createTask)

router.get('/gettask:id',getTaskByUser)

router.get('/getalltask',getAllTask)

router.put('/update:id',updateTask)

router.delete('/delete:id',deleteTask)

module.exports = router ; 

