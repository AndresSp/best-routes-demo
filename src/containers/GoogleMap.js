import React from 'react';

class GoogleMap extends React.Component {

  componentDidMount() {
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      ...this.props.options
    });
  }

  render() {
    return (
      <div id="map" />
    );
  }
}

export default GoogleMap
