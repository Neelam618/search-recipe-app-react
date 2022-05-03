import React from 'react'
import style from './Home.module.css'

function Home(props) {
    return (
        // <div className={style.recipe} style={{ width: 300 }}>
        //     <h4>{props.title}</h4>
        //     <img width={280} height={100} src={props.img} alt="" />
        // </div>

        <div className={style.container}>
            <img src={props.img} alt="" />
            <div className={style.title}>{props.title}</div>
        </div>
    )
}

export default Home