import express from 'express'
import env from 'dotenv'
import DBconnect from './config/db.js'
import recipeRoutes from './routes/recipe.route.js'
import cors from 'cors'

const app=express()
app.use(express.json())
env.config()
app.use(cors())

app.use('/api/recipes',recipeRoutes)



// Reciep delete

app.listen(3000,()=>{
    DBconnect()
    console.log('running on server 3000');
})

// 3lvAuR1dpHyuF7d6