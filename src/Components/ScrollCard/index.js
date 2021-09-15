import React from 'react'
import styles from "../../StyleSheet/Scroll/scroll.module.css";
import { Itemda } from './itemda';
import {  NavLink } from 'react-router-dom';

const Card = () => {
    return (
        <>

            <div className={styles['card-container']}>
                {Itemda.map((item, index) => {
                    return (
                        <div className={styles['card']} key={index}>
                            <header className={styles['article-header']}>
                                
                                    <div className={styles['category-title']}>
                                        {item.title}
                                    </div>
                               
                                <div className={styles["img_section"]}>
                                <NavLink to="/product"><img src={item.img} alt="none" /></NavLink>
                               
                                
                                </div>
                                <div className={styles["spaner"]}>
                                <span>RS {item.money}.00</span>
                                </div>
                            </header>
                           
                            <div className={styles['tags']}>
                                <div><NavLink to="/product">{item.name}</NavLink></div>
                                <div><NavLink to="/adder">MORE {">>"}</NavLink></div>
                            </div>
                        </div>

                             )
                })}

                {/* <!-- repeat the card here. --> */}
                {/* <div className={styles['card']}>
                </div> */}
            </div>

        </>
    )
};

export default Card;
