import React from 'react'
import { Products } from '../Products'
import Card from '../ScrollCard'
import style from "../../StyleSheet/Home/Home.module.css"

const Adder = () => {
    return (
        <>
        <div className={style["adder"]}>
        <Products/>
        <Card/>
        <Card />
        </div>
        </>
    )
}

export default Adder;
