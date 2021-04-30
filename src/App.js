import React,{useState, useEffect} from 'react';
import NavbarComerce from './components/Navbar/NavbarComerce';
import ItemListContainer from './components/container/ItemListContainer';
import CategoryProducts from './components/container/CategoryProducts';
import Item from './components/container/Item';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsProvider from './components/context/ProductsContext';

function App() {

  const [weather, saveWeather] = useState({
    temperature:'',
    description:'',
    icon:''
  });


  

  useEffect(()=>{ 
      const consultWeather = async () =>{
        const url = 'http://api.weatherstack.com/current?access_key=3f84c6030d6a7e80becdb2e77c3bbffc&query=Buenos%20Aires';

        await fetch(url)
        .then(response => response.json())
        .then(data => saveWeather({
          temperature:data.current.temperature,
          description:data.current.weather_descriptions,
          icon:data.current.weather_icons[0]
        }));

      }
      consultWeather();
  },[]);


  return (
    <Router>
      <ProductsProvider>
        <div className="container">
          <NavbarComerce 
            weather = {weather}
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
              />
            </Route>
          </Switch>
          </div>
        </ProductsProvider>
    </Router>
  )
}

export default App;
