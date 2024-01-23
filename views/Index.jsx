import React from 'react';

const Index = ({ pokemon }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#333' }}>See All The Pokemon!</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pokemon.map((poke, index) => (
          <li key={index} style={{ marginBottom: '10px', textAlign: 'center' }}>
            <a href={`/pokemon/${index}`} style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>
              {poke.name}
            </a>
          </li>
        ))}
      </ul>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href="/pokemon/new" style={{ textDecoration: 'none', color: '#28a745', fontSize: '20px' }}>
          Add a New Pokemon
        </a>
      </div>
    </div>
  );
};

export default Index;