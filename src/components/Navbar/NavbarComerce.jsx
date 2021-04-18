import React,{Fragment} from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Cart from './CartWidget';

const NavbarComerce = () => {
    return ( 
        <Fragment>
                <Cart />
                <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#191a1d"}}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-center" style={{ flex: 1}}>
                        <Nav.Link href="#" style={{color: "#4888e9"}}>Procesadores</Nav.Link>
                        <Nav.Link href="#" style={{color: "#4888e9"}}>Placas de video</Nav.Link>
                        <Nav.Link href="#" style={{color: "#4888e9"}}>Memorias Ram</Nav.Link>
                        <Nav.Link href="#" style={{color: "#4888e9"}}>Motherboards</Nav.Link>
                        <Nav.Link href="#" style={{color: "#4888e9"}}>Almacenamiento</Nav.Link>
                        <Nav.Link href="#" style={{color: "#4888e9"}}>Gabinetes</Nav.Link>
                        <Nav.Link href="#" style={{color: "#4888e9"}}>Notebooks</Nav.Link>
                        <Nav.Link href="#" style={{color: "#4888e9"}}>Nosotros</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </Fragment>
     );
}
 
export default NavbarComerce;