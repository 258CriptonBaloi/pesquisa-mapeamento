import React, { useState } from 'react';
import './ServiceList.css';

function ServiceList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [userLocation, setUserLocation] = useState('');

  const services = [
    {
      id: 1,
      name: 'Taverna',
      category: 'Restaurantes',
      location: 'Maputo'
    },
    {
      id: 2,
      name: 'Hotel Cardoso',
      category: 'Hotéis',
      location: 'Maputo'
    },
    // Adicione mais serviços de exemplo aqui
  ];

  const categories = [
    'Restaurantes',
    'Hotéis',
    'Hospitais',
    'Postos de Gasolina',
    'Supermercados',
    'Lojas de Roupas',
    'Salões de Beleza'
  ];

  const filteredServices = services
    .filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      service.location.toLowerCase().includes(location.toLowerCase()) &&
      (selectedCategory === '' || service.category === selectedCategory)
    )
    .slice(0, 2); // Limita a lista a apenas 2 serviços

  const handleCategoryClick = category => {
    setSelectedCategory(category);
    setSearchTerm('');
    setLocation('');
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`${latitude}, ${longitude}`);
          setLocation('');
        },
        error => {
          console.log(error);
        }
      );
    } else {
      alert('Geolocalização não suportada pelo seu navegador.');
    }
  };

  return (
    <div className="service-list">
      <div className="sidebar">
        <h2>Categorias</h2>
        <ul>
          {categories.map(category => (
            <li
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <div className="top-row">
          <div className="search-column">
            <h2>Pesquisar por serviço</h2>
            <input
              type="text"
              placeholder="Pesquisar por serviço"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="location-column">
            <h2>Localização</h2>
            <div className="location-input">
              <input
                type="text"
                placeholder="Localização"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
              <button onClick={handleLocationClick}>Usar Localização Atual</button>
            </div>
            {userLocation && <p>Sua localização atual: {userLocation}</p>}
          </div>
        </div>
        <ul>
          {filteredServices.map(service => (
            <li key={service.id}>
              <strong>{service.name}</strong> - {service.category} ({service.location})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceList;
