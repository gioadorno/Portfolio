import styled from 'styled-components';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '950px',
    laptopL: '1440px',
    desktop: '1500px'
};

const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };

export const MainDiv = styled.div`
  @media ${device.mobileS} {

  }
display: flex;
flex-direction: column;
width: 100%;
height: 80em;
background-color: #f7ffff;
justify-content: flex-start;
align-items: center;
`

export const TopDiv = styled.div`
display: flex;
width: 100%;
height: 25%;
border-bottom: 1px solid black;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Video = styled.video`
width: 100%;
height: 120%;
position: absolute;
bottom: 20em;
`

export const VideoCover = styled.div`
width: 100%;
height: 100%;
background-color: #00000054;
z-index: 1;
`

export const PhotoDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 3em;
border-top: 1px solid white;
border-bottom: px solid white;
z-index: 4;
background-color: #00000054;
`

export const PhotoCircle = styled.div`
display: inline-block;
width: 12%;
border-radius: 80%;
height: 25%;
z-index: 4;
border-color: white;
position: absolute;
`

export const Photo = styled.img`
width: 100%;
height: 100%;
border-radius: 50%;
border-color: white;
`

export const SecondRow = styled.div`
display: flex;
background-color: black;
z-index: 1;
width: 100%;
height: 25%;
border-top: 1px solid white;
border-bottom: 1px solid white
`