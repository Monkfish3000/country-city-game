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
    [...countries, ...capitals]
      .sort(() => Math.random() - 0.5)
      .map((value) => ({
        value,
        state: 'DEFAULT',
      }))
  );

  const [selected, setSelected] = useState<Option>();

  const gameOver = options.length === 0;

  if (gameOver) {
    return <h1>CONGRATULATIONS 🎉</h1>;
  }

  return (
    <>
      {options.map((option) => (
        <button
          className={`${
            option.state === 'SELECTED'
              ? 'selected'
              : option.state === 'WRONG'
              ? 'wrong'
              : ''
          }`}
          onClick={() => {
            console.log(options);
            if (!selected) {
              setSelected(option);
              setOptions(
                options.map((opt) => {
                  return opt === option
                    ? {
                        ...opt,
                        state: 'SELECTED',
                      }
                    : {
                        ...opt,
                        state: 'DEFAULT',
                      };
                })
              );
            } else {
              if (
                selected.value === data[option.value] ||
                data[selected.value] === option.value
              ) {
                setOptions(
                  options.filter((opt) => {
                    return !(
                      // Germany Berlin France Paris Wales Cardiff
                      (
                        opt.value === selected.value ||
                        opt.value === option.value
                      )
                    );
                  })
                );
              } else {
                setOptions(
                  options.map((opt) => {
                    return opt === option
                      ? {
                          ...opt,
                          state: 'WRONG',
                        }
                      : opt;
                  })
                );
              }
              setSelected(undefined);
            }
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
