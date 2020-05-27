/* eslint-disable no-undef */
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { MapContainer } from './containers/MapContainer';
import { GoogleMapsProvider } from './components/GoogleMapsProvider';

function App() {
  return (
    <GoogleMapsProvider>
      <div style={{ float: 'left' , width: '40%', height: '100vh' }}>
        <div style={{backgroundColor: 'green', height: '100%'}}>

        </div>
      </div>
      <MapContainer />
    </GoogleMapsProvider>
  );
}

export default App;
