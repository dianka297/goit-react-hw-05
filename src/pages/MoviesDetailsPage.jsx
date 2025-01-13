import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import useHttp from "../hooks/useHttp";
import { useRef } from "react";
import s from "./MoviesDetailsPage.module.css";
import { InfinitySpin } from "react-loader-spinner";

function MoviesDetailsPage() {
  const { movieId } = useParams();

  const {
    data: movieDetails,
    loading,
    isError,
  } = useHttp(getMovieDetails, movieId);
  const location = useLocation();

  const goBackRef = useRef(location.state ?? "/movies");

  if (loading) {
    return <InfinitySpin />;
  }

  if (isError) {
    return <p>Не вдалося завантажити дані про фільм.</p>;
  }

  return (
    <div className={s.movieDetailsPage}>
      {movieDetails && (
        <>
          <Link to={goBackRef.current} className={s.backLink}>
            {" "}
            Повернутися назад
          </Link>
          <div className={s.wrapper}>
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={movieDetails.title}
            />
            <div className={s.movieDetailsInfo}>
              <h1>{movieDetails.title}</h1>
              <p>Overview: {movieDetails.overview}</p>
              <p>Realise Date: {movieDetails.release_date}</p>
              <p>Raiting: {movieDetails.vote_average}</p>
            </div>
          </div>
          <nav>
            <Link to="cast">Акторський склад</Link>
            <Link to="reviews">Відгуки</Link>
          </nav>

          <Outlet />
        </>
      )}
    </div>
  );
}

export default MoviesDetailsPage;