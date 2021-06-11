import React,{createContext, useState, useEffect} from 'react';
import data from '../../data/data.json';
import {getFirestore} from '../../firebase';

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
    const [products, saveProducts] = useState([]);

    const [idItem, saveItemId] = useState({});

    const [loading, saveLoading] = useState(false);

    const [salesOff, saveOffers] = useState([]);

    const addTotalPrice = (array) => {
        let listOffers = array.map(product => {
            if(product.saleOff>0){
                return{
                    ...product,
                    totalPrice: product.price - (product.price*(product.saleOff/100))
                }
            }else{
                return{
                    ...product,
                    totalPrice: product.price
                }
            }
        })
        return listOffers;
    }

    const buyProducts = (array) => {
            const db = getFirestore();
            const itemsCollection = db.collection('items');
            array.forEach(product =>{
                let stockProduct = product.item.item.stock;
                itemsCollection.doc(product.item.item.reference).update({
                    "stock":stockProduct - product.quantity
                })
                .then(()=>{
                    
                })
            })
    }


    useEffect(()=>{

        const logProducts = async () =>{
            let items = [];
            let offers = [];
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
           let allOffers = await itemsCollection.where('saleOff','>',0).get();
           for (const doc of allItems.docs){
               items.push(doc.data());
           }

           for (const doc of allOffers.docs){
            offers.push(doc.data());
            }


           setTimeout(()=>{
               saveLoading(false);
               saveProducts(addTotalPrice(items));
               saveOffers(addTotalPrice(offers));
           },500)
        }
        try {
            logProducts();
        } catch (error) {
            console.log(error);
        }
        
    },[]);

    return(
        <ProductsContext.Provider
            value={{
                products,
                saveItemId,
                loading,
                salesOff,
                buyProducts
            }}
        >
            {props.children}
        </ProductsContext.Provider>
    );
    
}

export default ProductsProvider;
