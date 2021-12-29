import { MainDiv, TopDiv, Video, VideoCover, PhotoDiv, PhotoCircle, SecondRow, Photo, PhotoText, TextDiv, TextDivRight, PhotoTextRight, Name, NameDiv, SecondLeft, SecondRight, SecondLeftText, InputBox, Question, Input, Submit, MapDiv, SubmitComplete } from "./styles";
import video from './Video/production ID_4441009.mp4';
import photo from './Video/photo.png';
import { getGeocode, getLatLng } from "use-places-autocomplete";
import FileBase from 'react-file-base64';
import { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import { GoogleAPI } from './keys';
import { useDispatch } from 'react-redux';
import Map from "./Map/Map";
import { createProp } from "../actions/properties";
import { createMarker } from "../actions/markers";
import Login from "./LoginRow/Login";
import Showcase from "./TestRow/Showcase";


const HomePage = ({ language, name, occupation, question, submitComplete }) => {

    const dispatch = useDispatch();

const { ref } = usePlacesWidget({
    apiKey: GoogleAPI,
    onPlaceSelected: (place) => {
        console.log(place.formatted_address.replace(', USA', ''));
        
    },
    options: {
        types: ["address"],
        componentRestrictions: { country: "us" },
    },
    });

            // Reading image file to be displayed
            const [file, setFile] = useState('');

            const fileHandler = (e) => {
                console.log(e.target.files[0])
                setFile(e.target.files[0])
                let reader = new FileReader();
                reader.onload = function(e) {
                  setFile(e.target.result);
                };
                reader.readAsDataURL(e.target.files[0]);
            };
    

    const [mapData, setMapData] = useState({
        name: '',
        address: '',
        photo: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        document.querySelector('.submitComplete').style = 'display: flex; justify-content: center;';
        document.querySelector('.submitButton').style.display = 'none';

        dispatch(createProp(mapData));
        
        // Getting Lat and Lng for markers to be displayed on the map, along with other info
        getGeocode({address : mapData.address})
        .then((results) => getLatLng(results[0]))
        .then((latLng) => {
            const { lat, lng } = latLng;
            
            const markers = {
                address: mapData.address,
                name: mapData.name,
                photo: mapData.photo,
                lat: lat,
                lng: lng,
            };
            dispatch(createMarker(markers));
        });
    };

    return (
        <MainDiv>
            <TopDiv>
                <Video autoPlay={true} muted={true} loop={true} src={video} />
                <VideoCover />
                <NameDiv>
                    <Name>
                        {name}
                    </Name>
                    <Name style={{ marginRight: '3em' }}>
                        {occupation}
                    </Name>
                </NameDiv>
                <PhotoDiv>
                    <TextDiv>
                        <PhotoText>
                            {language.html}
                        </PhotoText>
                        <PhotoText>
                            {language.css}
                        </PhotoText>
                        <PhotoText>
                            {language.javascript}
                        </PhotoText>
                        <PhotoText>
                            {language.react}
                        </PhotoText>
                        <PhotoText>
                            {language.express}
                        </PhotoText>
                        <PhotoText>
                            {language.redux}
                        </PhotoText>
                    </TextDiv>
                    <PhotoCircle>
                        <Photo src={photo} />
                    </PhotoCircle>
                    <TextDivRight>
                        <PhotoTextRight>
                            {language.mongo}
                        </PhotoTextRight>
                        <PhotoTextRight>
                            {language.mongoose}
                        </PhotoTextRight>
                        <PhotoTextRight>
                            {language.node}
                        </PhotoTextRight>
                        <PhotoTextRight>
                            {language.styledC}
                        </PhotoTextRight>
                        <PhotoTextRight>
                            {language.google}
                        </PhotoTextRight>
                    </TextDivRight>
                </PhotoDiv>
            </TopDiv>
            <SecondRow>
                <SecondLeft>
                    <h1 style={{marginBottom: '0em', textDecoration: 'underline'}}>
                        Google Map API
                    </h1>
                    <SecondLeftText>
                        To your right, you will see an address form. This form will be used to populate the info submitted to the map. The address you will input, will be using a formula to reverse geocode the address into a unique longitute and latitude, which will then put a pin on the map, utilizing Google Map API. You will also notice that an address will autopopulate, once you start typing, in the address input. <br></br><br></br> The information, from this form, is then sent to the Mongo Database utilizing Node, Express, and Mongoose. On the front end I am utilizing Redux to then populate the information and display it on the map. <br></br><br></br> Click on a marker to open an infowindow with information related to that specific location, from the form. <br></br><br></br> Also try out the filter field! You are able to filter through the locations that contain any character or words, related to what you type.
                    </SecondLeftText>
                </SecondLeft>
                <SecondRight onSubmit={handleSubmit}>
                    <InputBox>
                        <Question>
                            {question.name}
                        </Question>
                        <Input onChange={e => setMapData({ ...mapData, name: e.target.value })} />
                    </InputBox>
                    <InputBox>
                        <Question>
                            {question.address}
                        </Question>
                        <Input ref={ref} onBlur={e => setMapData({ ...mapData, address: e.target.value })} />
                    </InputBox>
                    <InputBox>
                        <Question>
                            {question.photo}
                        </Question>
                        <FileBase required type={'file'} onDone={({base64}) => setMapData({ ...mapData, photo: base64  })} onChange={fileHandler} multiple={false}/>
                    </InputBox>
                    <SubmitComplete className={'submitComplete'}>
                            {submitComplete}
                        </SubmitComplete>
                    <Submit className="submitButton">
                        Submit
                    </Submit>
                </SecondRight>
            </SecondRow>
            <Map />
            <Login />
            <Showcase />
        </MainDiv>
    )
}

HomePage.defaultProps = {
    language: {
        html: 'HTML',
        css: 'CSS',
        javascript: 'Javascript',
        react: 'React',
        redux: 'Redux',
        express: 'Express',
        mongo: 'MongoDB',
        mongoose: 'Mongoose',
        node: 'Node-JS',
        styledC: 'Styled-Components',
        google: 'Google API',
        redux: 'Redux'
    },
    name: 'Giovanni Adorno',
    occupation: 'Software Developer',
    question: {
        name: 'Type in a clever name for this location',
        address: 'Type in an address',
        photo: 'Upload a picture to represent this location'
    },
    submitComplete: 'Form has been submitted Successfully',
}

export default HomePage
