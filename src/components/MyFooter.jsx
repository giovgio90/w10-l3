import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const MyFooter = () => {
  return (
    <Container>
      <Row className=" mx-5">
        <Col>
          <div className="mb-2">
            <FaFacebook style={{ fontSize: "1.8rem", color: "grey", marginRight: "auto" }} className="pe-2" />
            <FaInstagram style={{ fontSize: "1.8rem", color: "grey" }} className="pe-2" />
            <FaTwitter style={{ fontSize: "1.8rem", color: "grey" }} className="pe-2" />
            <FaYoutube style={{ fontSize: "1.8rem", color: "grey" }} className="pe-2" />
          </div>
        </Col>
      </Row>
      <Row className="info d-flex justify-content-center mb-3 mx-5">
        <Col xs={6} md={3} className="text-white-50">
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Audio and Subtitles
          </h6>
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Media Center
          </h6>
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Privacy
          </h6>
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Contact Us
          </h6>
        </Col>
        <Col xs={6} md={3} className="text-white-50">
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Audio Description
          </h6>
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Investor Relations
          </h6>
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Legal Notices
          </h6>
        </Col>
        <Col xs={6} md={3} className="text-white-50">
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Help Center
          </h6>
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Jobs
          </h6>
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Cookie Preferences
          </h6>
        </Col>
        <Col xs={6} md={3} className="text-white-50">
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Gift Cards
          </h6>
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Teams of Use
          </h6>
          <h6 style={{ fontSize: "0.8rem" }} className="fw-normal">
            Corporate Information
          </h6>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <Button
            className="mx-5 py-1 text-white-50 border border-secondary mb-3"
            style={{ backgroundColor: "#141414", fontSize: "0.8rem" }}
          >
            Service Code
          </Button>
          <h6 className="text-white-50 fw-normal mx-5" style={{ fontSize: "0.6rem" }}>
            1997-2019 Netflix, Inc. {`{i-0d00fcda23cds2456}`}
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
