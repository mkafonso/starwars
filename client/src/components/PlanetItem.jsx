import React from 'react';

const PlanetItem = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name || 'Unknown'}</h3>
      <p>Population - {planet.population || 'Unknown'} </p>
      <p>Terrain - {planet.terrain || 'Unknown'} </p>
    </div>
  );
};

export default PlanetItem;
