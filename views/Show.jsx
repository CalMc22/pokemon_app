
import React from 'react';

const Show = ({ pokemon }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{pokemon.name}</h2>
      <img src={`${pokemon.img}.jpg`} alt={pokemon.name} style={{ maxWidth: '300px', marginBottom: '20px' }} />
      <a href="/pokemon" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>
        Back
      </a>
    </div>
  );
};

export default Show;