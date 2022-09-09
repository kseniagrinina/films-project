import * as React from "react";
import PropTypes from "prop-types";
import FilmCard from "./FilmCard";

const FilmsList = ({ films }) => {
  return (
    <div className='ui four cards'>
      {films.map((film) => (
        <FilmCard film={film} key={film._id} />
      ))}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FilmsList.defaultProps = {
  films: [],
};

export default FilmsList;
