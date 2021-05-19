import React, {useContext, useEffect,Fragment} from 'react';
import {Row,Col,Container,Carousel} from 'react-bootstrap';
import ItemDetails from './ItemDetails';
import {ProductsContext} from '../context/ProductsContext';
import Spinner from '../Spinner/Spinner';
import image1 from '../../imagen1.jpg';
import image2 from '../../imagen2.jpg';
import image3 from '../../imagen3.jpg';

const ItemListContainer = () => {

    const {products,loading} = useContext(ProductsContext);
    
    
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
                    <Row style={{paddingTop:"10px", paddingBottom:"10px"}}>
                        {products.map(product =>(
                            <Col style={{marginTop:"5px",marginBottom:"10px",marginLeft:"5px",marginRight:"5px"}} key={product.id}>
                                <ItemDetails 
                                    key = {product.id}
                                    product = {product}
                                />
                            </Col>
                        ))}
                    </Row>
                </Fragment>
            )}
        </Container>
     );
}
 
export default ItemListContainer;