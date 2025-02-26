import { Button, Card, Image, Text,Flex,Badge,Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import IconNonVeg from "@/svg/IconNonVeg"
import IconVeg from "@/svg/IconVeg"


export default function card({recipe}){
    return(
            <Card.Root maxW="sm" overflow="hidden">
                <Image
                    src={recipe.image}
                    alt="Image not found"
                />
                <Card.Body gap="2">
                    <Card.Title> 
                        <Flex justifyContent={'space-between'}>
                        {recipe.title}
                        {recipe.non_veg?<IconNonVeg/>:<IconVeg />}
                        </Flex>   
                            </Card.Title>
                    {/* Badges */}
                    <Stack direction="row">
                        
                        
                        <Badge variant="outline">{recipe.cuisine}</Badge>
                        <Badge variant="solid">{recipe.mealtype}</Badge>
                        {/* <Badge variant="subtle">Subtle</Badge>
                        <Badge variant="surface">Surface</Badge> */}
                    </Stack>
                    <Card.Description>
                        {recipe.description}
                    </Card.Description>
                </Card.Body>
                <Card.Footer gap="2">
                    <Link to={'/recipes/'+recipe._id}>
                    <Button variant="solid">Details</Button>
                    </Link>
                </Card.Footer>
                </Card.Root>
    )
}