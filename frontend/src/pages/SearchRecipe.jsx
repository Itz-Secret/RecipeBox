import Card from "@/components/Card"
import { useProductStore } from "@/store/product"
import { SimpleGrid, Box, Container } from "@chakra-ui/react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { EmptyPage } from "./EmptyPage"

export default function SearchRecipe(){
    var {text}=useParams()
    var text=text.toLowerCase()
    const {recipes,getRecipes}=useProductStore()
    useEffect(()=>{
        getRecipes()
    },[])
    function filtering(){
        return (recipes.filter((recipe)=>(recipe.title.toLowerCase().includes(text)||recipe.mealtype.toLowerCase().includes(text)||recipe.cuisine.toLowerCase().includes(text)||recipe.ingredients.toLowerCase().includes(text))))
    }
    const fetchedRecipes=text?filtering():[]    
    return (
        <Container mt={'80px'}>
        {fetchedRecipes.length!=0?(<SimpleGrid placeItems={'center'} my={3} columns={{ base: 1, md: 2, lg: 3 }} w="full" gap="40px">
                    {(fetchedRecipes.map((recipe)=><Card key={recipe._id} recipe={recipe}/>))}
            </SimpleGrid>):<EmptyPage/>}
    </Container>
    )
}