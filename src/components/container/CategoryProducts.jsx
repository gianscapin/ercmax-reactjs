import React, { useContext } from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import ItemDetails from './ItemDetails';
import {useParams} from 'react-router-dom';
import {ProductsContext} from '../context/ProductsContext';

const CategoryProducts = () => {

    const {products} = useContext(ProductsContext);
    
    const {cat} = useParams();

    let category = products.filter(product => product.type === cat);


    return ( 
        <Container>
            <Row>
                {category.map(cat =>(
                    <Col className="mt-5">
                        <ItemDetails 
                            key = {cat.id}
                            product = {cat}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
     );
}
 
export default CategoryProducts;