import { Container, Col, Image, Button, Form, InputGroup, ListGroup, Dropdown } from "react-bootstrap";

const MainProfile = () => {
  return (
    <Container>
      <main className="row justify-content-center">
        <Col sm={12} md={12} lg={6}>
          <div className="border-bottom border-secondary mb-3">
            <div>
              <h1 className="text-white fw-normal">Edit Profile</h1>
            </div>
          </div>

          <div className="settings d-flex">
            <div className="logo pe-3">
              <Image src="/assets/kids_icon.png" alt="kids" />

              <ion-icon name="create"></ion-icon>
            </div>
            <div className="text-white d-flex flex-column w-75">
              <h3 className="fs-5 fw-normal mb-4 bg-secondary p-2">Strive Student</h3>
              <div>
                <Form.Group>
                  <InputGroup className="mb-3">
                    <Dropdown>
                      <Dropdown.Toggle className="text-secondary" variant="black" id="language-dropdown">
                        Language
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <ListGroup>
                          <ListGroup.Item action href="#">
                            Italian
                          </ListGroup.Item>
                          <ListGroup.Item action href="#">
                            Spanish
                          </ListGroup.Item>
                          <ListGroup.Item action href="#">
                            Chinese
                          </ListGroup.Item>
                        </ListGroup>
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="maturity text-white border-top border-bottom border-secondary py-4 mb-3">
                <h3 className="fs-5 fw-normal text-white-50 mb-3">Maturity Settings:</h3>
                <h4 className="fw-normal text-white p-2 mb-3" style={{ backgroundColor: "rgb(61, 61, 61)" }}>
                  ALL MATURITY RATINGS
                </h4>
                <h5 className="mb-3" style={{ fontSize: "0.8rem" }}>
                  Show Titles of all maturity ratings for this profile.
                </h5>
                <Button
                  className="text-secondary border border-secondary px-4 mt-2"
                  style={{ fontSize: "0.9rem", backgroundColor: "#141414" }}
                >
                  EDIT
                </Button>
              </div>
              <div className="row gx-2 mb-2">
                <div className="btn-group col-1" role="group" aria-label="Basic checkbox toggle button group">
                  <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                  <label className="btn btn-outline-secondary rounded-0 p-0" htmlFor="btncheck1">
                    <ion-icon name="checkmark" className="text-white"></ion-icon>
                  </label>
                </div>
                <div className="text-check col-11">
                  <h4 style={{ fontSize: "0.8rem" }}>Autoplay next episode in a series on all devices.</h4>
                </div>
              </div>
              <div className="row gx-2">
                <div className="btn-group col-1" role="group" aria-label="Basic checkbox toggle button group">
                  <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                  <label className="btn btn-outline-secondary rounded-0 p-0" htmlFor="btncheck2">
                    <ion-icon name="checkmark" className="text-white"></ion-icon>
                  </label>
                </div>
                <div className="text-check col-11">
                  <h4 style={{ fontSize: "0.8rem" }}>Autoplay previews while browsing on all devices.</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-top border-secondary mt-4 mb-3 gx-0 text-center">
            <div className="col-sm-4 col-lg-2 mt-3" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
              <label className="text-secondary btn btn-outline-light px-3" htmlFor="btnradio1">
                SAVE
              </label>
            </div>

            <div className="col-sm-4 col-lg-3 mt-3">
              <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
              <label className="text-secondary btn btn-outline-light px-4" htmlFor="btnradio2">
                CANCEL
              </label>
            </div>
            <div className="col-sm-4 col-lg-7 mt-3">
              <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
              <label className="text-secondary btn btn-outline-light px-4" htmlFor="btnradio3">
                DELETE PROFILE
              </label>
            </div>
          </div>
        </Col>
      </main>
    </Container>
  );
};

export default MainProfile;
