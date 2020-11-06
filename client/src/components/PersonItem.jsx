import React from 'react';

const PersonItem = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name || 'Unknown'}</h3>
      <p>Gender - {person.gender || 'Unknown'} </p>
      <p>Brith Year - {person.birth_year || 'Unknown'} </p>
    </div>
  );
};

export default PersonItem;
