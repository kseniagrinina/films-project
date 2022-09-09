import * as React from "react";
import PropTypes from "prop-types";

const Message = ({ children, type, color }) => {
  return (
    <div aria-label='message' className={`ui icon message ${color}`}>
      <i className={`icon ${type}`}></i>
      <div className='content'>
        <div className='header'>{children}</div>
      </div>
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Message.defaultProps = {
  type: "info",
  color: "olive",
};

export default Message;
