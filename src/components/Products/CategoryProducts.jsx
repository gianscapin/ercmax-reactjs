import React, { useContext } from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import ItemDetails from '../Items/ItemDetails';
import {useParams} from 'react-router-dom';
import {ProductsContext} from './ProductsContext';
import Spinner from '../Spinner/Spinner';
import styled from 'styled-components';

const DivRow = styled.div`
    padding-top:10px;
    padding-bottom:10px;
`;

const ColRow = styled.div`
    margin-top:5px;
    margin-bottom:10px;
    margin-left:5px;
    margin-right:5px;
`;

const CategoryProducts = () => {

    const {products,loading} = useContext(ProductsContext);
    
    const {cat} = useParams();

    let category = products.filter(product => product.type === cat);


    return ( 
        <Container>
            {loading ? <Spinner/>:(
                <DivRow>
                    <Row>
                        {category.map(cat =>(
                            
                            <Col key={cat.id}>
                                <ColRow>
                                    <ItemDetails 
                                        key = {cat.id}
                                        product = {cat}
                                    />
                                </ColRow>
                            </Col>
                        ))}
                    </Row>
                </DivRow>
            )}
        </Container>
     );
}
 
export default CategoryProducts;