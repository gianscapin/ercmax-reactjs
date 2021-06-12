import React, {useContext, useState} from 'react';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const ItemBuilder = ({product, saveType}) => {

    const Btn = styled.a`
    color: #007bff !important;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    padding: 0.5em 1.2em;
    background: rgba(0,0,0,0);
    border: solid #007bff;
    transition: all 1s ease;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    margin-top: 25px;
    margin-right: auto;
    margin-left: auto;
    :hover {
        background: #007bff;
        color: #000000 !important;
    }
    `;

    const TextTotal = styled.p`
        text-decoration: line-through;
        color:red;
        display: inline-block;
    
    `;

    const TextOffer = styled.p`
    color:green;
    font-weight: bold;

    `;

    const Circle = styled.div`
        display: inline-block;
        font-size: 15px;
        text-align: center;
        vertical-align: middle;
        border-radius: 50%;
        background: #c2100a;
        margin-left:10px;
    `;

    const PStock = styled.p`
        background-color: black;
        color: red;
        text-align: center;
        font-weight: bold;
        font-size: x-large;
        position: relative;
        margin-top:10px;
    `;


    const {image, price, name,id,saleOff} = product;

    const totalPrice = () =>{
        return (price - (price*saleOff/100));
    }

    const {saveCart} = useContext(CartContext);

    const [quantity, saveQuantity] = useState(1);

    let productStorage = [];
    let item = product;

    const addCart = (e) => {
        e.preventDefault();

        let itemToCart = {
            item:{item},
            quantity:parseInt(quantity)
        }
        if(localStorage.getItem('itemSelected')){
            let array = JSON.parse(localStorage.getItem('itemSelected'));
            if(array.length>1){
                array.forEach(prod => productStorage.push(prod));
            }else{
                array.forEach(prod => productStorage.push(prod));
            }
        }
        if(!(productStorage.find(prod => prod.item.item.id === itemToCart.item.item.id))){
            productStorage.push(itemToCart);
            localStorage.setItem('itemSelected',JSON.stringify(productStorage));

            saveCart(productStorage);
            
        }else{
            productStorage.map(prod =>{
                if(prod.item.item.id === itemToCart.item.item.id){
                    prod.quantity+=itemToCart.quantity;
                }
            })

            localStorage.setItem('itemSelected',JSON.stringify(productStorage));

            saveCart(productStorage);
        }

        saveType(product);
    }

    const returnOptions = (number) =>{
        let array = [];
        for (let index = 1; index < number+1; index++) {
            array.push(index);
            
        }
        return array;
    }

    const itemStyle = {
        width: "10rem",
        display: "block",
        margin: "auto"
    }

    return ( 
        <Card bg ="dark" border="primary" style={itemStyle} className="text-center">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <div className="items">
                    <Card.Title>{name}</Card.Title>
                    {saleOff>0?
                    <div>
                        <TextTotal>${price} </TextTotal><Circle><span> - {saleOff}% OFF</span></Circle>
                        <TextOffer>${totalPrice()}</TextOffer>
                    
                    </div>:<Card.Text>${price}</Card.Text>
                    }
                    
                </div>

                <select
                    onChange = {e => saveQuantity(e.target.value)}
                    value = {quantity}
                >
                    <option value="" disabled>Seleccione</option>
                    {item.stock>0
                    ?
                    returnOptions(item.stock).map(number=>(
                    <option key={number} value={number}>{number}</option>
                    ))
                    :<option value="" disabled>No hay stock</option>}
                </select>
                    
                    {item.stock>0?
                    (
                        <Btn
                            className="mt-2 mb-2"
                            onClick={(e) => addCart(e)}
                        >Añadir al carrito</Btn>
                    ):<PStock>No hay stock.</PStock>}
            </Card.Body>
        </Card>
     );
}
 
export default ItemBuilder;