import React from "react";
import { FiPhoneCall, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import styles from "../../StyleSheet/Footer/footer.module.css";
import Logo from '../../image/pbc.jpeg';
// import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles['brand']}>
        <div className={styles["image-logo"]}><img src={Logo} alt="none" /></div>
        <span>Pahuja Book Collection</span>
        {/* <span>All Copyrights Reserved</span> */}
      </div>
      <div className={styles['footer-menu-wrapper']}>
        <div className={styles['footer-menu']}>
          <a exact href="/">Home</a>
          <a exact href="/about">Shop</a>
          <a exact href="/Categrey">Product</a>
          <a exact href="/menu">Brands</a>
          <a exact href="/contact">Contact Us </a>
        </div>
        <div className={styles['footer-menu']}>
          <a href="#"><FaFacebook /> Facebook</a>
          <a href="#"><FaInstagramSquare /> Instagram</a>
          <a href="+918708353430"><FiPhoneCall />   Phone</a>
          <a href="#"><FiMapPin />  Location</a>
          <a href="#"><FaYoutube />  Youtube</a>
        </div>
        {/* <div className={styles['footer-menu']}>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms {'&'} Conditions</a>
        </div> */}

      </div>
      {/* <div className={styles['what-icon']}>
        <a href="#">
          <FaWhatsappSquare className={styles["icon-set"]} />
        </a> */}
      {/* </div>/ */}

    </div>
  );
};

export default Footer;

// -------------------------------------------------------------------------------------------------------
