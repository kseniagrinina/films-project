import { useState, useEffect } from "react";
import _orderBy from "lodash/orderBy";
import { items } from "data";
import FilmsList from "pages/FilmsPage/components/FilmsList";
import FilmContext from "contexts/FilmContext";
import FilmForm from "pages/FilmsPage/components/FilmForm";

const sortFilms = (films) =>
  _orderBy(films, ["featured", "title"], ["desc", "asc"]);

const App = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms(sortFilms(items));
  }, []);

  const toggleFeatured = (id) => {
    setFilms((films) =>
      sortFilms(
        films.map((film) =>
          film._id === id ? { ...film, featured: !film.featured } : film
        )
      )
    );
  };

  const value = { toggleFeatured };

  return (
    <div className='ui container mt-3'>
      <FilmContext.Provider value={value}>
        <FilmsList films={films} />
        <FilmForm />
      </FilmContext.Provider>
    </div>
  );
};

export default App;
