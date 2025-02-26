import { Container, VStack, Flex, Text, Box } from "@chakra-ui/react";
import { HiColorSwatch } from "react-icons/hi"


export const EmptyPage = () => {
  return (
    <Container maxW="full" minH="80vh" display="flex" justifyContent="center" alignItems="center">
      <Flex flexDir="column" justifyContent="center" alignItems="center">
            <HiColorSwatch size={50}/>
        <Box textAlign="center">
          <Text fontSize="36px" fontFamily="cursive">No results found</Text>
          <Text fontFamily={'cursive'} color="grey">Try searching different words</Text>
        </Box>
      </Flex>
    </Container>
  );
};
