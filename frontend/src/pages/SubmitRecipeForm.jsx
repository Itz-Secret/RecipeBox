import { Container, VStack, Heading, Box, Input, Textarea, Button, Flex } from "@chakra-ui/react";
import { useProductStore } from '../store/product';
import { Toaster, toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import IconVeg from "@/svg/IconVeg";
import IconNonVeg from "@/svg/IconNonVeg";

import {
    NativeSelectField,
    NativeSelectRoot,
} from "@/components/ui/native-select";

export default function SubmitRecipe() {
    const [recipe, setRecipe] = useState({
        title: "",
        ingredients: "",
        instructions: [],
        description:"",
        prepTime: "",
        image: "",
        non_veg: false,
        mealtype: "",
        cuisine: "",
    });

    const { addRecipe } = useProductStore();

    async function handleAddRecipe() {
        console.log(recipe);
        const { success, message } = await addRecipe(recipe);
        if (!success) {
            toaster.error({
                title: "Error",
                description: message,
                status: "error",
                action: {
                    label: "close",
                    onClick: () => console.log("close"),
                },
            });
        } else {
            toaster.success({
                title: "Success",
                description: message,
                status: "success",
                action: {
                    label: "close",
                    onClick: () => console.log("close"),
                },
            });
        }

        setRecipe({
            title: "",
            ingredients: "",
            instructions: [],
            description:"",
            prepTime: "",
            image: "",
            non_veg: false,
            mealtype: "",
            cuisine: "",
        })
    }

    // Step-by-Step Instructions Management
    const addStep = () => {
        setRecipe(prev => ({ ...prev, instructions: [...prev.instructions, ""] }));
    };

    const updateStep = (index, value) => {
        const updatedSteps = [...recipe.instructions];
        updatedSteps[index] = value;
        setRecipe(prev => ({ ...prev, instructions: updatedSteps }));
    };

    const removeStep = (index) => {
        const updatedSteps = recipe.instructions.filter((_, i) => i !== index);
        setRecipe(prev => ({ ...prev, instructions: updatedSteps }));
    };

    return (
        <Flex flexDir={'column'} h={'100vh'} pt={5} alignItems={'center'} justifyContent="center">
            <Container maxW={{base:'100%',lg:'70%'}}>
                    <Heading as={'h1'} mt={5} size={'2xl'} textAlign={'center'} mb={8}>Add Recipe</Heading>

                <Box w={"full"} p={6} rounded={"lg"} shadow={"md"}>
                    <VStack spacing={4}>
                        <Flex flexDir="row" justifyContent="start" gap={2} w="full">
                            {recipe.non_veg?<IconNonVeg/>:<IconVeg />}
                            <Switch checked={recipe.non_veg} onCheckedChange={() => setRecipe(prev => ({ ...prev, non_veg: !prev.non_veg }))} />
                        </Flex>

                        <Input
                            placeholder='Title'
                            name='title'
                            value={recipe.title}
                            onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
                        />
                        <Input
                            placeholder='Ingredients'
                            name='ingredients'
                            value={recipe.ingredients}
                            onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
                        />

                        <Input
                            placeholder='Description'
                            name='description'
                            value={recipe.description}
                            onChange={(e) => setRecipe({ ...recipe, description: e.target.value })}
                        />

                        <Flex flexWrap="wrap" gap="10px" w="full">
                            {/* Meal Type */}
                            <NativeSelectRoot style={{ flex: "1", minWidth: "150px" }} value={recipe.mealtype} onChange={(e) => setRecipe({ ...recipe, mealtype: e.target.value })}>
                                <NativeSelectField placeholder="Meal Type">
                                    <option value="breakfast">Breakfast</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                    <option value="snack">Snack</option>
                                </NativeSelectField>
                            </NativeSelectRoot>

                            {/* Cuisine */}
                            <Input style={{ flex: "1", minWidth: "150px" }}
                                placeholder='Cuisine'
                                name='cuisine'
                                value={recipe.cuisine}
                                onChange={(e) => setRecipe({ ...recipe, cuisine: e.target.value })}
                            />

                            {/* <NativeSelectRoot style={{ flex: "1", minWidth: "150px" }} value={recipe.cuisine} onChange={(e) => setRecipe({ ...recipe, cuisine: e.target.value })}>
                                <NativeSelectField placeholder="Cuisine">
                                    <option value="breakfast">Italian</option>
                                    <option value="lunch">Indian</option>
                                    <option value="dinner">Chinese</option>
                                    <option value="snack">America</option>
                                </NativeSelectField>
                            </NativeSelectRoot> */}
                        </Flex>

                        {/* Step-by-step Instructions */}
                        <Box w="full">
                            <Heading as="h3" size="md" mb={2}>Step-by-Step Instructions</Heading>
                            {recipe.instructions.map((step, index) => (
                                <Flex key={index} align="center" gap={2} mb={2}>
                                    <span className="font-semibold">Step {index + 1}:</span>
                                    <Input
                                        flex="1"
                                        placeholder={`Enter step ${index + 1}...`}
                                        value={step}
                                        onChange={(e) => updateStep(index, e.target.value)}
                                    />
                                    <Button colorScheme="red" size="sm" onClick={() => removeStep(index)}>✕</Button>
                                </Flex>
                            ))}
                            <Button colorScheme="green" mt={2} onClick={addStep}>+ Add Step</Button>
                        </Box>

                        <Input
                            type="number"
                            placeholder="Prep Time"
                            name="prepTime"
                            value={recipe.prepTime}
                            onChange={(e) => setRecipe({ ...recipe, prepTime: parseInt(e.target.value) || 0 })}
                        />

                        <Input
                            placeholder='Image URL'
                            name='image'
                            value={recipe.image}
                            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
                        />

                        <Button colorScheme='blue' onClick={handleAddRecipe} w='full'>
                            Add Recipe
                        </Button>
                    </VStack>
                </Box>
            </Container>
        </Flex>
    );
}
