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

export const Div = styled.div`
display: flex;
width: 100%;
height: 65em;
border: 1px solid black;
background-color: lightblue;
align-items: center;
justify-content: flex-start;
flex-direction: column;
flex-wrap: wrap;
`

export const Background = styled.img`
position: absolute;
width: 100%;
height: 100%;
`

export const BackgroundCover = styled.div`
height: 100%;
width: 100%;
display: flex;
background-color: #00000070;
z-index: 2;
flex-direction: row;
`

export const LeftDiv = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-right: 1px solid white;
z-index: 3;
height: 100%;
width: 100%;
`

export const MiddleDiv = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: flex-start;
align-items: center;
z-index: 3;
height: 100%;
width: 100%;
`

export const RightDiv = styled.div`
display: flex;
flex: 2;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-left: 1px solid white;
z-index: 3;
height: 100%;
width: 100%;
`

export const Header = styled.h1`
color: white;
font-size: 1.8em;
width: 100%;
text-align: center;
font-weight: 550;
font-family: emoji;
`

// Create User
export const LoginDiv = styled.form`
@media ${device.tablet} {
    display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
background-color: #fffffffa;
border-radius: 2em;
height: 50%;
width: 23%;
z-index: 1;
}

@media ${device.laptop} {
height: 80%;
width: 70%;
}

`

export const InputDiv = styled.div`
width: 80%;
height: 10%;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin-top: 1em;
`

export const Label = styled.label`
color black;
font-size: 1em;
font-weight: 550;
width: 100%;
text-align: left;
`

export const Input = styled.input`
width: 100%;
height: 35%;
margin-top: .5em;
box-shadow: 0px 0px 1px 1px #000000c7;
margin-bottom: 2em;
`

export const ButtonDiv = styled.div`
@media ${device.tablet} {
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 100%;
height: 10%;
margin-top: 1em;
}

@media ${device.laptop} {
    height: 7%;
    }
`

export const CreateButton = styled.button`

@media ${device.tablet} {
    width: 40%;
    height: 5%;
    background-color: #e0f1ff;
    margin-top: 4em;
    }

    &:hover {
        background-color: #59b4ff;
        cursor: pointer;
    }

@media ${device.laptop} {
    width: 50%;
}
`

export const LoginButton = styled.button`

@media ${device.tablet} {
    width: 40%;
    height: 5%;
    background-color: #e0f1ff;
    margin-top: 3em;
    }

    &:hover {
        background-color: #59b4ff;
        cursor: pointer;
    }

@media ${device.laptop} {
    width: 50%;
}
`

export const Select = styled.select`
    background-color: white;
    height: 2em;
    position: relative;
    width: 100%;
    margin-top: .5em;
    margin-bottom: 0;
`

export const Paragraph = styled.p`
    font-size: 1em;
    color: black;
    font-family: emoji;
    width: 85%;
    text-align: center;
    margin-top: 1em;
`

export const CreateConfirm = styled.p`
color: green;
font-style: italic;
font-size: 1em;
display: flex;
width: 100%;
height: 2em;
text-align: center;
z-index: 4;
`