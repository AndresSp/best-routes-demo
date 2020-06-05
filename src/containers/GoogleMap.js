import React from 'react';
import { observer, inject } from 'mobx-react';

class GoogleMap extends React.Component {
  map;
  directionsService;
  directionsRenderer;
  infowindow;


  render() {
    const { addressStore } = this.props
    if(addressStore.addresses.length > 0) {
      this.calculateAndDisplayRoute(addressStore.addresses)
    }
    return (
      <div id="map" />
    );
  }

  componentDidMount() {
    this.directionsService = new window.google.maps.DirectionsService();
    this.directionsRenderer = new window.google.maps.DirectionsRenderer();
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      ...this.props.options
    });
    this.directionsRenderer.setMap(this.map);
  }

  calculateAndDisplayRoute = (places) => {
    let waypts = [];
    places.forEach(place => {
      waypts.push({
        location: place.location,
        stopover: true
      }) 
    });

    this.directionsService.route({
      origin: places[0].location,
      destination: places[places.length - 1].location,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}

export default inject(({ addressStore }) => ({ addressStore }))(observer(GoogleMap))
