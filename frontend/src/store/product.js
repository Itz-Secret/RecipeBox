import {create} from 'zustand'
import axios from 'axios'

export const useProductStore=create((set)=>({
    recipes:[],
    setRecipe:(recipes) => set({ recipes }),
    addRecipe:async (recipe)=>{
            
            // console.log(recipe);
            try {
                const {data} = await axios.post('https://recipebox-7z2c.onrender.com/api/recipes/',recipe, {
                    headers: {
                        "Content-Type": "application/json" 
                    }
                })
                console.log(data.data);
                set((state)=>({recipes:[data.data,...state.recipes]}))
                return {success:true,message:'Product Created Successfully'}
            } catch (error) {
                console.log(error.message);
                console.error('Error adding recipe:', error.message);
                return {success:false,message:'Please fill in all fields'}                
            }
    },
    getRecipes: async () => {
        try {
            const { data } = await axios.get('https://recipebox-7z2c.onrender.com/api/recipes/');
            set({ recipes: data.data });
        } catch (error) {
            console.error("Error fetching recipes:", error.message);
        }
    },
}))


