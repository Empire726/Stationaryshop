import React from "react";
import styles from "../../StyleSheet/Contact/Contact.module.css";
import Founder from "../Founder";



const Contact = () => {

    return (
        <>
            <div>
                <div className={styles["heading"]}>
                    <h1 className={styles["can"]}>Welcome to the biggest online <a href="https://www.google.com/search?q=india+bigest+stationary&rlz=1C1PNBB_enIN933IN933&sxsrf=ALeKk00bVDcHVwzPWnlX8DTsEJPxQj2gVw%3A1625053908556&ei=1FrcYNO7IcqortoPqdeHeA">Stationery </a> shop in India! </h1>
                </div>
                <div className={styles["paragraph"]}>
                    <h5>Established with one simple aim in mind: to bring you the best of the world’s stationery products. We firmly believe that you will not find a better assortment of <span>stationery products, Office supplies, school stationery & books and art & craft products </span>  anywhere else in India. Many of our products are exclusive to us and we go to extraordinary extents to source those hard to find extra special items. StatMo.in was born out of a personal passion for cool stationery and good living.
                        Today even as we advance into the digital world, the need for essential office supplies – <br /> <span> pens, pencils, refills, registers, notepads, stickers, notebooks, markers, staplers, calculators, desk organizers, glue sticks etc.</span>  remains as strong as ever. StatMo.in understands this shift in focus and has grown to cover a wide range of office products from paper and pens, to ink toners and computer accessories.
                        Buying office supplies & stationery from StatMo.in guarantees you high quality products, competitive prices and a reliable service every time.
                        <br /><br />
                        Keeping in mind the demands on our time in todays’ busy routine, online stationery shopping should be a pleasure rather than a chore. You’ll find everything you need, right here at StatMo.in!</h5>
                </div>
            </div>
            <Founder/>
        </>
    );
};
export default Contact;