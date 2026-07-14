
async function registerUser(req,res){
    try {
        
    } catch (error) {
       res.status(500).send({msg:"server error",success:false}) 
    }
}

async function loginUser(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:"server error",success:false})
    }
}

async function getInfoUser(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:"server error",success:false})
    }
}

async function updateProfile(req,res){
    try {
        
    } catch (error) {
       res.status(500).send({msg:"server error",success:false}) 
    }
}


module.exports={
    registerUser,
    loginUser,
    getInfoUser,
    updateProfile
}