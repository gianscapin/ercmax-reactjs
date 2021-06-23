import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const Text = styled.h4`
    color: #0d6efd;
    margin-top:10px;
    margin-left:10px;
`;

const TextItem = styled.p`
    color: #0d6efd;
    margin-top:10px;
    margin-left:10px;
`;

const BtnDelete = styled.button`
    color: #ff0037 !important;
    font-size: 12px;
    font-weight: 500;
    padding: 0.5em 1.2em;
    background: rgba(0,0,0,0);
    border: solid #ff0037;
    transition: all 1s ease;
    position: relative;
    display: flex;
    justify-content: center;
    width: 50%;
    margin:auto;
    top:30%;
    :hover {
        background: #ff0037;
        color: #fff !important;
    }
`;

const SpanPrice = styled.span`
    font-weight: bold;
`;

function DataBuilder({type,info, save, alertItem}) {
    return (
        <Row>
            <Col>
                {info.image?
                    <img style={{
                        margin: "auto"}} src={info.image} height="120" width="120" alt={`Imagen del ${type}`} />:null
                        }
            </Col>
            <Col>
                <Text>{type}</Text>
                <TextItem>{info.name} <SpanPrice>${info.totalPrice}</SpanPrice></TextItem>
            </Col>
            <Col>
                {info?
                <BtnDelete onClick={() => alertItem(info.id, save(''))}>Modificar</BtnDelete>
                :null}
            </Col>
        </Row>
    )
}

export default DataBuilder
