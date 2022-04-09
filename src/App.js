import React, { useEffect } from 'react'

function App() {
  const APP_ID = 'ab450ada'
  const APP_KEY = 'e4a0f84cec5c4138cbda21a6c01fae5c'

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data);
  }

  return (
    <div className="app">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-btn">Search</button>
      </form>
    </div>
  );
}

export default App;
