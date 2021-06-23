import React, {createContext, useState } from 'react';
import {getFirestore} from '../../firebase';

export const ClientContext = createContext();

const ClientProvider = (props) =>{

    const [client, saveClient] = useState({
        name:'',
        email:'',
        phone:'',
        itemsBuy:{},
        totalBuy:''
    });

    const [clientCode, saveClientCode] = useState('');

    const addClientToFirestore = (client) => {
        const db = getFirestore();
        const clientDb = db.collection('clients');
        clientDb.add({
            name: client.name,
            email: client.email,
            phone:client.phone,
            itemsBuy:client.itemsBuy,
            totalBuy:client.totalBuy
        })
        .then((docRef) => {
            saveClientCode(docRef.id);
            clientDb.docRef.update({
                id: docRef.id
            })
            
            .catch(error => console.log(error))

        })
        .catch(error => console.log(error))

    }


    return(
        <ClientContext.Provider
            value={{
                saveClient,
                client,
                clientCode,
                addClientToFirestore
            }}
        >
            {props.children}
        </ClientContext.Provider>
    )

}

export default ClientProvider;