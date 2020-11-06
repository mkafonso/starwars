import React from 'react';
import { useQuery } from 'react-query';

import PlanetItem from './PlanetItem';

const fetchPlanets = async () => {
  const response = await fetch('https://swapi.dev/api/planets');

  return response.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && <div>Loading data...</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <PlanetItem key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
