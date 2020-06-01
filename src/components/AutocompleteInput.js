import React, { useState, useEffect, useRef } from 'react';
import { inject } from 'mobx-react'

  let autoComplete;

  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current, 
      { types: [], componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["geometry", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
  }
  
  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = {
      id: +addressObject.geometry.location.lat() + +addressObject.geometry.location.lng(),
      formatted_address: addressObject.formatted_address, 
      lat: addressObject.geometry.location.lat(),
      lng: addressObject.geometry.location.lng(),
      location: addressObject.geometry.location
    };
    updateQuery(query);
    //console.log(query);
  }

  function AutocompleteInput({addressStore}) {
      const [,setQuery] = useState("");
      const autoCompleteRef = useRef(null);

    useEffect(() => handleScriptLoad(addressStore.add, autoCompleteRef), [addressStore]);

    return (
      <input
        ref={autoCompleteRef}
        type="search"
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter an address"
      />
    );
  }

export default inject(({ addressStore }) => ({ addressStore }))(AutocompleteInput);
