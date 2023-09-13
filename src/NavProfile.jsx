import { Container, Navbar, Image } from "react-bootstrap";

const NavProfile = () => {
  return (
    <Navbar className="p-1 mb-4" style={{ backgroundImage: "linear-gradient(black, #141414)" }}>
      <Container>
        <Navbar.Brand href="#">
          <Image src="./assets/netflix_logo.png" alt="Logo" style={{ width: "120px" }} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavProfile;
