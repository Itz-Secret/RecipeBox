import FridgeContent from "@/components/FridgeContent"
import { Container, Flex } from "@chakra-ui/react"
export default function Fridge(){
    return <Flex alignItems={'center'}  h={'100vh'}>
        <FridgeContent/>
    </Flex>
}