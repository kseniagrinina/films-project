import { useState, useEffect } from "react";
import FilmCard from "pages/FilmsPage/components/FilmCard";
import { items } from "data";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback";

const App = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms(items);
  }, []);

  const handleReset = () => {
    setFilms(items);
  };

  return (
    <div className='ui container mt-3'>
      <ErrorBoundary
        // resetKeys={films}
        onReset={handleReset}
        FallbackComponent={ErrorFallback}>
        <FilmCard film={films[0]} />
        <FilmCard film={films[1]} />
        <FilmCard film={films[2]} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
