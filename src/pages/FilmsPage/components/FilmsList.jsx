import * as React from "react";
import PropTypes from "prop-types";
import FilmCard from "./FilmCard";
import Message from "components/Message";

const FilmsList = ({ films }) => {
  return (
    <div className='ui four cards'>
      {films.length === 0 ? (
        <Message type='bell' color='blue'>
          No fims in the database yet.
        </Message>
      ) : (
        films.map((film) => <FilmCard film={film} key={film._id} />)
      )}
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
