import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const omdbResp = await fetch(`http://www.omdbapi.com/?apikey=c07b50c9&i=${movieId}`);
        if (!omdbResp.ok) {
          throw new Error("Errore nella richiesta OMDB API");
        }
        const omdbData = await omdbResp.json();
        setMovieDetails(omdbData);

        const commentsResponse = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${movieId}/comments`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjZhOTEwYmNhMDAwMTQ1ODNmZDkiLCJpYXQiOjE2OTQ2MTI1NTAsImV4cCI6MTY5NTgyMjE1MH0.Bau_D_Xtdnzp2HEv1HotJ6JGpsFer6J9D2k7mHkLBoA",
          },
        });
        if (!commentsResponse.ok) {
          throw new Error("Errore nella richiesta dei commenti");
        }
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <div className="text-center text-white">
          <img src={movieDetails.Poster} alt="" />
          <h2>
            <strong>Title:</strong> {movieDetails.Title}
          </h2>
          <p>
            <strong>Year: </strong>
            {movieDetails.Year}
          </p>
          <p>
            <strong>Genre: </strong>
            {movieDetails.Genre}
          </p>
          <p>
            <strong>Actors: </strong>
            {movieDetails.Actors}
          </p>
          <p>
            <strong>Language: </strong>
            {movieDetails.Language}
          </p>
          <hr />
          <p>
            <strong>Commenti:</strong>
          </p>

          <ul>
            {comments.map((comment) => (
              <div className="text-center">
                <li>{comment.comment}</li>
                <li>
                  <strong>rate: </strong>
                  {comment.rate}
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
