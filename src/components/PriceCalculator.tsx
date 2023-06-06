import React, { useState } from 'react';
import './PriceCalculator.css';


const PriceCalculator: React.FC = () => {
  const [costOfRecording, setCostOfRecording] = useState(0);
  const [targetStudents, setTargetStudents] = useState(0);
  const [unitServiceCost, setUnitServiceCost] = useState(0);
  const [markup, setMarkup] = useState(0);
  const [idealPrice, setIdealPrice] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);

  const handleCalculatePrice = () => {
    const taxes = 0.03565;
    const checkoutFee = 0.007;
    const paymentGatewayFee = 0.15;

    const sellingPrice = ((costOfRecording / targetStudents) + unitServiceCost) * markup;
    const expenses = (sellingPrice * taxes) + (sellingPrice * checkoutFee) + (sellingPrice * paymentGatewayFee);
    const idealPrice = sellingPrice + expenses;

    setSellingPrice(sellingPrice);
    setExpenses(expenses);
    setIdealPrice(idealPrice);
  };

  return (
    <div className="price-calculator-container">
      <h2>Calculadora de Preço</h2>
      <div className="input-container">
        <label>
          Custo de Gravação:
          <input
            type="number"
            value={costOfRecording}
            onChange={(e) => setCostOfRecording(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Meta de alunos:
          <input
            type="number"
            value={targetStudents}
            onChange={(e) => setTargetStudents(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Custo unitário de servidor:
          <input
            type="number"
            value={unitServiceCost}
            onChange={(e) => setUnitServiceCost(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Markup:
          <input
            type="number"
            value={markup}
            onChange={(e) => setMarkup(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleCalculatePrice}>Calcular</button>
      <div className="result-container">
        <h3>Preço Ideal: {idealPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
        <h4>Custo: {expenses.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
        <h4>Preço mínimo: {sellingPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
      </div>
    </div>
  );
};

export default PriceCalculator;
