import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js';

export const requireSignIn = (req,res,next)=>{

   try {
    const decode = JWT.verify(
        req.headers.authorization,
        process.env.SECRET_KEY
    );
    req.user = decode;  
    next();
    
   } catch (error) {

    console.log("sign in required");
    res.status(200).send({
        message:"protected route"
    })
    
    
   }

}
export const isAdmin =(req,res,next)=>{
    try {

const user = userModel.findById(req.user._id)
if(user.role !== 1){
    return res.status(200).send({
        message:"unauthorized",
        success:false
    })

}
else{
    next();     
}

        
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message:'Admin only'
        })
        
        
    }
}