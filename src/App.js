import React,{Fragment, BrowserRouter, Switch, Route, useState, useEffect} from 'react';
import NavbarComerce from './components/Navbar/NavbarComerce';
import ItemListContainer from './components/container/ItemListContainer';
import data from './data/data.json';

function App() {

  const [products, saveProducts] = useState([]);

  const [category, categorySelected] = useState([]);

  const [weather, saveWeather] = useState({
    temperature:'',
    description:'',
    icon:''
  });

  useEffect(()=>{ 
      saveProducts(data);
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
  },[])


  return (
   <Fragment>
      <div className="container">
        <NavbarComerce 
          products ={products}
          categorySelected ={categorySelected}
          weather = {weather}
        />
        <div className="body-items">
          <ItemListContainer 
            products = {products}
          />
        </div>
      </div>
   </Fragment>
  )
}

export default App;
