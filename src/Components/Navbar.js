// import React, { useContext } from 'react'
// // import logo from '../images/ecommerce.svg'
// import { Link } from 'react-router-dom'
// // import { auth } from '../Config/Config'
// import { Icon } from 'react-icons-kit'
// import { cart } from 'react-icons-kit/entypo/cart'
// // import { useHistory } from 'react-router-dom'
// import { CartContext } from '../Global/CartContext';

// export const Navbar = ({ user }) => {

//     // const history = useHistory();
//     const { totalQty } = useContext(CartContext);

    // handle logout
    // const handleLogout = () => {
    //     auth.signOut().then(() => {
    //         history.push('/login');
    //     })
    // }

//     return (
//         <div className='navbox'>
            
            
//                  <div className='rightside'>
            
//                 <span><Link to="/" className='navlink'>{user}</Link></span>
//                 <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
//                 <span className='no-of-products'>{totalQty}</span>
               
//             </div>
          
//         </div>
//     )
// }
