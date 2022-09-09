import { useState, useEffect } from "react";
import _sortBy from "lodash/sortBy";
import { items } from "data";
import FilmsList from "pages/FilmsPage/components/FilmsList";

const sortFilms = (films) => _sortBy(films, ["title"]);

const App = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms(sortFilms(items));
  }, []);

  return (
    <div className='ui container mt-3'>
      <FilmsList films={films} />
    </div>
  );
};

export default App;
