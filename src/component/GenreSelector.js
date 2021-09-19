import React from 'react';
import "./GenreSelector.css"

function GenreButton(props) {
  return (
    <button
      className="gButton">
      {props.text}
      </button>
  )
}

function GenreSelector({show}) {
  if (!show) {
    return null;
  }
  return (
    <div id="box" className="container" class="overlay">
      <div class="overlay-content">
        <GenreButton text="Chinese"/>
        <GenreButton text="Pasta" />
        <GenreButton text="Mexican" />
        <GenreButton text="Pizza" />
      </div>
    </div>
  )
}

export default GenreSelector;
