import React, { useEffect, useState } from 'react'
import Recipe from './components/Recipe'

function App() {
  const APP_ID = 'ab450ada'
  const APP_KEY = 'e4a0f84cec5c4138cbda21a6c01fae5c'

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data);
    setRecipes(data.hits)
  }

  return (
    <div className="app">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-btn">Search</button>
      </form>
      {
        recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} img={recipe.recipe.image} />
        ))
      }

      <Recipe />
    </div>
  );
}

export default App;
