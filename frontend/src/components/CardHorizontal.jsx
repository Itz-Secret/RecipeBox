import { Badge, Box, Button, Card, VStack, Image,Flex, Container } from "@chakra-ui/react"
import IconNonVeg from "@/svg/IconNonVeg"
import IconVeg from "@/svg/IconVeg"


export const CardHorizontal = ({recipe}) => (
  <Card.Root flexDirection="row" h={'100%'} justifyContent={'space-between'} overflow="hidden" maxW="xl" width={'100%'}>
    <Image
      objectFit="cover"
      maxW={{base:'150px',sm:'200px',md:'150px',xl:'200px'}}
      src={recipe.image}
      alt="Caffe Latte"
    />
    <Box>
      <Card.Body>
        <Flex justifyContent={'flex-end'}>{recipe.non_veg?<IconNonVeg/>:<IconVeg />}</Flex>
        <Card.Title mb="2">{recipe.title}</Card.Title>
        <VStack mt="4">
            <p>PrepTime:{recipe.prepTime}min </p>
            <p>CookTime:{2*recipe.prepTime}min </p>
        </VStack>
      </Card.Body>
  
    </Box>
  </Card.Root>
)
