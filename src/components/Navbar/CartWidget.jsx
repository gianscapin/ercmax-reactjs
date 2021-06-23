import React,{useContext} from 'react'
import image from './ercmaxLogo.png';
import {Row, Col, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {CartContext} from '../Cart/CartContext';
import styled from 'styled-components';

const DivContainer = styled.div`
    background-color: black;
`;

const CartWidget = () => {

    const {cartProducts} = useContext(CartContext);

    const totalQuantity = () =>{
        let count = 0;
        if(cartProducts){
            cartProducts.forEach(product => count+=(product.quantity))
        }
        return count;
    }
    return ( 
        <React.Fragment>
            <DivContainer>
                <Row>
                    <Col>
                        <Link to ="/">
                            <Image src= {image} alt='logo'/>
                        </Link>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <div className="weather">
                            <td>
                                {totalQuantity()>0?
                                 <Link to ="/cart">
                                    <div className="justify-content-end" style={{ flex: 1}} className="text-center"><a href="/cart"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#007bff" width="50px" height="50px"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg></a>
                                    </div>
                                </Link>
                                :null}
                            </td>
                            <td>{totalQuantity()>1?<p>{totalQuantity()} productos</p>:totalQuantity()>0 && totalQuantity()<=1?<p>{totalQuantity()} producto</p>:null}</td>
                        </div>
                    </Col>
                </Row>
            </DivContainer>
        </React.Fragment>
     );
}
 
export default CartWidget;