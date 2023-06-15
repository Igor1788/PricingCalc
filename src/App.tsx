import React from 'react';
import PriceCalculator from './components/PriceCalculator';
import FormUtm from './components/FormUTM';

const App: React.FC = () => {
  return (
    <div>
      <h1>Calculadora de preços</h1>
      <PriceCalculator />
      <h1>Gerador de UTM</h1>
      <FormUtm />
    </div>
  );
};

export default App;
