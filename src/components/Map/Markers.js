import { Marker, InfoWindow, } from '@react-google-maps/api';
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid'; //For Keys
import { useEffect, useState } from 'react';
import { InfoDiv, PhotoBox, Photo, InfoAddress, Info, LabelDiv, Label } from './styles';
import { getMarkers } from '../../actions/markers';

console.log('Hello there! Welcome to my Portfolio.')

const Markers = () => {

    // Usings Markers in Database
    const markers = useSelector((state) => state.markers);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMarkers());
    },[])
    
    // Allows the info box to be open and closed
    const [selected, setSelected] = useState(null);

    return (
        <>
        {markers.map((marker) => (
                <Marker key={uuidv4()} center={{ lat: marker.lat, lng: marker.lng}} position={{ lat: marker.lat, lng: marker.lng}} onClick={() => {setSelected(marker)}} />
        ))}
            {selected && ( 
            <InfoWindow onCloseClick={() => {setSelected(null)}} key={uuidv4()} position={{ lat: selected.lat, lng: selected.lng}}>
                <InfoDiv key={uuidv4()}>
                    <PhotoBox key={uuidv4()}>
                        <Photo key={uuidv4()} src={selected.photo}/>
                    </PhotoBox>
                    <LabelDiv key={uuidv4()}>
                        <InfoAddress key={uuidv4()}>
                            {selected.address.replace(', USA', '')}
                        </InfoAddress>
                    </LabelDiv>
                    <LabelDiv key={uuidv4()}>
                        <Label key={uuidv4()}>Location Name: </Label>
                        <Info key={uuidv4()}>{selected.name}</Info>
                    </LabelDiv>
                </InfoDiv>
            </InfoWindow>)}
    
</>
    )
}

export default Markers
