import React, { useEffect, useState } from 'react'
import Recipe from './components/Recipe'
import './App.css'
import Home from './components/Home'

function App() {
  const APP_ID = 'ab450ada'
  const APP_KEY = 'e4a0f84cec5c4138cbda21a6c01fae5c'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('banana')
  const [isSubmitted, setIsSubmited] = useState(false)
  const [cuisineType, setCuisineType] = useState("Indian")

  useEffect(() => {
    defaultRecipes()
  }, [])

  const defaultRecipes = async () => {
    setCuisineType("Indian")
    const response = await fetch(`https://api.edamam.com/search?q=${query}&cuisineType=${cuisineType}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data);
    setRecipes(data.hits)
  }

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data);
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    getRecipes()
  }

  const submitHandler = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="app">
      <form className="search-form" onSubmit={submitHandler}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Type any ingredient, recipe e.g. banana" />
        <button type="submit" className="search-btn">Search</button>
      </form>
      <div className='recipes'>
        {
          isSubmitted ?
            recipes.map(recipe => (
              <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} img={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
            )) :
            <>
              <h2>Indian</h2>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} >
                {
                  recipes.map(recipe => (
                    <Home key={recipe.recipe.label} title={recipe.recipe.label} img={recipe.recipe.image} />
                  ))
                }
              </div>
            </>
        }
      </div>
    </div>
  );
}

export default App;
