import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/api";
import useHttp from "../../hooks/useHttp";
import { InfinitySpin } from "react-loader-spinner";

function MovieCast() {
  const { movieId } = useParams();

  const { data: cast, loading, isError } = useHttp(getMovieCast, movieId);

  if (loading) {
    return <InfinitySpin />;
  }

  if (isError) {
    return <p>Не вдалося завантажити дані про акторів.</p>;
  }

  return (
    <div>
      {cast?.length > 0 ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>{actor.name}</li>
          ))}
        </ul>
      ) : (
        <p>Дані про акторів відсутні.</p>
      )}
    </div>
  );
}

export default MovieCast;