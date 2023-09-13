import { Col, Dropdown, Row } from "react-bootstrap";
import { FaList, FaTh } from "react-icons/fa";

const Section = () => {
  return (
    <header className="container mb-4">
      <Row className="align-items-center">
        <Col xs={4} sm={4} md={3} lg={2}>
          <h1 className="fs-2 text-white">TV Shows</h1>
        </Col>
        <Col xs={4} sm={3} md={4} lg={4} className="pt-sm-0 ps-sm-0 pt-1">
          <Dropdown>
            <Dropdown.Toggle
              className="btn bg-black text-white border border-light rounded-0"
              variant="secondary"
              id="genres-dropdown"
            >
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu className="border border-light" style={{ backgroundColor: "#141414" }}>
              <Dropdown.Item className="text-white" href="#">
                Action
              </Dropdown.Item>
              <Dropdown.Item className="text-white" href="#">
                Romantic
              </Dropdown.Item>
              <Dropdown.Item className="text-white" href="#">
                Comic
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={4} sm={5} md={5} lg={6} className="d-flex justify-content-end align-self-center">
          <div className="border px-2 pt-0 border border-secondary">
            <FaList className="text-white-50" />
          </div>
          <div className="border px-2 pt-0 pb-1 border border-secondary">
            <FaTh className="text-white-50" />
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Section;
