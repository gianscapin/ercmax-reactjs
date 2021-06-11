import React,{useState, useEffect} from 'react';
import NavbarComerce from './components/Navbar/NavbarComerce';
import ItemListContainer from './components/container/ItemListContainer';
import CategoryProducts from './components/container/CategoryProducts';
import Item from './components/container/Item';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsProvider from './components/context/ProductsContext';
import Cart from './components/container/Cart';
import FormCart from './components/container/FormCart';
import CartProvider from './components/context/CartContext';
import Footer from './components/Footer/Footer';
import ClientProvider from './components/context/ClientContext';

function App() {


  const [itemSelect, addItem] = useState([]);


  return (
    <Router>
      <ClientProvider>
        <CartProvider>
          <ProductsProvider>
            <div className="container">
              <NavbarComerce 
              />
              <Switch>
                <Route exact path="/">
                  <div className="body-items">
                    <ItemListContainer 
                    />
                  </div>
                </Route>
                <Route path="/category/:cat">
                  <div className="body-items">
                    <CategoryProducts 
                    />
                  </div>
                </Route>
                <Route path="/items/:id">
                  <Item 
                    addItem = {addItem}
                  />
                </Route>
                <Route path="/cart">
                  <Cart 
                    item = {itemSelect}
                  />
                </Route>
                <Route path="/form">
                  <FormCart />
                </Route>
              </Switch>
              <Footer/>
              </div>
          </ProductsProvider>
        </CartProvider>
      </ClientProvider>
    </Router>
  )
}

export default App;
