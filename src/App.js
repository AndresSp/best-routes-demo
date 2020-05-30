import React from 'react';
import './App.css';
import GoogleMap from './containers/GoogleMap';
import FormContainer from './containers/FormContainer';
import ReactDependentScript from 'react-dependent-script';

function App() {
  return (
    <div id='mainContainer'>
      <ReactDependentScript 
      loadingComponent={
          <div>Google Maps loading...</div>
        }
      scripts={[`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_APIKEY}&v=3&libraries=places&language=en&region=US`]}
      >
        <FormContainer/>
        <GoogleMap options={{
          center: {lat: 39, lng: -95},
          zoom: 5,
          mapTypeId: 'roadmap',
        }}/>
      </ReactDependentScript>
    </div>
  );
}

export default App;
