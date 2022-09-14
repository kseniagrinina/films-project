import { useContext } from "react";
import PropTypes from "prop-types";
import FilmContext from "contexts/FilmContext";

const Featured = ({ item }) => {
  const { toggleFeatured } = useContext(FilmContext);

  return (
    <span
      onClick={() => toggleFeatured(item._id)}
      role='status'
      className='ui right corner label'>
      <i className={`star icon ${item.featured ? "yellow" : "empty"}`}></i>
    </span>
  );
};

Featured.propTypes = {
  item: PropTypes.object.isRequired,
};

Featured.defaultProps = {
  film: {},
};

export default Featured;
