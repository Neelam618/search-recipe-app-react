import React from 'react'

function Recipe(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <ol>
        {props.ingredients.map((ingredient) => {
          return <li>{ingredient.text}</li>
        })}
      </ol>
      <p>{props.calories}</p>
      <img src={props.img} alt="" />
    </div>
  )
}

export default Recipe