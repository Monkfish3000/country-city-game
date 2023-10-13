import { useState } from 'react';

type ButtonState = 'SELECTED' | 'WRONG' | 'DEFAULT';

type Option = {
  value: string;
  state: ButtonState;
};

const CountryCapitalGame = ({ data }: { data: Record<string, string> }) => {
  const countries = Object.keys(data);
  const capitals = Object.values(data);

  const [options, setOptions] = useState<Option[]>(
    [...countries, ...capitals].map((value) => ({
      value,
      state: 'DEFAULT',
    }))
  );

  return (
    <>
      {options.map((option) => (
        <button
          className={`${option.state === 'SELECTED' ? 'selected' : ''}`}
          onClick={() => {
            setOptions(
              options.map((opt) => {
                return opt === option
                  ? {
                      ...opt,
                      state: 'SELECTED',
                    }
                  : opt;
              })
            );
          }}
          key={option.value}
        >
          {option.value}
        </button>
      ))}
    </>
  );
};

export default CountryCapitalGame;
