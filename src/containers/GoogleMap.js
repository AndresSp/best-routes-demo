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

    //this.infowindow  = window.google.maps.InfoWindow();
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
        // var route = response.routes[0];
        // var summaryPanel = document.getElementById('directions-panel');
        // summaryPanel.innerHTML = '';
        // For each route, display summary information.
        // for (var i = 0; i < route.legs.length; i++) {
        //   var routeSegment = i + 1;
        //   summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
        //       '</b><br>';
        //   summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        //   summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        //   summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        // }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}

export default inject(({ addressStore }) => ({ addressStore }))(observer(GoogleMap))
