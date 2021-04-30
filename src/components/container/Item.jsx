import React,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import {Row,Col,Container} from 'react-bootstrap';
import {ProductsContext} from '../context/ProductsContext';

const Item = () => {

    const {products} = useContext(ProductsContext);
    
    const {id} = useParams();

    let itemSelected = products.filter(product => product.id === id);

    let item = itemSelected[0];





    return (
        <div className="item-detail">
        {item ? 
            <Row>
                <Col>
                <img
                    className="img-fluid"
                    src={item.image}
                    alt=""
                />
                </Col>
                <Col>
                    <h6 className="font-weight-bold mb-3">{item.name}</h6>
                    <h3 className="font-weight-bold mb-3 p-0">
                    <strong>${item.price}</strong>
                    </h3>
                    <p>Marca: <span>{item.brand}</span></p>
                    {item.type == 'processor' ?
                        <div>
                        <p>Cantidad de núcleos: <span>{item.core}</span></p>
                        <p>Cantidad de hilos: <span>{item.threads}</span></p>
                        <p>Nanómetros: <span>{item.nanometters}</span></p>
                        <p>Integrada: <span>{item.apu}</span></p>
                        </div>
                        :null
                    }
                    {item.type == 'videocard' ?
                        <div>
                        <p>Manufacturero: <span>{item.manufacturer}</span></p>
                        <p>Cantidad de memoria: <span>{item.memory}</span></p>
                        <p>Tipo de memoria: <span>{item.typeMemory}</span></p>
                        <p>Interface: <span>{item.interfaceMemory}</span></p>
                        </div>
                        :null
                    }
                    {item.type == 'memory' ?
                        <div>
                        <p>Capacidad: <span>{item.capacity}</span></p>
                        <p>Ratio: <span>{item.rate}</span></p>
                        <p>Latencia: <span>{item.latency}</span></p>
                        </div>
                        :null
                    }
                    {item.type == 'cabinet' ?
                        <div>
                        <p>Capacidad de coolers: <span>{item.coolersCapacity}</span></p>
                        <p>Coolers incluidos: <span>{item.coolersIncluded}</span></p>
                        <p>Tipo de mother: <span>{item.mother}</span></p>
                        </div>
                        :null
                    }
                </Col>
            </Row>
    : <h1>El item buscado no existe.</h1>} 
    </div>
    );
}
 
export default Item;