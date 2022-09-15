import React from "react";
import PropTypes from "prop-types";

const FormMessage = ({ type, children }) => {
  return (
    <div
      role='alert'
      style={{ color: type === "info" ? "#6597a7" : "#9a3f38" }}>
      {children}
    </div>
  );
};

FormMessage.propTypes = {
  type: PropTypes.oneOf(["info", "error"]).isRequired,
  children: PropTypes.string,
};

FormMessage.defaultProps = {
  type: "error",
};

export default FormMessage;
