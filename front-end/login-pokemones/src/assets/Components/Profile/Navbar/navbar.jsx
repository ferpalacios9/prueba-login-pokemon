import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#Profile">Profile</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#search/pokemons">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;