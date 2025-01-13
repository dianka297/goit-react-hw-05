import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies = [] }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={s.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.movieItem}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={movie.title}
              />
              <div className={s.movieInfo}>
                {" "}
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>
                  {movie.vote_average
                    ? parseInt(movie.vote_average * 10) / 10
                    : "N/A"}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;