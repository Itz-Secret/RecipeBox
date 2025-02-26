import { Container, VStack, Flex, Text, Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react"


export const Loading = () => {
  return (
    <Container maxW="full" minH="80vh" display="flex" justifyContent="center" alignItems="center">
        <Box textAlign="center">
        <Spinner size={"xl"}/>
        </Box>
    </Container>
  );
};
