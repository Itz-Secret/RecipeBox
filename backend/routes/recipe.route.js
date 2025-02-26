import express from 'express'
import Recipe from '../model/product.model.js'


const router=express.Router()

router.get('/',async (req,res) => {
    try {
        const recipe= await Recipe.find({})
        res.status(200).json({success:true,data:recipe})

    } catch (error) {
        res.status(500).json({success:false,message:'server error'})
    }
})

router.get('/:id',async (req,res) => {
    try {
        const {id}=req.params
        const recipe =await Recipe.findById(id)
        res.status(200).json({success:true,data:recipe})


    } catch (error) {
        res.status(500).json({success:false,message:'server error'})

    }
})

router.post('/',async (req,res) => {
    try {
        const recipe=await Recipe.create(req.body)
        res.status(200).json({success:true,data:recipe})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
})



router.delete('/:id',async (req,res) => {
    try {
        const {id}=req.params
        await Recipe.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'Recipe Deleted'})
    } catch (error) {
        console.log(error.message);
        
        res.status(500).json({success:false,message:'server error'})
    }
    
})

export default router