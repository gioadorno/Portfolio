import { MainDiv, TopDiv, Video, VideoCover, PhotoDiv, PhotoCircle, SecondRow, Photo } from "./styles";
import video from './Video/production ID_4441009.mp4';
import photo from './Video/photo.png'

const HomePage = () => {
    return (
        <MainDiv>
            <TopDiv>
                <Video autoPlay={true} muted={true} loop={true} src={video} />
                <VideoCover />
                <PhotoDiv>
                    <PhotoCircle>
                        <Photo src={photo} />
                    </PhotoCircle>
                </PhotoDiv>
            </TopDiv>
            <SecondRow>

            </SecondRow>
        </MainDiv>
    )
}

export default HomePage
