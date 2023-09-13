import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { FaSearch, FaBell } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MyNav = (props) => {
  const location = useLocation();
  console.log(location);
  return (
    <Navbar variant="dark" expand="lg" className="mb-4 p-0">
      <Container>
        <Navbar.Brand href="#">
          <img src="/assets/netflix_logo.png" alt="Logo Netflix" style={{ width: "80px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0 text-white">
            <Nav.Item className="d-none">
              <Nav.Link active aria-current="page" href="#">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Link className={`nav-link ${location.pathname === "/tv-shows" ? "active fw-bold" : ""}`} to="/tv-shows">
                Tv Shows
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link active className="text-white-50" href="#">
                Movies
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link active className="text-white-50" href="#">
                Recently Added
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link active className="text-white-50" href="#">
                My List
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <div className="user d-flex">
          <div className="pe-3">
            <FaSearch style={{ fontSize: "1.2rem", color: "grey" }} />
          </div>
          <div>
            <h5 className="pe-3 text-secondary my-1" style={{ fontSize: "0.9rem" }}>
              KIDS
            </h5>
          </div>
          <div className="pe-3">
            <FaBell style={{ fontSize: "1.2rem", color: "grey" }} />
          </div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" as="a" className="text-white">
              <img src="/assets/avatar.png" alt="User" style={{ width: "23px" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="dropdown-menu-end border border-light"
              style={{ backgroundColor: "#141414", fontSize: "0.9rem" }}
            >
              <Dropdown.Item href="#/profile" className="text-white d-flex">
                Profile Page
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/settings" className="text-white">
                Settings Page
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNav;
