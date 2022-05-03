import React, { useEffect, useState } from 'react'
import Recipe from './components/Recipe'
import './App.css'
import Home from './components/DefaultRecipe'
import DefaultRecipe from './components/DefaultRecipe'

function App() {
  const APP_ID = 'ab450ada'
  const APP_KEY = 'e4a0f84cec5c4138cbda21a6c01fae5c'

  const [recipes, setRecipes] = useState([])
  const [defaultRecipes, setDefaultRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('banana')
  const [cuisineType, setCuisineType] = useState("Indian")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    getDefaultRecipes()
    if (isSubmitted) {
      getRecipes()
    }
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data);
    setRecipes(data.hits)
  }

  const getDefaultRecipes = async () => {
    setCuisineType("Indian")
    const response = await fetch(`https://api.edamam.com/search?q=${query}&from=0&to=4&cuisineType=${cuisineType}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data);
    setDefaultRecipes(data.hits)
    setIsSubmitted(false)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    getRecipes()
  }

  const submitHandler = e => {
    e.preventDefault()
    setQuery(search)
    getRecipes()
    // setIsSubmitted(false)
  }

  return (
    <div className="app">
      <form className="search-form" onSubmit={submitHandler}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Type any ingredient, recipe e.g. banana" />
        <button type="submit" className="search-btn">Search</button>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {
          defaultRecipes.length == 0 ?
            recipes.map(recipe => (
              <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} img={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
            ))
            :
            defaultRecipes.map(defaultRecipe => (
              <DefaultRecipe key={defaultRecipe.recipe.label} title={defaultRecipe.recipe.label} img={defaultRecipe.recipe.image} />
            ))
        }
      </div>
    </div>
  );
}

export default App;
