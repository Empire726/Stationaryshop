import React, { useState, useContext } from 'react';
import '../../Components/StyleSheets/Header/Header.css';
import { MenuItems } from './MultiItem';
 import lote from "../../image/stationarylogo.png";
import { CartContext } from '../../Global/CartContext';
import { Icon } from 'react-icons-kit';
import {androidCart} from 'react-icons-kit/ionicons/androidCart';
import { Link } from 'react-router-dom';





export const Header = () => {
  const { totalQty } = useContext(CartContext);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>     
    <div className="nav-body">
    <nav className="Navbar">
    <div className="image-c">
      <img src={lote} className='navbar-logo' alt="None"/>
        </div>

      <div className="menu-icon" onClick={handleClick}>

        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="nav-item">
              <Link className={item.cName} to={item.url} activeClassName="active" onClick={handleClick}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='rightside'>
        <span>
          <Link to="cart" className="navlink"><Icon icon={androidCart}  size={'30%'} /></Link>
        </span>
        <span className="no-of-products">{totalQty}</span>
      </div>

    </nav>
    </div>
  </>
  );
}


