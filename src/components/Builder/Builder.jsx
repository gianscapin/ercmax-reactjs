import React, { useState, useContext } from 'react';
import {Row, Col} from 'react-bootstrap';
import {ProductsContext} from '../Products/ProductsContext';
import ItemBuilder from './ItemBuilder';
import styled from 'styled-components';
import imageAmd from './amd.jpg';
import imageIntel from './intel.jpg';
import { CartContext } from '../Cart/CartContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import DataBuilder from './DataBuilder';

const Div = styled.div`
    background-color:#212529;
`;

const DivBuilder = styled.div`
    background-color:black;
    margin-bottom: 10px;
    border: snow 1px solid;
    margin-left:10px;
    margin-right:10px;
`;

const DivBuildComplete = styled.div`
    margin-top:50%;
`;


const ImagePlatform = styled.img`
    display:block;
    margin:auto;
    cursor:pointer;
    margin-bottom:20px;
`;

const Label = styled.label`
    height: 50px;
    color: #0d6efd;
    font-size: 40px;
    margin-bottom:20px;
    text-align: center;
    display:block;
`;

const TextBuild = styled.label`
    height: 30px;
    color: #0d6efd;
    font-size: 20px;
    margin-bottom:20px;
    text-align: center;
`;

const Text = styled.h4`
    color: #0d6efd;
    margin-top:10px;
    margin-left:10px;
`;

const TextPlatform = styled.h4`
    color: #0d6efd;
    margin-top:10px;
    margin-left:10px;
    text-align:center;
`;

const TextItem = styled.p`
    color: #0d6efd;
    margin-top:10px;
    margin-left:10px;
`;

const BtnDelete = styled.button`
    color: #ff0037 !important;
    font-size: 12px;
    font-weight: 500;
    padding: 0.5em 1.2em;
    background: rgba(0,0,0,0);
    border: solid #ff0037;
    transition: all 1s ease;
    position: relative;
    display: flex;
    justify-content: center;
    width: 50%;
    margin:auto;
    top:30%;
    :hover {
        background: #ff0037;
        color: #fff !important;
    }
`;

const BtnBuy = styled.button`
    color: #fff !important;
    font-size: 20px;
    font-weight: 500;
    padding: 0.5em 1.2em;
    background: #00ca5b;
    border: 2px solid;
    border-color: #00ca5b;
    position: relative;
    display: flex;
    margin: auto;
    padding-left: 50px;
    padding-right: 50px;
    :before {
    content:"";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 0px;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
        transition: all 1s ease;
    }
    :hover:before {
        width: 100%;
    }
`;

const BtnChoice = styled.button`
    color: #fff !important;
    font-size: 20px;
    font-weight: 500;
    padding: 0.5em 1.2em;
    background: #00ca5b;
    border: 2px solid;
    border-color: #00ca5b;
    position: relative;
    display: flex;
    margin: auto;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: 10px;
    margin-right: 10px;
    top: 25%;
    :before {
    content:"";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 0px;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
        transition: all 1s ease;
    }
    :hover:before {
        width: 100%;
    }
`;

const SpanPrice = styled.span`
    font-weight: bold;
`;

const Builder = () => {

    const {products} = useContext(ProductsContext);

    const {saveCart, cartProducts, clearCart} = useContext(CartContext);

    const [platform, savePlatform] = useState('');

    const [motherBoard,saveMotherBoard] = useState('');

    const [processor,saveProcessor] = useState('');

    const [videoCard,saveVideo] = useState('');

    const [memoryRam,saveMemory] = useState('');

    const [storage,saveStorage] = useState('');

    const [cabinet,saveCabinet] = useState('');

    const selectPlatformAmd = () =>{
        savePlatform('AMD');
    }

    const selectPlatformIntel = () =>{
        savePlatform('Intel');
    }


    const cardStyle = {
        margin:"auto"
    }

    const alertItem = (id) => {
        let products = [];
        products = cartProducts.filter(product => product.item.item.id !==id);
        localStorage.setItem('itemSelected',JSON.stringify(products));
        saveCart(products);
        if(cartProducts.length<=1){
            clearCart();
        }
    }

    const calculateSubtotal=()=>{
        let subtotal;
        let total = 0;
        cartProducts.forEach(product =>{
            subtotal = product.item.item.totalPrice * product.quantity;
            total+=subtotal;
        })
        return total;
    }


    return ( 
        <Div>
            {!platform?(
                <Row>
                    <Label>Elige tu plataforma</Label>
                    <Col><ImagePlatform src={imageAmd} height="170" width="420" alt="Foto" onClick={() => selectPlatformAmd()}/></Col>
                    <Col><ImagePlatform src={imageIntel} height="170" width="420" alt="Foto" onClick={() => selectPlatformIntel()}/></Col>
                    <br/>
                </Row>
            ):
            (
                <Row>
                    <Col>
                        <TextPlatform>Plataforma: {platform}</TextPlatform>
                        <DivBuilder>
                            <DataBuilder 
                                type="Motherboard"
                                info={motherBoard}
                                save={saveMotherBoard}
                                alertItem = {alertItem}
                            />
                        </DivBuilder>
                        <DivBuilder>
                            <DataBuilder 
                                type="Procesador"
                                info={processor}
                                save={saveProcessor}
                                alertItem = {alertItem}
                            />
                        </DivBuilder>
                        <DivBuilder>
                            <DataBuilder 
                                type="Placa de video"
                                info={videoCard}
                                save={saveVideo}
                                alertItem = {alertItem}
                            />
                        </DivBuilder>
                        <DivBuilder>
                            <DataBuilder 
                                type="Memoria"
                                info={memoryRam}
                                save={saveMemory}
                                alertItem = {alertItem}
                            />
                        </DivBuilder>
                        <DivBuilder>
                            <DataBuilder 
                                type="Almacenamiento"
                                info={storage}
                                save={saveStorage}
                                alertItem = {alertItem}
                            />
                        </DivBuilder>
                        <DivBuilder>
                            <DataBuilder 
                                type="Gabinete"
                                info={cabinet}
                                save={saveCabinet}
                                alertItem = {alertItem}
                            />
                        </DivBuilder>
                        <DivBuilder>
                        {cartProducts?
                            <Text>
                            Total de la compra: ${calculateSubtotal()}
                            </Text>
                            :null}
                        </DivBuilder>
                    </Col>
                    <Col>
                        {!motherBoard?
                        <Row>
                        <TextBuild>Elige la motherboard</TextBuild>
                        {products.map(product =>{
                            if(product.type === 'motherboard'){
                                if(product.platform == platform){
                                    return(
                                        <Col style={cardStyle}>
                                            <ItemBuilder
                                                key={product.id}
                                                product={product}
                                                saveType={saveMotherBoard}
                                            />
                                        </Col>
                                    )
                                }
                            }
                        })}
                        </Row>
                        :!processor?
                        <Row>
                        <TextBuild>Elige el procesador</TextBuild>
                        {products.map(product =>{
                            if(product.type === 'processor'){
                                if(product.brand == platform){
                                    return(
                                        <Col style={cardStyle}>
                                            <ItemBuilder
                                                key={product.id}
                                                product={product}
                                                saveType={saveProcessor}
                                            />
                                        </Col>
                                    )
                                }
                            }
                        })}
                        </Row>
                        :!videoCard?
                        <Row>
                        <TextBuild>Elige la placa de video</TextBuild>
                        {products.map(product =>{
                            if(product.type === 'videocard'){
                                    return(
                                            <Col style={cardStyle}>
                                                <ItemBuilder
                                                    key={product.id}
                                                    product={product}
                                                    saveType={saveVideo}
                                                />
                                            </Col>
                                    )
                            }
                        })}
                        {processor.apu?
                            <Col>
                                <BtnChoice
                                    onClick={() => saveVideo(processor)}
                                >Usar placa integrada</BtnChoice>
                            </Col>
                        :null}
                        </Row>
                        :!memoryRam?
                        <Row>
                        <TextBuild>Elige la memoria ram</TextBuild>
                        {products.map(product =>{
                            if(product.type === 'memory'){
                                    return(
                                        <Col style={cardStyle}>
                                            <ItemBuilder
                                                key={product.id}
                                                product={product}
                                                saveType={saveMemory}
                                            />
                                        </Col>
                                    )
                            }
                        })}
                        </Row>
                        :!storage?
                        <Row>
                        <TextBuild>Elige el almacenamiento</TextBuild>
                        {products.map(product =>{
                            if(product.type === 'storage'){
                                    return(
                                        <Col style={cardStyle}>
                                            <ItemBuilder
                                                key={product.id}
                                                product={product}
                                                saveType={saveStorage}
                                            />
                                        </Col>
                                    )
                            }
                        })}
                        </Row>
                        :!cabinet?
                        <Row>
                        <TextBuild>Elige el gabinete</TextBuild>
                        {products.map(product =>{
                            if(product.type === 'cabinet'){
                                    return(
                                        <Col style={cardStyle}>
                                            <ItemBuilder
                                                key={product.id}
                                                product={product}
                                                saveType={saveCabinet}
                                            />
                                        </Col>
                                    )
                            }
                        })}
                        </Row>
                        :
                        (
                            <DivBuildComplete>
                                <DivBuilder>
                                    <Label>Armado completado!</Label>
                                </DivBuilder>
                                <Link to="/cart" style={{textDecoration:'none'}}>
                                    <BtnBuy
                                    >Ir al carrito</BtnBuy></Link>
                            </DivBuildComplete>
                        )
                        }
                    </Col>
                </Row>
            )}
        </Div>
     );
}
 
export default Builder;