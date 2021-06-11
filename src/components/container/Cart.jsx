import React, {useContext,Fragment} from 'react';
import {CartContext} from '../context/CartContext';
import {Table} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Image = styled.img`
    width:140px;
    height:120px;
    display:block;
    margin:auto;
`;


const Div = styled.div`
    background-color:#212529;
`;


const BtnDelete = styled.button`
    color: #ff0037 !important;
    font-size: 15px;
    font-weight: 500;
    padding: 0.5em 1.2em;
    background: rgba(0,0,0,0);
    border: solid #ff0037;
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



const Cart = () => {

    const {cartProducts,saveCart,clearCart} = useContext(CartContext);

    const calculateSubtotal=()=>{
        let subtotal;
        let total = 0;
        cartProducts.forEach(product =>{
            subtotal = product.item.item.totalPrice * product.quantity;
            total+=subtotal;
        })
        return total;
    }

    const deleteProduct = (id) =>{
        let products = [];
        products = cartProducts.filter(product => product.item.item.id !==id);
        localStorage.setItem('itemSelected',JSON.stringify(products));
        saveCart(products);
        if(cartProducts.length<=1){
            clearCart();
        }
    }

    const clear = (e) =>{
        e.preventDefault();
        clearCart();
    }


    return ( 
        <Fragment>
            {cartProducts?(
                <Div>
                    <Table responsive variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre del producto</th>
                                <th>Cantidad del producto</th>
                                <th>Precio unitario</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProducts.map(productArr =>(
                                <tr key={productArr.item.item.id}>
                                    <td><Image style={{borderRadius: "0.25em"}} src={productArr.item.item.image}/></td>
                                    <td>{productArr.item.item.name}</td>
                                    <td>{productArr.quantity}</td>
                                    <td>$ {productArr.item.item.totalPrice}</td>
                                    <td><BtnDelete onClick={() => deleteProduct(productArr.item.item.id)}>Eliminar</BtnDelete></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3"><b>Subtotal</b></td>
                                <td><b>${calculateSubtotal()}</b></td>
                                <td><BtnClean variant="outline-warning" onClick={(e) => clear(e)}>Vaciar carrito</BtnClean> </td>
                            </tr>
                        </tfoot>
                    </Table>
                    <Link to="/form" style={{textDecoration:'none'}}>
                    <BtnBuy
                    >Comprar</BtnBuy></Link>
            </Div>)
            :<div><div className="alert alert-danger mt-16" role="alert">No hay productos seleccionados.</div>
            <BtnIn 
            href='/'
            >Volver a inicio</BtnIn></div>
            
            }
        </Fragment>

     );
}
 
export default Cart;