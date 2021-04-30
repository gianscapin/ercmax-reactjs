import React,{createContext, useState, useEffect} from 'react';
import data from '../../data/data.json';

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
    const [products, saveProducts] = useState([]);

    const [idItem, saveItemId] = useState({});



    useEffect(()=>{
        saveProducts(data);
    },[]);

    return(
        <ProductsContext.Provider
            value={{
                products,
                saveItemId
            }}
        >
            {props.children}
        </ProductsContext.Provider>
    );
    
}

export default ProductsProvider;
