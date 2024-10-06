import mongoose from "mongoose";


const RecipeSCheama = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    ingredients:{
        type: [String],
        required: true,
    },
    instructions:{
        type: [String],
        required: true,
    },
    prep_time:{
        type: String,
        required: true,
    },
    cook_time:{
        type: String,
        required: true,
    }
},
{ timestamps : true }
)

const Recipie = mongoose.model("Recipe", RecipeSCheama);
export default Recipie; 

