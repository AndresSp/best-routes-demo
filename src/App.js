/* eslint-disable no-undef */
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { MapContainer } from './containers/MapContainer';
import { GoogleMapsProvider } from './components/GoogleMapsProvider';

function App() {
  return (
    <GoogleMapsProvider>
      <MapContainer />
    </GoogleMapsProvider>
  );
}

export default App;
