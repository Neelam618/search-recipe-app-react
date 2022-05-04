import React, { useState } from 'react'
import style from './RecipeCard.module.css'

function RecipeCard(props) {
  return (
    <a href={props.url} className={style.container}>
      <img className={style.img} src={props.img} alt="" />
      <div className={style.title}>{props.title}</div>
    </a>
  )
}

export default RecipeCard