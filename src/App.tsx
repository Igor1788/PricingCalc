import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormUtm from './components/FormUTM';
import PriceCalculator from './components/PriceCalculator'; 
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/gerador-utm">Gerador de UTM</Link>
            </li>
            <li>
              <Link to="/calculadora-precos">Calculadora de Preços</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/gerador-utm" element={<FormUtm />} />
          <Route path="/calculadora-precos" element={<PriceCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


