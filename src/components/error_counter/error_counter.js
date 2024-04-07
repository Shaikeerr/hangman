import React from 'react';
import './error_counter.css';

function ErrorCounter({ errorCount }) {
  return (
    <div className="error-counter">
      <p>Nombre d'erreurs : {errorCount}</p>
    </div>
  );
}

export default ErrorCounter;
