import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState, useEffect, useMemo } from "react";
import LoadMore from "../components/LoadMore/LoadMore";
import useHttp from "../hooks/useHttp";
import { InfinitySpin } from "react-loader-spinner";
import s from "./Movies.module.css";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const params = useMemo(() => ({ query, page }), [query, page]);
  const { data: moviesData, loading, isError } = useHttp(searchMovies, params);

  useEffect(() => {
    if (!query) return;
    if (moviesData?.results) {
      setMovies((prevMovies) =>
        page === 1 ? moviesData.results : [...prevMovies, ...moviesData.results]
      );
    }
  }, [moviesData, page, query]);

  const handleChange = (newQuery) => {
    if (query === newQuery) return;

    if (!newQuery) {
      searchParams.delete("query");
    } else {
      searchParams.set("query", newQuery);
    }
    setSearchParams(searchParams);

    setMovies([]);
    setPage(1);
  };

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isError) {
    return <p>Ошибка загрузки...</p>;
  }

  return (
    <div className={s.moviesWrapper}>
      <h1 className={s.moviesTitle}>Пошук фільмів</h1>
      <SearchBar query={query} handleChange={handleChange} />
      {loading && page === 1 ? (
        <InfinitySpin />
      ) : (
        movies.length > 0 && (
          <>
            <MovieList movies={movies} />
            {loading && <InfinitySpin />}
            <LoadMore onLoadMore={loadMoreHandler} />
          </>
        )
      )}
    </div>
  );
};

export default Movies;