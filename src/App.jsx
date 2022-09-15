import { useState, useEffect } from "react";
import _orderBy from "lodash/orderBy";
import { items } from "data";
import FilmsList from "pages/FilmsPage/components/FilmsList";
import FilmContext from "contexts/FilmContext";
import { FilmForm } from "pages/FilmsPage/components/FilmForm";
import TopNavigation from "components/TopNavigation";

const sortFilms = (films) =>
  _orderBy(films, ["featured", "title"], ["desc", "asc"]);

const App = () => {
  const [films, setFilms] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const showForm = (e) => {
    setShowAddForm(true);
  };

  const hideForm = (e) => {
    setShowAddForm(false);
  };

  const cols = showAddForm ? "ten" : "sixteen";

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
        <TopNavigation showForm={showForm} />

        <div className='ui stackable grid'>
          {showAddForm && (
            <div className='six wide column'>
              <FilmForm1 hideForm={hideForm} />
            </div>
          )}
          <div className={`${cols} wide column`}>
            <FilmsList films={films} />
          </div>
        </div>
      </FilmContext.Provider>
    </div>
  );
};

export default App;
