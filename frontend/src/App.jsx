import { Box } from '@chakra-ui/react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RecipeList from './pages/RecipeList'
import RecipePage from './pages/RecipePage'
import SearchRecipe from './pages/SearchRecipe'
import SubmitRecipeForm from './pages/SubmitRecipeForm'
import Fridge from './pages/Fridge'
import { Toaster, toaster } from "@/components/ui/toaster"
import { useColorModeValue } from './components/ui/color-mode'


function App() {

  // bg={useColorModeValue("yellow.100","yellow.200")}
  return (
    <Box minH={'100vh'} >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<RecipeList/>}/>
        <Route path='/recipes/:id' element={<RecipePage/>}/>
        <Route path='/search/:text' element={<SearchRecipe/>}/>
        <Route path='/new' element={<SubmitRecipeForm/>}/>
        <Route path='/Wts in your fridge' element={<Fridge/>}/>        
      </Routes>
      <Toaster />

    </Box>
  )
}

export default App
