import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarMenu() {
  return (
    <Navbar
      className="user-select-none"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <h2 className="mx-3">
            Resume<span className="text-info fw-bold">Maker</span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto text-center">
            <Nav.Link href="#">
              <Link className="navlinks" to="/about">
                about
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link className="navlinks" to="Templates">
                templates
              </Link>
            </Nav.Link>
            <NavDropdown title="Cover Letter" id="collasible-nav-dropdown">
              <NavDropdown.Item className="bg-white" href="#">
                <Link className="droplinks" to="cover_letter/cse_sample">
                  Computer Science Students
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="bg-white" href="#">
                <Link className="droplinks" to="cover_letter/eee_sample">
                  Electrical Engineering Students
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="bg-white" href="#">
                <Link className="droplinks" to="cover_letter/bba_sample">
                  Business administration Students
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <Link className="navlinks" to="/contact">
                contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
