import { Container, Row } from "react-bootstrap";
import GridFilm from "./GridFilm";

const TVShows = () => {
  return (
    <Container className=" mb-1 mb-sm-2 mb-md-4 mb-lg-5" style={{ marginBottom: "100px" }}>
      <h2 className="fs-4 text-white mb-3">Harry Potter Saga</h2>
      <Row className="gx-1 gy-1 mb-xs-1 mb-lg-5">
        <GridFilm moviesName="Harry Potter" />
      </Row>

      <h2 className="fs-4 text-white mb-3 mt-4">The Walking Dead Saga</h2>
      <Row className="gx-1 gy-1 mb-4 mb-xs-2">
        <GridFilm moviesName="Marvel" />
      </Row>

      <h2 className="fs-4 text-white mb-3">Marvel</h2>
      <Row className="gx-1 gy-1 mb-4">
        <GridFilm moviesName="The Walking dead" />
      </Row>
    </Container>
  );
};

export default TVShows;
