import React from 'react';
import {Col,Container} from 'react-bootstrap';
import ItemDetails from './ItemDetails';

const CategoryProducts = ({products}) => {

    return ( 
        <Container>
            <Col xs={12} md={18}>
            {products.map(product =>(
                <ItemDetails 
                    key = {product.id}
                    product = {product}
                />
            ))}
            </Col>
        </Container>
     );
}
 
export default CategoryProducts;