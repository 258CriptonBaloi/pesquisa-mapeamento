import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearch = () => {
    // Chamar a função de busca passando a categoria selecionada
    onSearch(category);
  };

  return (
    <div className="search-form">
      <label className="label" htmlFor="category">Escolha uma categoria:</label>
      <select className="select" id="category" value={category} onChange={handleCategoryChange}>
        <option value="">Selecione</option>
        <option value="restaurantes">Restaurantes</option>
        <option value="parques">Parques</option>
      </select>
      <button className="button" onClick={handleSearch}>Usar localização atual</button>
    </div>
  );
};

export default SearchForm;
