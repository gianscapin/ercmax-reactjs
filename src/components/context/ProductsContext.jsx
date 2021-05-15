import React,{createContext, useState, useEffect} from 'react';
import data from '../../data/data.json';
import {getFirestore} from '../../firebase';

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
    const [products, saveProducts] = useState([]);

    const [idItem, saveItemId] = useState({});

    /*
    const [items, saveItems] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection('items');
        itemsCollection.get()
            .then((querySnapshot)=>{
                if(querySnapshot.size === 0){
                    console.log('No hay items');
                }else{
                    console.log(`Hay ${querySnapshot.size} items`);
                
                    const documents = querySnapshot.docs.map(doc => {
                        return{
                            id:doc.id,
                            ...doc.data()
                        }});
                    saveItems(documents);
                }
            })
            .catch(error => console.log('ocurrio un error '+error));

    }, []);
    */


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
