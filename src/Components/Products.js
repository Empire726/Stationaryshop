import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import styles from '../../src/StyleSheet/Home/Home.module.css';
import style from "../StyleSheet/About/About.module.css";
import { NavLink } from 'react-router-dom';
// import {Link} from "react-dom";

export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
            {products.length !== 0 && <div className={styles["heading-p"]}>
                <span className="fancy-underline">Browse The BestSellers</span>
            </div>}
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className={style["card-bod"]}>
                        <div className={style['card-animation']}>
                            <div className="cards">
                                <img src={product.ProductImg} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <p className="card-title">{product.ProductName}</p>
                                    <h5 className="card-title">{'₹'} {product.ProductPrice}</h5>
                                    
                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}
                                    >
                                        ADD TO CART 
                                    </button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </>
    )
}
