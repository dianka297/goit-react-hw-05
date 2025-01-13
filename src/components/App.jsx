import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./Navigation/Navigation";
import { InfinitySpin } from "react-loader-spinner";

const HomePage = lazy(() => import("../pages/HomePage"));
const Movies = lazy(() => import("../pages/Movies"));
const MoviesDetailsPage = lazy(() => import("../pages/MoviesDetailsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<InfinitySpin />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route index element={<p>...</p>} />
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}