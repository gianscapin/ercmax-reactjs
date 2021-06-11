import React,{useContext,useState} from 'react';
import { useParams } from 'react-router-dom';
import {Row,Col,Container, Button} from 'react-bootstrap';
import {ProductsContext} from '../context/ProductsContext';
import {CartContext} from '../context/CartContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Spinner from '../Spinner/Spinner';

const Image = styled.img`
    padding-top:10px;
    padding-bottom:10px;
    padding-left:10px;
    padding-right:10px;
    width:420px;
    height:360px;
    display:block;
    margin:auto;
`;

const Btn = styled.button`
    color: #007BFF !important;
    font-size: 20px;
    font-weight: 500;
    padding: 0.5em 1.2em;
    background: rgba(0,0,0,0);
    border: solid steelblue;
    transition: all 1s ease;
    position: relative;
    :hover {
        background: #007BFF;
        color: #fff !important;
    }
`;

const BtnSuccess = styled.button`
    color: #00ff80 !important;
    font-size: 20px;
    font-weight: 500;
    padding: 0.5em 1.2em;
    background: rgba(0,0,0,0);
    border: solid springgreen;
    transition: all 1s ease;
    position: relative;
    :hover {
        background: #00ff80;
        color: #000000 !important;
    }
`;

const P = styled.p`
    color: #007bff;
`;

const PStock = styled.p`
    background-color: black;
    color: red;
    text-align: center;
    font-weight: bold;
    font-size: x-large;
    width:200%;
    position: relative;
`;

const Item = () => {
    

    const {products,loading} = useContext(ProductsContext);
    const {saveCart} = useContext(CartContext);
    
    const [quantity, saveQuantity] = useState(1);
    const {id} = useParams();
    const [itemPage, saveItemPage] = useState({});

    const [buttonCart, saveNameButtonCart] = useState({
        name:'Añadir compra'
    });
    const [itemsAdded, saveItemsAdded] = useState(0);

    let itemSelected = products.filter(product => product.id === id);

    let item = itemSelected[0];
    let productStorage = [];
    let stocks = [];

    const addCart = () => {
        let itemToCart = {
            item:{item},
            quantity:parseInt(quantity)
        }
        if(localStorage.getItem('itemSelected')){
            let array = JSON.parse(localStorage.getItem('itemSelected'));
            if(array.length>1){
                array.forEach(product => productStorage.push(product));
            }else{
                array.forEach(product => productStorage.push(product));
            }
        }
        if(!(productStorage.find(product => product.item.item.id === itemToCart.item.item.id))){
            productStorage.push(itemToCart);
            localStorage.setItem('itemSelected',JSON.stringify(productStorage));

            saveCart(productStorage);
            
        }else{
            productStorage.map(product =>{
                if(product.item.item.id === itemToCart.item.item.id){
                    product.quantity+=itemToCart.quantity;
                }
            })

            localStorage.setItem('itemSelected',JSON.stringify(productStorage));

            saveCart(productStorage);
        }
        // alerta por si se agregó un item con una id que existe ya en el cart
        saveNameButtonCart({
            name:'Terminar comprando'
        });
        saveItemsAdded(itemsAdded+1);
    }

    const returnOptions = (number) =>{
        let array = [];
        for (let index = 1; index < number+1; index++) {
            array.push(index);
            
        }
        return array;
    }





    return (
        <div className="item-detail">
            {loading ? <Spinner/> :
            (
                item ? 
                    <Row>
                        <Col>
                        <Image
                            src={item.image}
                            alt=""
                        />
                        </Col>
                        <Col>
                            <P>{item.name}</P>
                            <P>Marca: </P>
                            {item.type === 'processor' ?
                                <div>
                                <P>Cantidad de núcleos: </P>
                                <P>Cantidad de hilos: </P>
                                <P>Nanómetros: </P>
                                <P>Integrada: </P>
                                </div>
                                :null
                            }
                            {item.type === 'videocard' ?
                                <div>
                                <P>Manufacturero: </P>
                                <P>Cantidad de memoria: </P>
                                <P>Tipo de memoria: </P>
                                <P>Interface: </P>
                                </div>
                                :null
                            }
                            {item.type === 'memory' ?
                                <div>
                                <P>Capacidad: </P>
                                <P>Ratio: </P>
                                <P>Latencia: </P>
                                </div>
                                :null
                            }
                            {item.type === 'cabinet' ?
                                <div>
                                <P>Capacidad de coolers: </P>
                                <P>Coolers incluidos: </P>
                                <P>Tipo de mother: </P>
                                </div>
                                :null
                            }
                            {item.type === 'motherboard' ?
                                <div>
                                <P>Cantidad de sata: </P>
                                <P>Cantidad de usb 2.0: </P>
                                <P>Cantidad de usb3: </P>
                                <P>Plataforma: </P>
                                <P>Factor: </P>
                                </div>
                                :null
                            }
                            {item.type === 'storage' ?
                                <div>
                                <P>Cache: </P>
                                <P>Capacidad: </P>
                                <P>Consumo: </P>
                                <P>Transferencia: </P>
                                </div>
                                :null
                            }
                            <P>Cantidad Deseada</P>
                            {item.stock>0?(
                            <Btn
                            style={{width:"200%"}}
                            className="mt-2 mb-2"
                            onClick={() => addCart()}
                            >Añadir al carrito</Btn>
                            ):<PStock>No hay stock.</PStock>}
                            {(itemsAdded>=1)?<div>
                            <Link to="/cart">
                            <BtnSuccess
                                    style={{width:"200%"}}
                                    className="mt-2 mb-2"
                            >{buttonCart.name}</BtnSuccess></Link></div>:null}
                        </Col>
                        <Col>
                        <P>
                            {item.saleOff>0 ? <strong>${item.totalPrice}</strong> : <strong>${item.price}</strong>}
                        </P>
                        <P>{item.brand ? item.brand :item.name}</P>
                            {item.type === 'processor' ?
                                <div>
                                <P><b>{item.core}</b></P>
                                <P><b>{item.threads}</b></P>
                                <P><b>{item.nanometters}</b></P>
                                <P><b>{item.apu?'Si':'No'}</b></P>
                                </div>
                                :null
                            }
                            {item.type === 'videocard' ?
                                <div>
                                <P><b>{item.manufacturer}</b></P>
                                <P><b>{item.memory}</b></P>
                                <P><b>{item.typeMemory}</b></P>
                                <P><b>{item.interfaceMemory}</b></P>
                                </div>
                                :null
                            }
                            {item.type === 'memory' ?
                                <div>
                                <P><b>{item.capacity}</b></P>
                                <P><b>{item.rate}</b></P>
                                <P><b>{item.latency}</b></P>
                                </div>
                                :null
                            }
                            {item.type === 'cabinet' ?
                                <div>
                                <P><b>{item.coolersCapacity}</b></P>
                                <P><b>{item.coolersIncluded}</b></P>
                                <P><b>{item.mother}</b></P>
                                </div>
                                :null
                            }
                            {item.type === 'motherboard' ?
                                <div>
                                <P>{item.sata}</P>
                                <P>{item.usb2}</P>
                                <P>{item.usb3}</P>
                                <P>{item.platform}</P>
                                <P>{item.factor}</P>
                                </div>
                                :null
                            }
                            {item.type === 'storage' ?
                                <div>
                                <P>{item.cache}</P>
                                <P>{item.capacity} gb</P>
                                <P>{item.consumption} W</P>
                                <P>{item.transferency}</P>
                                </div>
                                :null
                            }
        
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
                        </Col>
                    </Row>
            : <div className="alert alert-danger" role="alert">El item buscado no fue encontrado.</div>
            )}
        
    </div>
    );
}
 
export default Item;