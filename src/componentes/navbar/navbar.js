import { Navbar, Nav, Container} from "react-bootstrap"
import {Outlet, Link} from "react-router-dom"
import "./navbar.css"


const NavBarExamples = () => {
    return(
        <>
        <Navbar className="NavA" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Placas atermicas KT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/nosotros" >Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/tienda">Tienda</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
        <Outlet></Outlet>
    </section>
        </>
    )
}
export default  NavBarExamples