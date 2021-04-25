import React,{Fragment, BrowserRouter,Switch,Route,useState,useEffect} from 'react';
import NavbarComerce from './components/Navbar/NavbarComerce';
import ItemListContainer from './components/container/ItemListContainer';
function App() {
  return (
   <Fragment>
      <div className="container">
        <NavbarComerce />
            <ItemListContainer 
              nombre='ercmax'
            />
      </div>
   </Fragment>
  )
}

export default App;
