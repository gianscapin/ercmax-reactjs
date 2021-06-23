import React, {useContext,Fragment} from 'react';
import {Row,Col,Container,Carousel} from 'react-bootstrap';
import ItemDetails from './ItemDetails';
import {ProductsContext} from '../Products/ProductsContext';
import Spinner from '../Spinner/Spinner';
import image1 from '../../images/imagen1.jpg';
import image2 from '../../images/imagen2.jpg';
import image3 from '../../images/imagen3.jpg';
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

const ItemListContainer = () => {

    const {salesOff,loading} = useContext(ProductsContext);

    
    
    return ( 
        <Container>
            {(loading)?<Spinner/>:(
                <Fragment>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                            />

                        </Carousel.Item>
                    </Carousel>
                    <DivRow>
                        <Row>
                            {salesOff.map(product =>(
                                <Col key={product.id}>
                                    <ColRow>
                                        <ItemDetails 
                                            key = {product.id}
                                            product = {product}
                                        />
                                    </ColRow>
                                </Col>
                            ))}
                        </Row>
                    </DivRow>
                </Fragment>
            )}
        </Container>
     );
}
 
export default ItemListContainer;