import { Component } from "react";
import { Button, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

class GridFilm extends Component {
  state = {
    movies: [],
    error: "",
    isLoading: true,
  };

  async componentDidMount() {
    try {
      const response = await fetch("https://www.omdbapi.com/?apikey=c07b50c9&s=" + this.props.moviesName);
      if (!response.ok) {
        this.setState({ error: `status: ${response.status}` });
      } else {
        const movies = await response.json();
        this.setState({ movies });
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    let { movies, error, isLoading } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (isLoading) {
      return (
        <div className="loader-container d-flex justify-content-center">
          <div>
            <Spinner className="me-2" animation="border" variant="white" role="status"></Spinner>
          </div>
          <div>
            <p className="text-white fw-bold fs-4">Loading. . .</p>
          </div>
        </div>
      );
    }

    movies = movies.Search.slice(0, 6);

    return movies.map((movie, index) => (
      <Col key={index} xs={12} sm={6} md={4} lg={2}>
        <img src={movie.Poster} alt="film1" style={{ width: "100%" }} />
        <div className="text-center">
          <Link to={`/movie-details/${movie.imdbID}`}>
            <Button variant="dark" className="mt-3">
              Dettagli film
            </Button>
          </Link>
        </div>
      </Col>
    ));
  }
}

export default GridFilm;
