import React from 'react'
import style from './Recipe.module.css'

function Recipe(props) {
  return (
    <div className={style.container}>
      {/* <ol>
        {props.ingredients.map((ingredient) => {
          return <li>{ingredient.text}</li>
        })}
      </ol> */}
      {/* <div className={style.calories}>Calories:{props.calories}</div> */}
      <img className={style.img} src={props.img} alt="" />
      <div className={style.title}>{props.title}</div>
    </div>
  )
}

export default Recipe