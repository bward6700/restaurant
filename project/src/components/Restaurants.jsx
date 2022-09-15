import React, { useState } from "react";
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"
import './globals.css'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox'
import { RoomRounded } from "@material-ui/icons";



export default function Restaurants () {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyB1vcuiD8Pjsm7OayAvUfzLAOH6HV3FFGk",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>
  return  <div> 
    <Map/>  
    </div>
}



function Map(){
const [selected, setSelected] = useState(null);

return (
<>
<h1 className="title">Resturant Search</h1>
<div className="places-container">
  <PlacesAutocomplete setSelected={setSelected} />
</div>
<button className="button"> <LocateMe/> <RoomRounded /> </button>
 <GoogleMap zoom={10} center={{lat: 35.2271, lng: -80.8431}} mapContainerClassName="map-container">
    
    {selected && <MarkerF position={selected}/>}
  </GoogleMap>

  </>
);
}

const PlacesAutocomplete = ({setSelected}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: {status, data},
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({address});
    const {lat,lng} = await getLatLng(results[0]);
    setSelected({ lat, lng });
  }

  return (
  <Combobox onSelect={handleSelect}>
    <ComboboxInput value={value} onChange={e => setValue(e.target.value)} disabled ={!ready} className="combobox-input" placeholder="Search a Resturant"/>
    <ComboboxPopover>
      <ComboboxList>
        {status === "OK" && data.map(({place_id, description}) => <ComboboxOption key={place_id} value={description} />)}
      </ComboboxList>
    </ComboboxPopover>
  </Combobox>
  );
}


const LocateMe = () => {

 const sucess = (position) =>{
   console.log(position)
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
   console.log(latitude + '' + longitude)  }

  const error = () => {
   return error
  }

  navigator.geolocation.getCurrentPosition(sucess,error);
}






