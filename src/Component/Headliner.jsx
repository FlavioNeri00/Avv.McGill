import { Link } from "react-router-dom";
import avvocato from "../imm/Avvocato-cassazionista.png";
import logo from "../imm/Better_Call_Saul_logo300x146.png";

const { Navbar, Nav, Container } = require("react-bootstrap");
const Headliner = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#162542" }}>
        <Container className="d-flex align-items-center justify-content-end">
          <span style={{ fontWeight: "bold", color: "white" }}>
            Potete contattarmi al numero +39 333 333 3333
          </span>
        </Container>
      </Navbar>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#3d88cb",
          height: "100px",
          boxShadow: "50px",
        }}
      >
        <Container>
          <Navbar.Brand className="fs-2 me-5">
            <img
              style={{ width: "100px", boxShadow: "100px" }}
              src={logo}
              alt=""
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" style={{ textDecoration: "none" }}>
                <h5 className="fs-5 nav-link mt-1">Home</h5>
              </Link>

              <Link to="/contatti" style={{ textDecoration: "none" }}>
                <h5 className="fs-5 nav-link mt-1">Contatti</h5>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img style={{ width: "100%", boxShadow: "50px" }} src={avvocato} alt="" />
    </div>
  );
};

export default Headliner;
