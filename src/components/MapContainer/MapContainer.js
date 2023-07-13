import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import SearchForm from '../SearchForm/SearchForm';

const MapContainer = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [nearbyServices, setNearbyServices] = useState([]);

  const mapStyles = {
    height: '800px',
    width: '100%'
  };

  useEffect(() => {
    // Função para obter a localização atual do usuário
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  const searchNearbyServices = (category) => {
    // Aqui você pode chamar a API do Google Maps para buscar os serviços próximos
    // com base na categoria selecionada e na localização atual (currentLocation)

    // Exemplo fictício de resultado de serviços próximos
    const nearbyServicesResult = [
      { id: 1, name: 'Restaurante A', lat: 123.456, lng: 789.012 },
      { id: 2, name: 'Restaurante B', lat: 345.678, lng: 901.234 },
      // ...
    ];

    setNearbyServices(nearbyServicesResult);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD5jGDReVapZD65y5jTDwKC4zakgv_4Hf4">
      <div>
        <SearchForm onSearch={searchNearbyServices} />
      </div>
      <div>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={currentLocation}
        >
          {currentLocation && (
            <Marker position={currentLocation} title="Sua localização atual" />
          )}

          {nearbyServices.map((service) => (
            <Marker
              key={service.id}
              position={{ lat: service.lat, lng: service.lng }}
              title={service.name}
            />
          ))}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MapContainer;
