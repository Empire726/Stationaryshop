import React, { Component } from 'react'
import { ProductsContextProvider } from './Global/ProductsContext'
import { Home } from './Components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NotFound } from './Components/NotFound'
import { CartContextProvider } from './Global/CartContext'
import { Cart } from './Components/Cart'
import { AddProducts } from './Components/AddProducts'
import { Cashout } from './Components/Cashout'
import Contact from './Components/About'
import {Header} from './Components/Header/index.jsx';
import Footer from "./Components/Footer/index.jsx"
import { Products } from './Components/Products'
import Adder from './Components/Adder'

export class App extends Component {

    state = {
        user: null,
    }

    
    render() {
        return (
            <ProductsContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                    <Header/>
                        <Switch>
                           
                            <Route exact path='/' component={Home } />
                          
                            <Route path="/about" component={Contact} />
                            <Route path="/product" component={Products} />
                            <Route path="/adder" component={Adder} />

                            
                            <Route path="/cart" component={Cart} />
                            {/* add products */}
                            <Route path="/addproducts" component={AddProducts} />
                            {/* cashout */}
                            <Route path='/cashout' component={Cashout } />
                            <Route component={NotFound} />
                        </Switch>
                        <Footer/>
                    </BrowserRouter>
                </CartContextProvider>
            </ProductsContextProvider>
        )
    }
}

export default App;
