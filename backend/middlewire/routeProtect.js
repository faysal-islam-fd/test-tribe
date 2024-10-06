import jwt from 'jsonwebtoken'
import dotenv from 'dotenv/config'
import { User } from '../models/user.model.js';

export async function routeProtect(req, res, next) {
    const  token = req.cookies.token;

    if(!token){
      return res.status(401).json({message:"Unauthorized access", success:false})
    }
    try{
        const {id} = jwt.verify(token,process.env.JWT_SECRET) 
        const user = await User.findById(id).select('-password')
        if(!user){
            return res.status(404).json({message:"User not found", success:false})
        }
        req.user = user;
        next();
    }
    catch(error){
        console.log("protected route : ",error.message);
    }
}