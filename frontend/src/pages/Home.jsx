import { Container, Text,SimpleGrid, Flex, Box, HStack,Image} from "@chakra-ui/react";
import { CardHorizontal } from "@/components/CardHorizontal";
import {useProductStore} from '../store/product.js'
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GiCookingPot } from "react-icons/gi";


export default function Home(){
    const { recipes,getRecipes } = useProductStore();
    useEffect(()=>{
        getRecipes()
        console.log(recipes);
    },[])
    return(
        <Flex flexDirection={'column'} height={'90vh'} justifyContent={'space-between'} m={5}>
            <div>
            <Text fontSize={'36px'} textAlign={'center'} pb={10} fontWeight={'bold'} >Welcome to Our Recipe Community</Text>

            <SimpleGrid columns={{ base: 1,md:2,lg:2,xl:3}} w={'full'} gap="40px">
                {recipes.slice(-6).map((recipe)=>( <CardHorizontal key={recipe._id} recipe={recipe} />))}
            </SimpleGrid>


            <Flex mt={10} flexWrap={'wrap'} alignItems={'center'} gap={5} >
                <Image maxW={{ base:'base',sm:'500px',md:'lg','2xl':'xl'}} src="https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=2048x2048&w=is&k=20&c=3l6KyUCUyNO2w0dJPmN4f2C-YPICegtONfM_7yiB7jg=" />
                <Box maxW={{base:'base',sm:'600px',md:'900px',lg:'1000px',xl:'700px','2xl':'2xl'}}>
                <Text fontSize={'36px'}>About Recipe Sharing Web Platform</Text>
                <Text>Welcome to Recipe Sharing Web Platform, your go-to space for discovering and sharing delicious recipes effortlessly! Whether you're a home cook, a seasoned chef, or someone just looking for new meal ideas, our platform makes it easy to explore and contribute recipes.</Text>
                </Box>
            </Flex>

            <Flex mt={10}  flexWrap={{ base:'wrap-reverse',md:'wrap-reverse',sm:'wrap-reverse'}} alignItems={'center'} gap={5} >
                <Box maxW={{base:'base',sm:'600px',md:'900px',lg:'1000px',xl:'700px','2xl':'2xl'}}>
                <Text fontSize={'36px'}>Why This Platform?</Text>
                <Text>We created this platform to make recipe sharing effortless and enjoyable. With a clean and user-friendly interface, anyone can browse and contribute recipes without dealing with clutter or complex features. Unlike other platforms, there’s no need for sign-ups or accounts, making it quick and easy to access recipes anytime. Whether you're a beginner or an expert, you can find inspiration, explore a variety of dishes, and search for recipes based on ingredients or cuisine types. Our goal is to provide a simple, organized, and accessible way to share and discover great food ideas, all in one place.</Text>
                </Box>
                <Image maxW={{ base:'base',sm:'500px',md:'lg','2xl':'xl'}} src="https://media.istockphoto.com/id/1161153224/photo/vintage-cookbook-with-spices-and-herbs-on-rustic-wooden-background.jpg?s=2048x2048&w=is&k=20&c=5W7sTs5M-vuNECXdmJvmnxagTn97o6TXuTYOG_xyZ5w=" />
            </Flex>
            </div>


            {/* FOOTERRRRRRRRRR */}
    <Flex borderTopWidth="2px" p={4} mt={10} justifyContent={'space-between'} alignItems={'center'}>
    <HStack>
    <GiCookingPot size={'24px'}/>
    <Text fontSize={16}>© 2024 RecipeBox, Inc</Text>
    </HStack>

    <HStack gap={5}>
        <FaTwitter size={'24px'}/>
        <IoLogoInstagram size={'24px'}/>
        <FaFacebook size={'24px'} />
    </HStack>
  </Flex>
        </Flex>
    )
}