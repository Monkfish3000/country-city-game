import React from 'react';

const CountryCapitalGame = ({ data }: { data: Record<string, string> }) => {
  const countries = Object.keys(data);
  const capitals = Object.values(data);

  const options = [...countries, ...capitals];

  return (
    <>
      {options.map((option) => (
        <button>{option}</button>
      ))}
    </>
  );
};

export default CountryCapitalGame;
