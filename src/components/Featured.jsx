import React from "react";
import PropTypes from "prop-types";

const Featured = ({ item }) => {
  return (
    <span role='status' className='ui right corner label'>
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
