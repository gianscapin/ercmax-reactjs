import React,{Fragment} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import CartWidget from './CartWidget';

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
                        <Nav.Link href="/category/processor" style={{color: "#4888e9"}}>Procesadores</Nav.Link>
                        <Nav.Link href="/category/videocard" style={{color: "#4888e9"}}>Placas de video</Nav.Link>
                        <Nav.Link href="/category/memory" style={{color: "#4888e9"}}>Memorias Ram</Nav.Link>
                        <Nav.Link href="/category/motherboard" style={{color: "#4888e9"}}>Motherboards</Nav.Link>
                        <Nav.Link href="/category/storage" style={{color: "#4888e9"}}>Almacenamiento</Nav.Link>
                        <Nav.Link href="/category/cabinet" style={{color: "#4888e9"}}>Gabinetes</Nav.Link>
                        <Nav.Link href="#" style={{color: "#4888e9"}}>Notebooks</Nav.Link>
                        <Nav.Link href="#" style={{color: "#4888e9"}}>Nosotros</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </Fragment>
     );
}
 
export default NavbarComerce;