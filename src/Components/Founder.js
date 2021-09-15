import React from "react";
import font from "../../src/image/para.jpeg";
import styles from "../../src/StyleSheet/Fault/View.module.css";


const Founder = () => {
    return (
        <>
            <div   className={styles["founder"]}>
                <div className={styles["founder-img"]}>
                    <img src={font} alt="reload" />

                </div>
                <div className={styles['paragraph']}>
                    <h3> Meet the Founder </h3>
                    <h7> Tailoring stationery products, office supply needs and technology solutions for all 
                    your personal & business requirements, StatMo.in is part of the largest independent business 
                    to customer and business to business provider of stationery & office products and office automation 
                    in India.<br/>
                    My aim is to further strengthen our relationship by equipping you with the tools to
                     remain up-to-date in an increasingly competitive environment.<br />"StatMo"-  means “Stationery
                     & more”.
                     </h7>




                </div>

            </div>

        </>
    );

};
export default Founder;