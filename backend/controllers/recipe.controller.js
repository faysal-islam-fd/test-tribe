import Recipie from "../models/recipe.model.js"
import { v2 as cloudinary } from 'cloudinary';

export const allRecipes = async(req, res) => {
    try{
        const recipes = await Recipie.find().sort({createdAt:-1})
        if(recipes){
            return res.status(200).json({success:true,recipes})
        }
        res.status(404).json({message:"Recipe Not found!",success:false})
    }
    catch(error){
        res.status(500).json({success:false,message:error.message})
    }
}
export const allRecipesOverview = async(req, res) => {
    const recipeQuery = req.query.recipe; 
    const limit = Number(recipeQuery) || 6;
    try{
        let recipes =await Recipie.find().select('title image category description cook_time').sort({createdAt:-1}).limit(limit)
        if(recipes){
          return res.status(200).json({success:true,recipes})
        }
        res.status(404).json({message:"Recipe Not found!",success:false})
    }
    catch(error){
        res.status(500).json({success:false,message:error.message})
    }
}
export const getRecipe = async(req, res) => {
    const title = req.params.title;
    try{
        const recipe = await Recipie.findOne({title})
        if(recipe){
            return res.status(200).json({success:true,recipe})
        }
        res.status(404).json({message:"Recipe Not found!",success:false})
    }
    catch(error){
        res.status(500).json({success:false,message:error.message})
    }
}

export const createRecipe = async(req, res) => {
    const { title,ingredients, instructions, category, description, prep_time, cook_time } = req.body;
    let {image} = req.body;
    if(!title || !image || !ingredients || !instructions || !category || !description || !cook_time || !prep_time){
        return res.status(400).json({message:"All fields are required.",success:false})
    }
    try{
        const res = await cloudinary.uploader.upload(image)
        image = res.secure_url;
        const recipe = {...req.body,image}
        console.log(recipe);
                
        const newRecipe = new Recipie(recipe)
        await newRecipe.save()
        res.status(201).json({success:true,recipe:newRecipe})
    }
    catch(error){
        res.status(500).json({success:false,message:error.message})
    }
}