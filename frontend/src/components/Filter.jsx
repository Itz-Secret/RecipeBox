import { Container, SimpleGrid,Box,Text,HStack,Button } from "@chakra-ui/react"
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "@/components/ui/menu"
  import { FaAngleDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import IconVeg from "@/svg/IconVeg";
import IconNonVeg from "@/svg/IconNonVeg";

export default function Filter() {
    return (

        <Box mx={'auto'} maxW={'1140px'}>
            <HStack>
                <Button> <IconVeg/> Veg</Button>
                <Button><IconNonVeg/> Non Veg</Button>
                <MenuRoot>
                <MenuTrigger asChild>
                    <Button>
                    Meal Type <FaAngleDown />
                    </Button>
                </MenuTrigger>
                <MenuContent>
                    <MenuItem value="new-txt">BreakFast</MenuItem>
                    <MenuItem value="new-file">Lunch</MenuItem>
                    <MenuItem value="new-win">Dinner</MenuItem>
                    <MenuItem value="open-file">Snacks</MenuItem>
                </MenuContent>
                </MenuRoot>

                <MenuRoot>
                <MenuTrigger asChild>
                    <Button>
                    Cuisine <FaAngleDown />
                    </Button>
                </MenuTrigger>
                <MenuContent>
                    <MenuItem value="new-txt">Italian</MenuItem>
                    <MenuItem value="new-file">Indian</MenuItem>
                    <MenuItem value="new-win">Chinese</MenuItem>
                    <MenuItem value="open-file">American</MenuItem>
                </MenuContent>
                </MenuRoot>
            </HStack>
          </Box>
       
      )
    
}