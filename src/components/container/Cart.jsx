import React, {useContext,Fragment} from 'react';
import {CartContext} from '../context/CartContext';
import {Table, Button} from 'react-bootstrap';
import styled from 'styled-components'

const Image = styled.img`
    width:140px;
    height:120px;
    display:block;
    margin:auto;
`;

const Div = styled.div`
    background-color:#212529;
`;

const Btn = styled.button`
    width:90%;
    transform: translateX(6%);
    margin-bottom:16px;

`;



const Cart = () => {

    const {cartProducts,saveCart,clearCart} = useContext(CartContext);

    const calculateSubtotal=()=>{
        let subtotal;
        let total = 0;
        cartProducts.forEach(product =>{
            subtotal = product.item.item.price * product.quantity;
            total+=subtotal;
        })
        return total;
    }

    const deleteProduct = (id) =>{
        let products = [];
        products = cartProducts.filter(product => product.item.item.id !==id);
        localStorage.setItem('itemSelected',JSON.stringify(products));
        saveCart(products);
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
                                    <td><Image src={productArr.item.item.image}/></td>
                                    <td>{productArr.item.item.name}</td>
                                    <td>{productArr.quantity}</td>
                                    <td>$ {productArr.item.item.price}</td>
                                    <td><Button variant="outline-danger" onClick={() => deleteProduct(productArr.item.item.id)}>Eliminar</Button></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3"><b>Subtotal</b></td>
                                <td><b>${calculateSubtotal()}</b></td>
                                <td><Button variant="outline-warning" onClick={(e) => clear(e)}>Vaciar carrito</Button> </td>
                            </tr>
                        </tfoot>
                    </Table>
                    <Btn
                        className="btn btn-success"
                        style={{width:"90%", }}
                        variant="success"
                        onClick={() => alert('Comprando')}
                    >Comprar</Btn>
                </Div>
            ):<p>No hay productos seleccionados</p>}
        </Fragment>
     );
}
 
export default Cart;