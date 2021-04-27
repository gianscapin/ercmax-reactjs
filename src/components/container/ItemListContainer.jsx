import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import ItemDetails from './ItemDetails';

const ItemListContainer = ({products}) => {
    return ( 
        <Container>
            <Row>
                {products.map(product =>(
                    <Col className="mt-5">
                        <ItemDetails 
                            key = {product.id}
                            product = {product}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
     );
}
 
export default ItemListContainer;