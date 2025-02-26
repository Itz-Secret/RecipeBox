import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IngredientCheckBox from "@/components/IngredientCheckBox";
import Instructions from "@/components/Instructions";
import { Container } from "@chakra-ui/react";

export default function RecipeBook() {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://recipebox-7z2c.onrender.com/api/recipes/${id}`);
                setRecipe(response.data.data);
                console.log(response.data.data);
                                
            } catch (error) {
                console.error("Error fetching recipe:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <Container>
        {recipe ?<div className="container">
           <img src={recipe.image} alt="" />
           <div className="recipe-headline">
                <h1>{recipe.title}</h1>
                <div className="recipe-duration">
                    <h6>Prep: {recipe.prepTime} min</h6>
                    <h6>Cook: {2*recipe.prepTime} min</h6>
                </div>
            </div>
            <div className="row">
                <div className="directions">
                    <h2>Instructions</h2>
                        {recipe.instructions.map((steps,index)=><Instructions key={index} number={index+1} steps={steps}/>)}
                        
                        {/* <p>{recipe.instructions}</p> */}
                </div>

                <div className="ingredients">
                    <h2>Ingredients</h2>
                    {recipe.ingredients.split(',').map((ingredient,index)=>(
                        <IngredientCheckBox key={index} ingredient={ingredient}/>))}
                 </div>

            </div>

        </div>: (
            <p>Loading recipe...</p>
        )}</Container>
    );
}
