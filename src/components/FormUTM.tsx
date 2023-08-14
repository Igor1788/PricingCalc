import React, { useState } from 'react';
import './FormUTM.css'

const FormUtm = () => {
  const [url, setUrl] = useState('');
  const [origem, setOrigem] = useState('');
  const [midia, setMidia] = useState('');
  const [campanha, setCampanha] = useState('');
  const [cupom, setCupom] = useState('');
  const [linkGerado, setLinkGerado] = useState('');
  const [linkCopiado, setLinkCopiado] = useState(false);

  const handleGenerateLink = () => {
    let base = cupom ? `https://${url}?voucher=${cupom}&` : `${url}?`; 
    base += `utm_source=${origem}&utm_medium=${midia}&utm_campaign=${campanha}`;
    setLinkGerado(base);
    setLinkCopiado(false);
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
    setCupom('');
    setLinkGerado('');
    setLinkCopiado(false);
    console.log('Estou testando a zerada');
    
  }

  return (
    <div className='utm-field-container'>
      <h2>Gere a UTM aqui</h2>
      <div className="input-container">
        <label>URL: </label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />

        <label>Origem: </label>
        <input type="text" value={origem} onChange={(e) => setOrigem(e.target.value)} />

        <label>Mídia: </label>
        <input type="text" value={midia} onChange={(e) => setMidia(e.target.value)} />

        <label>Campanha: </label>
        <input type="text" value={campanha} onChange={(e) => setCampanha(e.target.value)} />

        <label>Cupom: </label> 
        <input type="text" value={cupom} onChange={(e) => setCupom(e.target.value)} />

        <button onClick={handleGenerateLink}>Gerar link</button>
        <button onClick={handleClearFields}>Limpar campos</button>
      </div>


        <p className='result-container'
          onClick={handleCopyLink}
          style={{cursor: "pointer"}}
        >
          Link gerado: {linkGerado}
        </p>
        {linkCopiado && <p style={{color: "green"}}>Link copiado com sucesso!</p>} 

    </div>
  );
};

export default FormUtm;
