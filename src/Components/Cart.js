import React, { useContext} from 'react'
import { CartContext } from '../Global/CartContext'
// import { Navbar } from './Navbar';
import svge from "../../src/images/ecommerce.svg";
import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import { NavLink } from 'react-router-dom'
import Card from "./ScrollCard"


export const Cart = () => {

    const { shoppingCart, dispatch, totalPrice, totalQty ,productName } = useContext(CartContext);
    

    return (
        <>
          
          
                {shoppingCart.length !== 0 && <div className="logo-img"><img className="logo-2" src={svge} alt="..."/></div>}
                <div className='cart-container'>
                    {
                        shoppingCart.length === 0 && <>
                            <div>No Items in your cart Or slow internet causing trouble</div>
                         <NavLink to="/home"><div>Return to Home page</div></NavLink>
                        </>
                    }
                    {shoppingCart && shoppingCart.map(cart => (
                        <>
                        <div className='cart-card' key={cart.ProductID}>

                            <div className='cart-img'>
                                <img src={cart.ProductImg} alt="not found" />
                            </div>

                            <div className='cart-name'>{cart.ProductName}</div>

                            <div className='cart-price-orignal'>Rs {cart.ProductPrice}.00</div>

                            <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_add} size={24} />
                            </div>

                            <div className='quantity'>{cart.qty}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_remove} size={24} />
                            </div>

                            <div className='cart-price'>
                                Rs {cart.TotalProductPrice}.00
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                <Icon icon={iosTrashOutline} size={24} />
                            </button>
                        </div>
                        <div>
                         <a href={`whatsapp://send/?phone=+918708353430&text=Product:- ${cart.ProductName} %0a+Price:- ${cart.TotalProductPrice}%0a+Total-Item:- ${cart.qty}`} className='cashout-link'>
                            <button className='btn btn-success btn-md' style={{ marginTop: 5 + 'px' }}>
                                Cash on delivery
                        </button>
                        </a>
                        </div>
                        </>
                    ))
                    }
                    {/* {shoppingCart.length > 0 && <div className='cart-summary'>
                        <div className='cart-summary-heading'>
                            Cart-Summary
                        </div>
                        <div className='cart-summary-price'>
                            <span>Product Name</span>
                            <span>{productName }</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Price</span>
                            <span>{totalPrice}</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Qty</span>
                            <span>{totalQty}</span>
                        </div>
                        <a href={`whatsapp://send/?phone=+918708353430&text=${productName}+${totalPrice}+${totalQty}`} className='cashout-link'>
                            <button className='btn btn-success btn-md' style={{ marginTop: 5 + 'px' }}>
                                Cash on delivery
                        </button>
                        </a>
                    </div>} */}
                </div>
                <Card/>
            </>
       
    )
}