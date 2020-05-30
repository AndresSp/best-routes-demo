import React, { useState, useEffect, useRef } from 'react';

  let autoComplete;

  function handleScriptLoad(updateQuery, autoCompleteRef) {
    console.log(updateQuery, autoCompleteRef)
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current, 
      { types: ["(cities)"], componentRestrictions: { country: "us" } }
    );
    //autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
  }
  
  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject);
  }

  function AutocompleteInput() {
      const [query, setQuery] = useState("");
      const autoCompleteRef = useRef(null);

    useEffect(() => handleScriptLoad(setQuery, autoCompleteRef), []);

    return (
      <input
        ref={autoCompleteRef}
        autoComplete="no"
        type="text"
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    );
  }

export default AutocompleteInput
