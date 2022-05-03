import React from 'react'
import style from './Home.module.css'

function Home(props) {
    return (
        <div className={style.container}>
            <img src={props.img} alt="" />
            <div className={style.title}>{props.title}</div>
        </div>
    )
}

export default Home