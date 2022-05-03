import React, { useEffect, useState } from 'react'
import DefaultRecipe from './DefaultRecipe'

function Home() {
    const APP_ID = 'ab450ada'
    const APP_KEY = 'e4a0f84cec5c4138cbda21a6c01fae5c'

    const [recipes, setRecipes] = useState([])
    const [cuisineType, setCuisineType] = useState("Indian")
    const [query, setQuery] = useState('banana')

    useEffect(() => {
        defaultRecipes()
    }, [])

    const defaultRecipes = async () => {
        setCuisineType("Indian")
        const response = await fetch(`https://api.edamam.com/search?q=${query}&from=0&to=4&cuisineType=${cuisineType}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        console.log(data);
        setRecipes(data.hits)
    }

    return (
        <>
            <h2>Indian</h2>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} >
                {
                    recipes.map(recipe => (
                        <DefaultRecipe key={recipe.recipe.label} title={recipe.recipe.label} img={recipe.recipe.image} />
                    ))
                }
            </div>
        </>
    )
}

export default Home