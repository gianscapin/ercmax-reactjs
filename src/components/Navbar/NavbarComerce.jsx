import React,{Fragment} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import CartWidget from './CartWidget';
import styled from 'styled-components';

const Span = styled.span`
    font-weight: bold;
    color: #4888e9;
`;

const SpanNav = styled.span`
    color: #4888e9;
`;

const NavbarComerce = () => {

    return ( 
        <Fragment>
                <CartWidget 
                />
                <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#191a1d"}}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-center" style={{ flex: 1}}>
                        <Nav.Link href="/" style={{color: "#4888e9"}}>Inicio</Nav.Link>
                        <Nav.Link href="/category/processor"><SpanNav>Procesadores</SpanNav></Nav.Link>
                        <Nav.Link href="/category/videocard"><SpanNav>Placas de video</SpanNav></Nav.Link>
                        <Nav.Link href="/category/memory"><SpanNav>Memorias Ram</SpanNav></Nav.Link>
                        <Nav.Link href="/category/motherboard"><SpanNav>Motherboards</SpanNav></Nav.Link>
                        <Nav.Link href="/category/storage"><SpanNav>Almacenamiento</SpanNav></Nav.Link>
                        <Nav.Link href="/category/cabinet"><SpanNav>Gabinetes</SpanNav></Nav.Link>
                        <Nav.Link href="/builder"><Span>Arma tu PC</Span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </Fragment>
     );
}
 
export default NavbarComerce;