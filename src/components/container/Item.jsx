import React,{useContext,useState} from 'react';
import { useParams } from 'react-router-dom';
import {Row,Col,Container, Button} from 'react-bootstrap';
import {ProductsContext} from '../context/ProductsContext';
import {CartContext} from '../context/CartContext';
import styled from 'styled-components';

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

const P = styled.p`
    color: #007bff;
`;

const Item = () => {

    const {products} = useContext(ProductsContext);
    const {saveSelection,saveCart,productSelected} = useContext(CartContext);
    
    const [quantity, saveQuantity] = useState(1);
    const {id} = useParams();

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
                    product.quantity++;
                }
            })

            localStorage.setItem('itemSelected',JSON.stringify(productStorage));

            saveCart(productStorage);
        }
        // alerta por si se agregó un item con una id que existe ya en el cart
        
    }




    return (
        <div className="item-detail">
        {item ? 
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
                    <Button
                            style={{width:"200%"}}
                            className="btn-block"
                            variant="success"
                            onClick={() => addCart()}
                    >Terminar compra</Button>
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
    : <div className="alert alert-danger" role="alert">El item buscado no fue encontrado.</div>} 
    </div>
    );
}
 
export default Item;