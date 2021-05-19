import React,{createContext, useState, useEffect} from 'react';
import data from '../../data/data.json';
import {getFirestore} from '../../firebase';

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
    const [products, saveProducts] = useState([]);

    const [idItem, saveItemId] = useState({});

    const [loading, saveLoading] = useState(false);

    useEffect(()=>{

        const logProducts = async () =>{
            let items = [];
            const db = getFirestore();
            const itemsCollection = db.collection('items');
            /*
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
                        saveLoading(true);

                        setTimeout(() =>{
                            saveLoading(false);
                            saveProducts(documents);
                        },1000)
                    }
                })
                .catch(error => console.log('ocurrio un error '+error));
            */
            saveLoading(true);
           let allItems = await itemsCollection.get();
           for (const doc of allItems.docs){
               items.push(doc.data());
           }

           setTimeout(()=>{
               saveLoading(false);
               saveProducts(items);
           },500)
        }
        logProducts();
        
    },[]);


    return(
        <ProductsContext.Provider
            value={{
                products,
                saveItemId,
                loading
            }}
        >
            {props.children}
        </ProductsContext.Provider>
    );
    
}

export default ProductsProvider;
