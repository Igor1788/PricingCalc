import React, { useState } from 'react';
import './FormUTM.css'

const FormUtm = () => {
  const [url, setUrl] = useState('');
  const [origem, setOrigem] = useState('');
  const [midia, setMidia] = useState('');
  const [campanha, setCampanha] = useState('');
  const [cupom, setCupom] = useState(false);
  const [linkGerado, setLinkGerado] = useState('');
  const [linkCopiado, setLinkCopiado] = useState(false); // Adicionado para controlar se o link foi copiado

  const handleGenerateLink = () => {
    let base = cupom ? `${url}&` : `${url}?`;
    base += `utm_source=${origem}&utm_medium=${midia}&utm_campaign=${campanha}`;
    setLinkGerado(base);
    setLinkCopiado(false); // Resetamos a variável linkCopiado
  };

  const handleCopyLink = async () => {
    if (linkGerado) {
      try {
        await navigator.clipboard.writeText(linkGerado);
        setLinkCopiado(true);
      } catch (err) {
        console.error('Falha ao copiar o texto: ', err);
      }
    }
  }
  const handleClearFields = () => {
    setUrl('');
    setOrigem('');
    setMidia('');
    setCampanha('');
    setCupom(false);
    setLinkGerado('');
    setLinkCopiado(false);
  }

  return (
    <div className='utm-field-container'>
      <h2>Gere a UTM aqui</h2>
      <div className="input-container">
        <label>URL: </label>
        <input type="text" onChange={(e) => setUrl(e.target.value)} />

        <label>Origem: </label>
        <input type="text" onChange={(e) => setOrigem(e.target.value)} />

        <label>Mídia: </label>
        <input type="text" onChange={(e) => setMidia(e.target.value)} />

        <label>Campanha: </label>
        <input type="text" onChange={(e) => setCampanha(e.target.value)} />

        <label>Cupom: </label>
        <select onChange={(e) => setCupom(e.target.value === 'sim')}>
          <option value="não">Não</option>
          <option value="sim">Sim</option>
        </select>

        <button onClick={handleGenerateLink}>Gerar link</button>
        <button onClick={handleClearFields}>Limpar campos</button>
      </div>

      <div className='result-container'>
        <p 
          onClick={handleCopyLink} // Adicionado evento de click para copiar o link
          style={{cursor: "pointer"}} // Adicionado para mudar o cursor quando passar o mouse sobre o link
        >
          Link gerado: {linkGerado}
        </p>
        {linkCopiado && <p style={{color: "green"}}>Link copiado com sucesso!</p>} 
      </div>
    </div>
  );
};

export default FormUtm;
