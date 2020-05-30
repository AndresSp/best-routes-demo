import React from 'react';

export default class GoogleMap extends React.Component {

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
