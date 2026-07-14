
async function createTask(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:"server error",success:false})
    }
}

async function getAllTask(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:"server error",success:false})
    }
}

async function  getTaskByUser(req,res){
    try {
        
    } catch (error) {
       res.status(500).send({msg:"server error",success:false}) 
    }
}

async function updateTask(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:"server error",success:false})
  
    }
}

async function deleteTask(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:"server error",success:false})
    }
}


module.exports={
    createTask,
    getAllTask,
    getTaskByUser,
    updateTask,
    deleteTask
}