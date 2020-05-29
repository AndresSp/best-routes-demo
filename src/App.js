/* eslint-disable no-undef */
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import GoogleMap from './containers/GoogleMap';
import FormContainer from './containers/FormContainer';

function App() {
  return (
      <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <FormContainer/>
      <GoogleMap options={{
        center: {lat: 39, lng: -95},
        zoom: 5,
        mapTypeId: 'roadmap',
      }}/>
      </div>
  );
}

export default App;
