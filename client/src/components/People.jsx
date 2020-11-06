import React from 'react';
import { useQuery } from 'react-query';

import PersonItem from './PersonItem';

const fetchPeople = async () => {
  const response = await fetch('https://swapi.dev/api/people');

  return response.json();
};

const People = () => {
  const { data, status } = useQuery('people', fetchPeople);

  return (
    <div>
      <h2>People</h2>

      {status === 'loading' && <div>Loading data...</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <div>
          {data.results.map((person) => (
            <PersonItem key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
