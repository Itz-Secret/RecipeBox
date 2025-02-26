import { HStack, Stack, Text,SimpleGrid } from "@chakra-ui/react"
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination"
import { useState } from "react"
import Card from "./Card";

const pageSize = 9

const Pagination = ({filteredRecipes}) => {
  const [page, setPage] = useState(1)
  const count = filteredRecipes.length


  const startRange = (page - 1) * pageSize
  const endRange = startRange + pageSize

  const visibleRecipes = filteredRecipes.slice(startRange, endRange)

  return (
    <Stack gap="4">
            <SimpleGrid my={3} mx={'auto'} columns={{ base: 1, md: 2, lg: 3 }} w="full" gap={"20px"}>
                    {(visibleRecipes.map((recipe)=><Card key={recipe._id} recipe={recipe}/>))}
            </SimpleGrid>
      <PaginationRoot
        page={page}
        count={count}
        pageSize={pageSize}
        size={{sm:'sm',md:'md',lg:'lg',xl:'xl'}}
        onPageChange={(e) => setPage(e.page)}
      >
        <HStack justifyContent={'center'}>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </Stack>
  )
}

export default Pagination
