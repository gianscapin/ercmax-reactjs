import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const ItemDetails = ({product}) => {


    const {image, price, name,id} = product;


    return ( 
        <Card bg ="dark" border="primary" style={{ width: '18rem' }} className="text-center">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <div className="items">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                </div>
                <Button 
                    variant="primary"
                    href={`/items/${id}`}
                >
                    Ver detalles
                </Button>
            </Card.Body>
        </Card>
     );
}
 
export default ItemDetails;