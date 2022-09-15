import { GroupAddRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`

const Friendbox = styled.div`
height: 100%;
display: flex;
flex-direction:column;
justify-content: center;
max-width: 1100px;
font-family: 'Source Code Pro', monospace;
`

const Title = styled.h1`
margin-top:0;
font-size:70px;
font-family: 'Source Code Pro', monospace;
cursor:pointer;


&:hover{
    background-image: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
`
const Input = styled.input`
display: flex;
flex-direction: column;
padding: 2vw 4vw;
width: 90%;
max-width: 600px;
border-radius: 10px;   
margin-top:20px; 
`
const Button = styled.button`
margin-top:20px;
dispaly:flex;
justify-content:flex-end;
font-size: 16px;
font-weight: 200;
letter-spacing: 1px;
padding: 13px 20px 13px;
outline: 0;
border: 1px solid black;
cursor: pointer;
position: relative;
background-color: rgba(0, 0, 0, 0);
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
position:absolute bottom;

&:after{
  content: "";
  background-color: #7e57c2;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

&:hover{
  &:after{
  top: 0px;
  left: 0px;
  }
}
`





const Friends = () => {
  return (
    <div>
        <Container>
        
            <Friendbox>
            <Title>Friends</Title> 
        <Input placeholder='Add A Friend'></Input>
        <Input placeholder='Add A Email'></Input>
        <Input placeholder='Add A Resturant'></Input>
        <Button> <GroupAddRounded /> </Button>
            </Friendbox>
        </Container>
    </div>
  )
}

export default Friends

// import { useState, useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";

// export default function Restaurants() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyB1vcuiD8Pjsm7OayAvUfzLAOH6HV3FFGk',
//     libraries: ["places"],
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 35.2271, lng: -80.8431 }), []);
//   const [selected, setSelected] = useState(null);

//   return (
//     <>
//       <div className="places-container">
//         <PlacesAutocomplete setSelected={setSelected} />
//       </div>

//       <GoogleMap
//         zoom={10}
//         center={center}
//         mapContainerClassName="map-container"
//       >
//         {selected && <Marker position={selected} />}
//       </GoogleMap>
//     </>
//   );
// }

// const PlacesAutocomplete = ({ setSelected }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     setSelected({ lat, lng });
//   };

//   return (
//     <Combobox onSelect={handleSelect}>
//       <ComboboxInput
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         disabled={!ready}
//         className="combobox-input"
//         placeholder="Search an address"
//       />
//       <ComboboxPopover>
//         <ComboboxList>
//           {status === "OK" &&
//             data.map(({ place_id, description }) => (
//               <ComboboxOption key={place_id} value={description} />
//             ))}
//         </ComboboxList>
//       </ComboboxPopover>
//     </Combobox>
//   );
//             };
