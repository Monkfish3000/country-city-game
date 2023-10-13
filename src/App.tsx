import './App.css';

import CountryCapitalGame from './game/CountryCapitalGame';

function App() {
  const data = { Germany: 'Berlin', France: 'Paris', Wales: 'Cardiff' };
  return (
    <>
      <CountryCapitalGame data={data} />
    </>
  );
}

export default App;
