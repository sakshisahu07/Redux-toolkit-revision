import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Layout=()=>{
    return(
      <>
      <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="home"></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="fs-1 " as={Link} to="home">Home |</Nav.Link>
              <Nav.Link className="fs-1 "as={Link} to="counter">Counter App |</Nav.Link>
              <Nav.Link className="fs-1 "as={Link} to="theme"> Theme Change|</Nav.Link>
              <Nav.Link className="fs-1 "as={Link} to="todo"> Todo List |</Nav.Link>
              <Nav.Link className="fs-1 "as={Link} to="contact">Contact us |</Nav.Link>
  
            </Nav>
          </Container>
        </Navbar>
     
      <hr size="4" color="red"/>
  
        <Outlet/>
  
      <hr size="4" color="red"/>
    </>
    )
}
export default Layout;
