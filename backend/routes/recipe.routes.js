import express from "express";
import { routeProtect } from "../middlewire/routeProtect.js";
import { allRecipes,allRecipesOverview,createRecipe,getRecipe} from "../controllers/recipe.controller.js";

const router = express.Router()

router.get('/allrecipe', routeProtect,allRecipes)
router.get('/recipeOverview',allRecipesOverview)
router.get("/:title",routeProtect,getRecipe)

router.post('/create',routeProtect,createRecipe)
export default router;