import React from 'react';
import {Alert} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Text = styled.h3`
    text-align:center;
    color:#0d6efd;
`;

const CodeText = styled.h4`
    background-color: #0d6efd;
    color: snow;
    margin-left: 20%;
    margin-right: 20%;
    text-align:center;
`;

const Div = styled.div`
    background-color:#212529;
    margin-bottom:10px;
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

const Ticket = ({clientCode}) => {
    return ( 
        <Div>
            <Alert variant='success' style={{textAlign:'center'}}>La compra se realizó con éxito!</Alert>

            <CodeText>Tu código de la compra es: {clientCode}</CodeText>
            <br/>
            <Text>Gracias por confiar en nosotros.</Text>
            <br/>
            <Link to ='/' style={{textDecoration:'none'}}>
                <BtnIn 
                >Volver a inicio</BtnIn>
            </Link>

        </Div>
     );
}
 
export default Ticket;