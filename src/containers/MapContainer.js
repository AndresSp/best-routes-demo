import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { GoogleMapsConsumer } from '../components/GoogleMapsProvider';

const mapStyles = {
  width: '60%',
  height: '100%',
  position: 'relative',
  float: 'right'
};

export class MapContainer extends Component {

    render() {
        return (
            <GoogleMapsConsumer>{
                context => {
                    if(context.google){
                        return (
                            <Map 
                            google={context.google}
                            zoom={4.5}
                            initialCenter={{ lat:37.849, lng: -95.87}}
                            style={mapStyles}>
                            </Map>
                        )
                    }
                }
            }
            </GoogleMapsConsumer>
        );
      }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_APIKEY
})(MapContainer);
