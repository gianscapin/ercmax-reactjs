import React, {useContext, useEffect} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import ItemDetails from './ItemDetails';
import {ProductsContext} from '../context/ProductsContext';


const ItemListContainer = () => {

    const {products} = useContext(ProductsContext);
    
    
    return ( 
        <Container>
            <Row>
                {products.map(product =>(
                    <Col className="mt-5 mb-5 mr-5 ml-5" key={product.id}>
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