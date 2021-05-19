import React, { useContext } from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import ItemDetails from './ItemDetails';
import {useParams} from 'react-router-dom';
import {ProductsContext} from '../context/ProductsContext';
import Spinner from '../Spinner/Spinner';

const CategoryProducts = () => {

    const {products,loading} = useContext(ProductsContext);
    
    const {cat} = useParams();

    let category = products.filter(product => product.type === cat);


    return ( 
        <Container>
            {loading ? <Spinner/>:(
                <Row style={{paddingTop:"10px", paddingBottom:"10px"}}>
                    {category.map(cat =>(
                        <Col style={{marginTop:"5px",marginBottom:"10px",marginLeft:"5px",marginRight:"5px"}}>
                            <ItemDetails 
                                key = {cat.id}
                                product = {cat}
                            />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
     );
}
 
export default CategoryProducts;