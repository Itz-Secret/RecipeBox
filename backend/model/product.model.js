import mongoose from "mongoose";

const RecipeSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,'please enter']
    },
    ingredients:{
        type:String,
        required:[true,'please enter']
    },description:{
        type:String,
        required:[true,'please enter']
    },
    instructions:{
        type:[String],
        required:[true,'please enter']
    },
    prepTime:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    non_veg:{
        type:Boolean,
        required:true
    },
    mealtype:{
        type:String,
        required:true
    },
    cuisine:{
        type:String,
        required:true
    }
} , {timestamps:true,})

 const Recipe=mongoose.model('Recipe',RecipeSchema)

 export default Recipe