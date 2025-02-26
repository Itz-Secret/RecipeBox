import { Box, Flex, Text, Heading } from "@chakra-ui/react";

export default function Instructions({ number, steps }) {
  return (
    <Box mb={10} p={0}>
      <Flex gap={3} align="start">
        <Heading as="h2" size="md" m={0}>
          {number}.
        </Heading>
        <Text fontSize="lg">{steps}</Text>
      </Flex>
    </Box>
  );
}
