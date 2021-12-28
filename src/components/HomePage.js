import { MainDiv, TopDiv, Video, VideoCover, PhotoDiv, PhotoCircle, SecondRow, Photo, PhotoText, TextDiv, TextDivRight, PhotoTextRight, Name, NameDiv } from "./styles";
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
