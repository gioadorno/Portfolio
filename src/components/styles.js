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
height: 210em;
background-color: #f7ffff;
justify-content: flex-start;
align-items: center;
`

export const TopDiv = styled.div`
display: flex;
width: 100%;
height: 45%;
border-bottom: 1px solid black;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const NameDiv = styled.div`
@media ${device.mobileS} {

}

@media ${device.tablet} {
display: flex;
position: absolute;
left: 0em;
top: .5em;
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 3em;
z-index: 6;
}

@media ${device.laptopL} {

}
`

export const Name = styled.h1`
@media ${device.mobileS} {

}

@media ${device.tablet} {
color: white;
font-size: 2.5em;
letter-spacing: 4px;
font-style: italic;
font-family: emoji;
z-index: 5;
margin-left: 3em;
}

@media ${device.laptopL} {

}
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
box-shadow: 0px 0px 1px 2px white;
`

export const LangDiv = styled.div`
display: flex;
width: 100%;
height: 3em;
`

export const Photo = styled.img`
width: 100%;
height: 100%;
border-radius: 50%;
border-color: white;
`

export const SecondRow = styled.div`
display: flex;
background-color: white;
z-index: 1;
width: 100%;
height: 45%;
border-top: 1px solid white;
border-bottom: 1px solid white
`

export const TextDiv = styled.div`
@media ${device.mobileS} {

}

@media ${device.tablet} {

}

@media ${device.laptopL} {

}
position: absolute;
width: 100%;
display: flex;
flex-direction: row;
height: 3em;
z-index: 5;
justify-content: flex-start;
align-items: center;
`


export const PhotoText = styled.p`
@media ${device.mobileS} {
  color: white;
  font-family: monospace;
  font-size: 1.2em;
  z-index: 6;
  text-align: left;
  margin-left: 2em;
  font-style: italic

}

@media ${device.tablet} {

}

@media ${device.laptopL} {
  font-size: 1.4em;
  margin-left: 3em;
}

&:hover {
  color: red
}
`

export const TextDivRight = styled.div`
@media ${device.mobileS} {

}

@media ${device.tablet} {

}

@media ${device.laptopL} {

}
position: absolute;
width: 100%;
display: flex;
flex-direction: row;
height: 3em;
z-index: 5;
justify-content: flex-end;
align-items: center;
`

export const PhotoTextRight = styled.p`
@media ${device.mobileS} {
  color: white;
  font-family: monospace;
  font-size: 1.2em;
  z-index: 5;
  text-align: left;
  margin-right: 1.3em;
  font-style: italic

}

@media ${device.tablet} {

}

@media ${device.laptopL} {
  font-size: 1.4em;
  margin-right: 2em;
}

&:hover {
  color: red
}
`

export const SecondLeft = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
height: 100%;
flex: 1;
align-items: flex-start;
background-color: #ffffffe6;
z-index: 2;
`

export const SecondLeftText = styled.p`
color: black;
font-size: 1.2em;
width: 100%;
text-align: center;
margin: -8em 1em 1em 1em;
`

export const SecondRight = styled.form`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
height: 100%;
flex: 1;
align-items: flex-start;
background-color: #00142aa1;
z-index: 2;
overflow-y: auto;
align-content: flex-start;
`

export const InputBox = styled.div`
width: 70%;
height: 25%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0em;
`

export const Question = styled.h1`
color: white;
font-size: 1.5em;
width: 100%;
text-align: center;
`

export const Input = styled.input`
width: 85%;
height: 2em;
box-shadow: 1px 1px 5px 2px #68c0ff9e;
`

export const Submit = styled.button`
width: 35%;
height: 2em;
margin-top: 3em;
box-shadow: 1px 1px 5px 3px #2db1ff5e;

&:hover {
  background-color: aqua;
  color: white;
  cursor: pointer;
}
`

export const SubmitComplete = styled.p`
color: green;
display: none;
width: 100%;
text-align: center;
font-weight: 550;
font-size: 1em;
margin-top: 0;
font-style: italic;
font-family: emoji
`