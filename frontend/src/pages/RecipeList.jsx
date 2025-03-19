import { useState, useEffect } from "react";
import { Container, SimpleGrid, Box, HStack, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { FaAngleDown } from "react-icons/fa";
import IconVeg from "@/svg/IconVeg";
import IconNonVeg from "@/svg/IconNonVeg";
import { useProductStore } from "@/store/product";
import Card from "../components/Card";
import { EmptyPage } from "./EmptyPage";
import { Loading } from "./Loading";
import Pagination from "@/components/Pagination";


export default function RecipeList() {
  const { recipes, getRecipes } = useProductStore(); // Fetch recipes
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Store filtered results
  const [filters, setFilters] = useState({
    nonVeg: null, // true = Non-Veg, false = Veg, null = All
    mealtype: null, // "Breakfast", "Lunch", etc.
    cuisine: null, // "Italian", "Indian", etc.
  });

  // Fetch recipes on mount
  useEffect(() => {
    getRecipes();
    console.log(recipes);
    
  }, []);

  // Apply filters whenever recipes or filters change
  useEffect(() => {
    if (!recipes || recipes.length === 0) return;
    
    let updatedRecipes = recipes;

    if (filters.nonVeg !== null) {
      updatedRecipes = updatedRecipes.filter(
        (recipe) => recipe.non_veg === filters.nonVeg
      );
    }

    if (filters.mealtype) {
      updatedRecipes = updatedRecipes.filter(
        (recipe) => recipe.mealtype?.toLowerCase() === filters.mealtype.toLowerCase()
      );
    }

    if (filters.cuisine) {
      updatedRecipes = updatedRecipes.filter(
        (recipe) => recipe.cuisine?.toLowerCase() === filters.cuisine.toLowerCase()
      );
    }

    setFilteredRecipes(updatedRecipes);
  }, [recipes, filters]);

  function clearFilters() {
    setFilters({
      nonVeg: null,
      mealtype: null,
      cuisine: null,
    });
  }

  return (
    <Container maxW="container.xl" mt={'75px'} pb={12}>
      <Box maxW={{base:'sm',lg:"lg"}}>
        <HStack wrap={'wrap'} spacing={4}>
          {/* Veg Filter */}
          <Button
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                nonVeg: prev.nonVeg === false ? null : false,
              }))
            }
            colorScheme={filters.nonVeg === false ? "green" : "gray"}
            variant={filters.nonVeg === false ? "solid" : "outline"}
          >
            <IconVeg /> Veg
          </Button>

          {/* Non-Veg Filter */}
          <Button
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                nonVeg: prev.nonVeg === true ? null : true,
              }))
            }
            colorScheme={filters.nonVeg === true ? "red" : "gray"}
            variant={filters.nonVeg === true ? "solid" : "outline"}
          >
            <IconNonVeg /> Non-Veg
          </Button>

          {/* Meal Type Filter */}
          <MenuRoot>
  <MenuTrigger asChild>
    <Button
      colorScheme={filters.mealtype ? "blue" : "gray"} // Change color if selected
      variant={filters.mealtype ? "solid" : "outline"} // Highlight when active
    >
      {filters.mealtype || "Meal Type"} <FaAngleDown />
    </Button>
  </MenuTrigger>
  <MenuContent>
    {["Breakfast", "Lunch", "Dinner", "Snacks"].map((meal) => (
      <MenuItem
        key={meal}
        onClick={() =>
          setFilters((prev) => ({
            ...prev,
            mealtype: prev.mealtype === meal ? null : meal, // Toggle selection
          }))
        }
        style={{
          backgroundColor: filters.mealtype === meal ? "#3182CE" : "transparent", // Darker blue for selection
          fontWeight: filters.mealtype === meal ? "bold" : "normal", // Bold selected option
          borderRadius: "5px", // Rounded corners for a modern look
          padding: "8px 12px", // Better spacing for usability
          transition: "background-color 0.2s ease-in-out", // Smooth transition
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3182CE")} // Light gray on hover
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = filters.mealtype === meal ? "#3182CE" : "transparent")} // Revert on leave
      >
        {meal}
      </MenuItem>
    ))}
  </MenuContent>
</MenuRoot>



          {/* Cuisine Filter */}
          <MenuRoot>
  <MenuTrigger asChild>
    <Button
      colorScheme={filters.cuisine ? "blue" : "gray"} // Change color if selected
      variant={filters.cuisine ? "solid" : "outline"} // Highlight when active
    >
      {filters.cuisine || "Cuisine"} <FaAngleDown />
    </Button>
  </MenuTrigger>
  <MenuContent>
    {["Italian", "Indian", "Chinese", "American"].map((cuisine) => (
      <MenuItem
        key={cuisine}
        onClick={() =>
          setFilters((prev) => ({
            ...prev,
            cuisine: prev.cuisine === cuisine ? null : cuisine, // Toggle selection
          }))
        }
        style={{
          backgroundColor: filters.cuisine === cuisine ? "#3182CE" : "transparent", // Selected color
          fontWeight: filters.cuisine === cuisine ? "bold" : "normal", // Bold selected option
          borderRadius: "5px", // Rounded corners
          padding: "8px 12px", // Better spacing
          transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out", // Smooth transition
        }}
        onMouseEnter={(e) => {
          if (filters.cuisine !== cuisine) {
            e.currentTarget.style.backgroundColor = "#3182CE"; // Light gray on hover
          }
        }}
        onMouseLeave={(e) => {
          if (filters.cuisine !== cuisine) {
            e.currentTarget.style.backgroundColor = "transparent"; // Revert on leave
          }
        }}
      >
        {cuisine}
      </MenuItem>
    ))}
  </MenuContent>
</MenuRoot>


          {/* Clear Filters Button */}
          {(filters.nonVeg !== null || filters.mealtype || filters.cuisine) && (
            <Button onClick={clearFilters} colorScheme="blue" variant="outline">
              Clear Filters
            </Button>
          )}
        </HStack>
      </Box>

      {/* Recipe Grid */}
            {filteredRecipes.length!=0?(
              
            
              <Pagination filteredRecipes={filteredRecipes}/>
          
          
          ):<Loading/>}

    </Container>
  );
}
