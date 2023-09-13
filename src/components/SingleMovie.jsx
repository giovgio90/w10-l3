import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleMovie = ({ movieId }) => {
  return (
    <Container>
      <h1>{movieId}</h1>
      <Link to={`/movie-details/${movieId}`}>Dettagli</Link>
    </Container>
  );
};

export default SingleMovie;
