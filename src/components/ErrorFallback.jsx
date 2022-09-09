import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className='ui header'>
      <div className='content'>
        <p>
          <i className='bug icon'></i> There was en error.
        </p>
        <p>{error.message}</p>
        <p>We'll resolve the issue as soon as possible</p>
        <button onClick={resetErrorBoundary} className='ui button negative'>
          Close message
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
