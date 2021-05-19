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

const Item = () => {
    

    const {products,loading} = useContext(ProductsContext);
    const {saveSelection,saveCart,productSelected} = useContext(CartContext);
    
    const [quantity, saveQuantity] = useState(1);
    const {id} = useParams();

    const [buttonCart, saveNameButtonCart] = useState({
        name:'Añadir compra'
    });
    const [itemsAdded, saveItemsAdded] = useState(0);

    let itemSelected = products.filter(product => product.id === id);

    let item = itemSelected[0];

    let productStorage = [];

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
                            <P>Cantidad Deseada</P>
                            <Btn
                                    style={{width:"200%"}}
                                    className="mt-2 mb-2"
                                    onClick={() => addCart()}
                            >Añadir al carrito</Btn>
                            {(itemsAdded>=1)?<div>
                            <Link to="/cart">
                            <BtnSuccess
                                    style={{width:"200%"}}
                                    className="mt-2 mb-2"
                            >{buttonCart.name}</BtnSuccess></Link></div>:null}
                        </Col>
                        <Col>
                        <P>
                            <strong>${item.price}</strong>
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
        
                            <select
                                onChange = {e => saveQuantity(e.target.value)}
                                value = {quantity}
                            >
                                <option value="" disabled>Seleccione</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </Col>
                    </Row>
            : <div className="alert alert-danger" role="alert">El item buscado no fue encontrado.</div>
            )}
        
    </div>
    );
}
 
export default Item;