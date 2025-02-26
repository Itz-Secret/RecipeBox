import { Container, VStack, Heading, Box, Input, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/product";
import Card from "./Card";


export default function FridgeContent() {
    const [ingredients,setIngredients]=useState(
        {
            ingredient1:'',
            ingredient2:'',
            ingredient3:'',
            ingredient4:'',
            ingredient5:'',}
    )
    const { recipes, getRecipes } = useProductStore(); // Fetch recipes
    useEffect(()=>{
         getRecipes()
         console.log(recipes)         

    },[])

    var ing1=[]
    var ing2=[]
    var ing3=[]
    var ing4=[]
    var ing5=[]
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    function Search() {
        ing1=(recipes.filter((recipe)=>(recipe.ingredients.toLowerCase().includes(ingredients.ingredient1))))
        ing2=(recipes.filter((recipe)=>(recipe.ingredients.toLowerCase().includes(ingredients.ingredient2))))
        ing3=(recipes.filter((recipe)=>(recipe.ingredients.toLowerCase().includes(ingredients.ingredient3))))
        ing4=(recipes.filter((recipe)=>(recipe.ingredients.toLowerCase().includes(ingredients.ingredient4))))
        ing5=(recipes.filter((recipe)=>(recipe.ingredients.toLowerCase().includes(ingredients.ingredient5))))
        const arr=[...ing1,...ing2,...ing3,...ing4,...ing5]
        const count = {};
        arr.forEach(item => {
            count[item._id] = (count[item._id] || 0) + 1;
        });
        const filteredCount = Object.keys(count).filter(id=>count[id]>=3)
        console.log(filteredCount);
        setFilteredRecipes(recipes.filter((recipe) => filteredCount.includes(recipe._id)));
        console.log(filteredRecipes);
        
        
    }



    
    return (
        <Container>
        <Flex flexDir={'column'} justifyContent="center">
            <Container maxW={{base:'100%',lg:'70%'}}>
                    <Heading as={'h1'} mt={5} size={'2xl'} textAlign={'center'} mb={8}>What's in Your Fridge?</Heading>

                <Box w={"full"} p={6} rounded={"lg"} shadow={"md"}>
                    <VStack spacing={4}>

                        <Input
                            placeholder='Ingredient 1'
                            name='ingredient1'
                            value={ingredients.ingredient1}
                            onChange={(prev)=>setIngredients({...ingredients,ingredient1:prev.target.value})}
                        />

                        <Input
                            placeholder='Ingredient 2'
                            name='ingredient2'
                            value={ingredients.ingredient2}
                            onChange={(prev)=>setIngredients({...ingredients,ingredient2:prev.target.value})}
                        />

                        <Input
                            placeholder='Ingredient 3'
                            name='ingredient3'
                            value={ingredients.ingredient3}
                            onChange={(prev)=>setIngredients({...ingredients,ingredient3:prev.target.value})}
                        />

                        <Input
                            placeholder='Ingredient 4'
                            name='ingredient4'
                            value={ingredients.ingredient4}
                            onChange={(prev)=>setIngredients({...ingredients,ingredient4:prev.target.value})}
                        />

                        <Input
                            placeholder='Ingredient 5'
                            name='ingredient5'
                            value={ingredients.ingredient5}
                            onChange={(prev)=>setIngredients({...ingredients,ingredient5:prev.target.value})}
                        />

                        <Button onClick={Search} colorScheme='blue' w='full'>
                            Find a Recipe
                        </Button>
                    </VStack>
                </Box>
            </Container>
        </Flex>

        <SimpleGrid my={3} mx={'auto'} columns={{ base: 1, md: 2, lg: 3 }} w="full" gap={"20px"}>
                    {(filteredRecipes.map((recipe)=><Card key={recipe._id} recipe={recipe}/>))}
        </SimpleGrid>
    
        </Container>
    );
    
}