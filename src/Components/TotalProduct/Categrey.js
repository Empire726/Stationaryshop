import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../StyleSheet/Fault/category.module.css";
import PENCILS from '../../image/cat-10.svg';
import COLOURS from '../../image/cat-9.svg';
import BRANDS from '../../image/cat13.svg';
import CLIPS from '../../image/cat12.svg';
import REFILES from '../../image/cat8.svg';
import PAPERS from '../../image/cat-7.svg';
import MARKER from '../../image/cat-2.svg';
import CRAFT from '../../image/cat-3.svg';
import ARTIST from '../../image/cat11.svg';
import OFFICIAL from '../../image/cat-0.svg';
import TAPES from '../../image/cat-5.svg';
import FOLDER from '../../image/cat-6.svg';
import INK from '../../image/cat-4.svg';





const Categrey = () => {

    return (
        //   ---------------- types of data present---------------------------------------------------

        <>

            <div className={styles["category"]}>

                <div className={styles["hed-din"]}>
                    <span>  Browse by Category   </span>

                </div>
                <div className={styles["cat-div"]}>
                    <div className={styles["cate"]}>
                        <NavLink to="/product"><img src={OFFICIAL} alt="reload" /><h5>OFFICIAL </h5></NavLink>
                        <NavLink to="/product"><img src={PENCILS} alt="reload" /><h5> PENCILS </h5></NavLink>
                    </div>

                    <div className={styles["cate"]}>
                        <NavLink to="/product"><img src={COLOURS} alt="reload" /><h5> COLOURS </h5></NavLink>
                        <NavLink to="/product"><img src={FOLDER} alt="reload" /> <h5> FOLDER  </h5></NavLink>

                    </div>
                    <div className={styles["cate"]}>

                        <NavLink to="/product"><img src={MARKER} alt="reload" /> <h5> MARKER  </h5></NavLink>
                        <NavLink to="/product"><img src={CRAFT} alt="reload" /> <h5> CRAFT  </h5></NavLink>




                    </div>
                    <div className={styles["cate"]}>
                        <NavLink to="/product"><img src={BRANDS} alt="reload" /> <h5> BRANDS  </h5></NavLink>
                        <NavLink to="/product"><img src={CLIPS} alt="reload" /> <h5>CLIPS </h5></NavLink>



                    </div>
                    <div className={styles['cate']}>
                        <NavLink to="/product"><img src={REFILES} alt="reload" /> <h5> REFILES  </h5></NavLink>
                        <NavLink to="/product"><img src={PAPERS} alt="reload" /> <h5> PAPER  </h5></NavLink>
                        </div>
                        <div className={styles['cate']}>
                        <NavLink to="/product"><img src={MARKER} alt="reload" /><h5>BRUSH<br/> MARKER  </h5></NavLink>
                        <NavLink to="/product"><img src={INK} alt="reload" /><h5>INK<br/>Bottle</h5></NavLink>
                    </div>
                    <div className={styles['cate']}>
                        <NavLink to="/product"><img src={ARTIST} alt="reload" /> <h5>ARTIST<br/>CORNER</h5></NavLink>
                        <NavLink to="/product"><img src={TAPES} alt="reload" /> <h5> TAPES  </h5></NavLink>
                    </div>
                </div>

            </div>

        </>

    );
};
export default Categrey;