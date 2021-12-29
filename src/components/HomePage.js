import { MainDiv, TopDiv, Video, VideoCover, PhotoDiv, PhotoCircle, SecondRow, Photo, PhotoText, TextDiv, TextDivRight, PhotoTextRight, Name, NameDiv, SecondLeft, SecondRight, SecondLeftText, InputBox, Question, Input } from "./styles";
import video from './Video/production ID_4441009.mp4';
import photo from './Video/photo.png'

const HomePage = ({ language, name, occupation }) => {
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
                        To your right (below on mobile), you will see an address form. This form will be used to populate the info submitted to the map. The address you will input, will be using a formula to reverse geocode the address into a unique longitute and latitude, which will then put a pin on the map, utilizing Google Map API. You will also notice that an address will autopopulate, once you start typing, in the address input. <br></br><br></br> The information, from this form, is then sent to the MongoDB Database utilizing Node, Express, and Mongoose. On the front end I am utilizing Redux to then populate the information and display it on the map.
                    </SecondLeftText>
                </SecondLeft>
                <SecondRight>
                    <InputBox>
                        <Question>
                            Test
                        </Question>
                        <Input />
                    </InputBox>
                </SecondRight>
            </SecondRow>
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
    occupation: 'Software Developer'
}

export default HomePage
