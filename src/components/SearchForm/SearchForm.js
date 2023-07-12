import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Aqui você pode implementar a lógica para buscar os serviços com base na localização e no serviço informados

    // Limpar os campos do formulário após a submissão
    setService('');
    setLocation('');
  };

  return (
    <form className="search-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Digite o serviço desejado"
        value={service}
        onChange={handleServiceChange}
      />
      <input
        type="text"
        placeholder="Digite sua localização"
        value={location}
        onChange={handleLocationChange}
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
}

export default SearchForm;