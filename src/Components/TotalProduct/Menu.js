import React from 'react';
import styles from "../../StyleSheet/Fault/menu.module.css";
import img1 from "../../image/logo(1).png";
import img2 from '../../image/logo(2).png';
import img3 from '../../image/logo3.jpg';
import img4 from '../../image/logo(4).png';
import img5 from '../../image/logo(5).png';
import img6 from '../../image/logo(6).png';
import img7 from '../../image/logo4.png';



const Menu = () => {


    return (
        <div className={styles["menu"]}>
          <div className={styles["cat-menu"]}> 
          <span>Browse by Brand</span>
          </div>
          {/* <div  className={styles["logo-tag"]}>

          </div> */}
            <div className={styles['img-example']} >
                <img className={styles["img-tag"]} src={img1} alt="reload" />
                <img className={styles["img-tag"]} src={img2} alt="reload" />
                <img className={styles["img-tag"]} src={img3} alt="reload" />
                <img className={styles["img-tag"]} src={img4} alt="reload" />
                <img className={styles["img-tag"]} src={img5} alt="reload" />
                <img className={styles["img-tag"]} src={img6} alt="reload" />
                <img className={styles["img-tag"]} src={img7} alt="reload" />

                
            </div>
        </div>
    );
};

export default Menu;
