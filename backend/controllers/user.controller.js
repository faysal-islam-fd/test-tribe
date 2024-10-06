import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { fullname,email,password } = req.body;

    if(!fullname){
        return res.status(400).json({message:"Full Name is required.",success:false})
    }password
    if(!email){
        return res.status(400).json({message:"Email is required.", success:false})
    }
    if(!password){
        return res.status(400).json({message:"Password is required.", success:false})
    }
    if(!emailRegex.test(email)){
        return res.status(400).json({message:"Provide a valid email please", success:false})
    }
    if(password.length<6){
        return res.status(400).json({message:"Password must be atleast 6 charrecter", success:false})
   
    }
    const userExists = await User.findOne({email})
    if(userExists){
        return res.status(400).json({message:"User already exists with this email", success:false})
    }
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password,salt) 
        const user =  new User({
            fullname,
            email,
            password:hashedPassword
        }) 
        user.save() 
        res.status(200).json({message:"Account created successfully!",success:true})

    } catch(error){
        return res.status(500).json({message: error?.message || "Internal Server Error", success: false});
    }

}

export const longin = async (req, res) => {
    const  {email,password} = req.body;
    if(!email){
        return res.status(400).json({message:"Email is required.", success:false})
    }
    if(!password){
        return res.status(400).json({message:"Password is required.", success:false})
    }
    try{
        const isUserExist = await User.findOne({email})
        if(!isUserExist){
            return res.status(404).json({message:"User not found!", success:false})
        }
        const isPasswordMatched = bcrypt.compareSync(password, isUserExist.password)
        if(!isPasswordMatched){
            return res.status(400).json({message: "Invalid Password", success: false});
        }
        res.status(200).json({message:"Login successful!",success:true})
    }
    catch(error){
        console.log("error occured while login : ",error.message);
        
    }
}