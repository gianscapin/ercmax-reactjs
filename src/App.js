import React,{useState} from 'react';
import NavbarComerce from './components/Navbar/NavbarComerce';
import ItemListContainer from './components/Items/ItemListContainer';
import CategoryProducts from './components/Products/CategoryProducts';
import Item from './components/Items/Item';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsProvider from './components/Products/ProductsContext';
import Cart from './components/Cart/Cart';
import FormCart from './components/Cart/Form/FormCart';
import Builder from './components/Builder/Builder';
import CartProvider from './components/Cart/CartContext';
import Footer from './components/Footer/Footer';
import ClientProvider from './components/Cart/ClientContext';

function App() {


  const [itemSelect, addItem] = useState([]);


  return (
    <Router>
      <ClientProvider>
        <CartProvider>
          <ProductsProvider>
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
                <Route path="/builder">
                  <Builder />
                </Route>
              </Switch>
              <Footer/>
          </ProductsProvider>
        </CartProvider>
      </ClientProvider>
    </Router>
  )
}

export default App;
