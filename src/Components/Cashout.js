import React, { useState, useContext } from 'react'
import { CartContext } from '../Global/CartContext'
// import { Link } from 'react-router-dom';




export const Cashout = (props) => {



    const { totalPrice, totalQty } = useContext(CartContext);

    // defining state
    const [name, setName] = useState('');
    const [phone_no, setPhone_no] = useState('');
    const [address, setAddress] = useState('');
    const [error] = useState('');
    // const [title, setTitle] =useState('');

    // const cashoutSubmit = (e) => {


    return (
        <>

            <div className='container'>
                <br />
                <h2>Cashout Details</h2>
                <br />

                <form autoComplete="off" className='form-group'
                    
                >
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control' required
                        onChange={(e) => setName(e.target.value)} value={name} />
                    <br />

                    <label htmlFor="Phone No">Phone No</label>
                    <input type="number" className='form-control' required
                        onChange={(e) => setPhone_no(e.target.value)} value={phone_no} />
                    <br />
                    <label htmlFor="Delivery Address">Delivery Address</label>
                    <input type="text" className='form-control' required
                        onChange={(e) => setAddress(e.target.value)} value={address} />
                    <br />
                    <label htmlFor="Price To Pay">Price To Pay</label>
                    <input type="number" className='form-control' required
                        value={totalPrice} disabled />
                    <br />
                    <label htmlFor="Total No of Products">Total No of Products</label>
                    <input type="number" className='form-control' required
                        value={totalQty} disabled />
                    <br />
                    {/* <Link to='https://wa.me/918901660739?texts={`${totalPrice} + ${totalQty}`}'>
                       </Link> */}

                    <a
                        href={ `whatsapp://send/?phone=+918689001119&text=${totalPrice}+${totalQty}`}>
                        
                        <button className="btn btn-success btn-md mybtn">SUBMIT</button>
                    </a>


                </form>
                {error && <span className='error-msg'>{error}</span>}
            </div>
            <a href="https://wa.me/918901660739?text=">

  
  <button className="btn btn-success btn-md mybtn">SUBMIT</button>
</a>


        </>
    )
}




