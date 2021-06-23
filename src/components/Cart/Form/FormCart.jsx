import React, {useState,useContext} from 'react'
import {Table, Col, Row, Alert} from 'react-bootstrap';
import styled from 'styled-components';
import {CartContext} from '../CartContext';
import {ProductsContext} from '../../Products/ProductsContext';
import {ClientContext} from '../ClientContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Ticket from '../Ticket';
import Spinner from '../../Spinner/Spinner';


const DivCol = styled.div`
    margin-right:10px;
`;

const ImageResume = styled.img`
    width:70px;
    height:60px;
    display:block;
    margin:auto;
    border-radius: 0.25em;
`;

const Div = styled.div`
    background-color:#212529;
`;

const DivTotal = styled.div`
    display:flex;
    justify-content: space-around;
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
    margin-top:65px;
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

const BtnClean = styled.button`
    color: #000000 !important;
    font-size: 15px;
    font-weight: 500;
    padding: 0.5em 1.2em;
    background: #cabc00;
    border: 2px solid;
    border-color: #cabc00;
    position: relative;
    display: flex;
    margin: auto;
    padding-left: 50px;
    padding-right: 50px;
    margin-top:10px;
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

const BtnIn = styled.a`
    color: #fff !important;
    justify-content: center;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    padding: 0.5em 1.2em;
    background: #00ca5b;
    border: 2px solid;
    border-color: #00ca5b;
    position: relative;
    display: flex;
    margin: auto;
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

const Label = styled.label`
    height: 30px;
    color: #0d6efd;
    font-size: x-large;
    margin-bottom:10px;
`;

const InputClient = styled.input`
    margin: 0 1rem;
    margin-bottom: 20px;

`;

const Resume = styled.h2`
    color: #0d6efd;
`;

const TableBackground = styled.div`
    border: grey 2px solid;
`;

const TotalPrice = styled.h3`
    color: #0d6efd;
`;

const FormCart = () => {

    const formStyle = {
        display:"flex",
        margin:"0 auto",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"normal",
        width:"70%"
    };

    const alertDanger = {
        marginLeft:"50%",
        right:"25%",
        textAlign:"center"
    }

    const {cartProducts, clearCart} = useContext(CartContext);

    const {buyProducts} = useContext(ProductsContext);

    const {client,saveClient,addClientToFirestore,clientCode} = useContext(ClientContext);

    const [error,saveError] = useState(false);

    const [load, saveLoad] = useState(false);


    const {name,email,phone} = client;

    const getInfo = e => {
        const total = calculateSubtotal();
        saveClient({
            ...client,
            itemsBuy:cartProducts,
            totalBuy:total,
            [e.target.name]:e.target.value
        });
        
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

    const addItemsToClients = () => {
        const total = calculateSubtotal();
        saveClient({
            ...client,
            itemsBuy:cartProducts,
            totalBuy:total
        })
    }


    const confirmBuy = (e) =>{
        e.preventDefault();
        
        if(name.trim() === '' || email.trim() === '' || phone.trim() === ''){
            saveError(true);
            return;
        }

        saveError(false);

        addItemsToClients();

        addClientToFirestore(client);

        buyProducts(cartProducts);


        saveLoad(true);
        clearCart();

    }

    return ( 
            <Div>
                {error?<Alert variant="danger" style={alertDanger}>Tenés que completar todos los campos para continuar!</Alert>:null}
                {clientCode? <Ticket clientCode={clientCode} />:(
                    load?<Spinner/>:
                    <React.Fragment>
                        <Row>
                        <Col>
                            <form 
                                style={formStyle}
                                onSubmit={(e) => confirmBuy(e)}
                            >
                                <Label>Nombre</Label>
                                <InputClient
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={getInfo}
                                    placeholder="Introduce tu nombre"
                                />

                                <Label>Email</Label>
                                <InputClient
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={getInfo}
                                    placeholder="Introduce tu email"
                                />

                                <Label>Telefono de contacto</Label>
                                <InputClient
                                    type="number"
                                    name="phone"
                                    value={phone}
                                    onChange={getInfo}
                                    placeholder="Introduce tu número"
                                />

                                <BtnBuy
                                    type="submit"
                                >Confirmar compra</BtnBuy>
                            </form>
                        </Col>
                        <Col>
                            <DivCol>
                                <Resume>RESUMEN DEL PEDIDO</Resume>
                                <TableBackground>
                                    <Table responsive variant="dark">
                                        <tbody>
                                            {cartProducts.map(productArr =>(
                                                <tr key={productArr.item.item.id}>
                                                    <td><ImageResume src={productArr.item.item.image}/></td>
                                                    <td>{productArr.item.item.name}</td>
                                                    <td>{productArr.quantity}</td>
                                                    <td>$ {productArr.item.item.totalPrice}</td>
                                                </tr>
                                            ))}
                                        </tbody>

                                            
                                    </Table>
                                </TableBackground>
                                <DivTotal>
                                    <TotalPrice>TOTAL:</TotalPrice>
                                    <TotalPrice><b>${calculateSubtotal()}</b></TotalPrice>
                                </DivTotal>
                                <Link to ='/cart' style={{textDecoration:'none'}}>
                                <BtnClean 
                                    variant="outline-warning" 
                                >Volver al carrito</BtnClean></Link>
                            </DivCol>
                        </Col>
                    </Row>
                    <br/>
                    <Link to ='/' style={{textDecoration:'none'}}>
                    <BtnIn 
                    >Volver a inicio</BtnIn></Link>
                </React.Fragment>
                )}
                
            </Div>
     );
}
 
export default FormCart;