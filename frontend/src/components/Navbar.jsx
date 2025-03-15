import { Container,Flex,Text,HStack,VStack,Box, Button } from "@chakra-ui/react"
import { Link,useNavigate } from "react-router-dom"
import { FaSquarePlus } from "react-icons/fa6";
import {LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";
import { Group, Input, InputAddon, Stack } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { useState } from "react";
import { Collapsible } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
    const [search,setSearch]=useState('')
    const {colorMode,toggleColorMode}=useColorMode()
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && search.trim()) {
          navigate(`/search/${search}`);
        }
      };

  return(
    <Container px={4} mb={3} m={0} maxWidth={'full'} top='0' position='fixed' zIndex='10000' bg={useColorModeValue("#f06543","gray.900")}>
        <Collapsible.Root>

        <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
            sm:'row'
        }}
        >
            <HStack gap={4} alignItems="center">
            <Link
                to="/"
                style={{ display: 'flex', alignItems: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}
            >
                <GiCookingPot size={40} style={{ marginRight: '8px' }} />
                RecipeBox
            </Link>

            {/* Nav Links (Visible only on larger screens) */}
            <HStack display={{ base: 'none', md: 'flex' }} gap={{ base: '2px', md: '10px' }}>
                <Link to="/">Home</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/Wts in your fridge">Wts in Your Fridge?</Link>
            </HStack>
            </HStack>

            <HStack spacing={4} alignItems={'center'} >

            {/* Nav (Visible only on larger screens) */}

                <Group attached display={{ base: 'none', md: 'flex' }}  >
                <Input placeholder="Search" value={search} onKeyDown={handleKeyDown} onChange={(e)=>setSearch(e.target.value)}/>
                <Link to={search?`/search/${search}`:'#'}><Button variant={'outline'} ><FaSearch /></Button> </Link>
                </Group>

                <Link to={'/new'}>
                    <Button bg={useColorModeValue("gray.100","gray.900")}>
                    <FaSquarePlus color={useColorModeValue("black","white")} fontSize={20}/>
                    </Button>    
                </Link>

                <Button onClick={toggleColorMode} bg={useColorModeValue("gray.100","gray.900")}>
                    {colorMode=== "light"?<IoMoon color="black" />:<LuSun color="white" />}
                </Button>

                <Collapsible.Trigger display={{base:'flex',md:'none'}}>
                        <GiHamburgerMenu color={useColorModeValue('black','white')} />
                </Collapsible.Trigger>

            </HStack>
        </Flex>
        {/* for mobile screens */}
        <Collapsible.Content >
            <VStack >
                <Link to="/">Home</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="//Wts in your fridge">Wts in Your Fridge?</Link>
            </VStack>
            <Box width={'full'} py={2} justifyContent={'center'}>            
            <Group width={'full'} attached  >
                <Input placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <Link to={search ? `/search/${search}` : "#"}>
                <Button variant={'outline'} ><FaSearch /></Button> </Link>
            </Group>
            </Box>
        </Collapsible.Content >
        </Collapsible.Root>

    </Container>
  )
}