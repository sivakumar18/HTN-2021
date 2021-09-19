import React from 'react';
import './GenreSelector.css';

function Distance({show}) {
  if (!show) {
    return null;
  }
  return (
    <div className="menu">Distance</div>
  )
}

export default Distance;
