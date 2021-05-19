import React from 'react';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const ItemDetails = ({product}) => {

    const Btn = styled.a`
    color: #007bff !important;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    padding: 0.5em 1.2em;
    background: rgba(0,0,0,0);
    border: solid #007bff;
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
        background: #007bff;
        color: #000000 !important;
    }
`;


    const {image, price, name,id} = product;


    return ( 
        <Card bg ="dark" border="primary" style={{ width: '18rem' }} className="text-center">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <div className="items">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                </div>
                    <Btn 
                        href={`/items/${id}`}
                    >
                        Ver detalles
                    </Btn>
            </Card.Body>
        </Card>
     );
}
 
export default ItemDetails;