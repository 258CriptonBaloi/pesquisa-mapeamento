import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function MapContainer(props) {
    return (
      <Map
        google={props.google}
        zoom={14}
        initialCenter={{ lat: -34.397, lng: 150.644 }}
      />
    );
}
  
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD5jGDReVapZD65y5jTDwKC4zakgv_4Hf4'
})(MapContainer);
  