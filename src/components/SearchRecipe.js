import React, { useEffect, useState } from 'react'
import Recipe from './components/Recipe'
import './App.css'
import Home from './components/DefaultRecipe'

function SearchRecipe() {
    const APP_ID = 'ab450ada'
    const APP_KEY = 'e4a0f84cec5c4138cbda21a6c01fae5c'

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState('banana')

    useEffect(() => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        console.log(data);
        setRecipes(data.hits)
    }

    return (
        <div>
            {
                recipes.map(recipe => (
                    <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} img={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
                ))
            }
        </div>
    )
}

export default SearchRecipe