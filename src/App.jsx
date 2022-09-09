import { useState, useEffect } from "react";
import { items } from "data";
import FilmsList from "pages/FilmsPage/components/FilmsList";

const App = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms(items);
  }, []);

  return (
    <div className='ui container mt-3'>
      <FilmsList films={films} />
    </div>
  );
};

export default App;
