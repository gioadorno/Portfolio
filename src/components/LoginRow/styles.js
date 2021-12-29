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

@media ${device.tablet} {
    position: absolute;
    height: 140%;
    width: 120%;

    }
  
    @media ${device.laptopL} {
        height: 100%;
        width: 100%;
    }
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
    margin-top: 0em;
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
font-family: monospace;
font-size: 1em;
width: 100%;
height: 2em;
text-align: center;
z-index: 4;
display: block;
`

export const LoggedDiv = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: row;
justify-content: flex-start;
`

export const InnerLeft = styled.div`
display: flex;
flex: 1;
border-right: 1px solid white;
align-items: center;
justify-content: flex-start;
flex-direction: column;
`


export const InnerRight = styled.div`
display: flex;
flex: 1;
border-left: 1px solid white;
align-items: center;
justify-content: flex-start;
flex-direction: column;
`

export const SecurityText = styled.p`
font-size: 1.2em;
color: white;
width: 100%;
text-align: center;
`

export const BlueColorButton = styled.button`
width: 50%;
height: 2em;
margin-top: 1.5em;

&:hover {
    cursor: pointer;
    background-color: blue
}
`
export const RedColorButton = styled.button`
width: 50%;
height: 2em;
margin-top: 1.5em;

&:hover {
    cursor: pointer;
    background-color: red
}
`
export const WhiteColorButton = styled.button`
width: 50%;
height: 2em;
margin-top: 1.5em;

&:hover {
    cursor: pointer;
    background-color: white;
    color: black
}
`

export const GreenColorButton = styled.button`
width: 50%;
height: 2em;
margin-top: 1.5em;

&:hover {
    cursor: pointer;
    background-color: green
}
`

export const Box = styled.div`
display: flex;
width: 60%;
height: 10em;
margin-top: 5em;
z-index: 6;
background-color: gray;
display: inherit;
`

export const ProfileDiv = styled.div`
@media ${device.mobileS} {
    display: flex;
    z-index: 5;
    position: absolute;
    top: 17em;
    left: 1em;
    flex-direction: column;
}

@media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 15%;
    width: 100%;
    z-index: 5;
}
`

export const Profile = styled.p`
@media ${device.mobileS} {
    color: #00d0ff;
}

@media ${device.tablet} {
    color: black;
    font-size: 1em;
    font-family: emoji;
}
`

export const ProfileImage= styled.img`
width: 4%;
height: 45%;
`

export const Logout = styled.button`
@media ${device.mobileS} {

    width: 70%;
    background-color: #73f9ffa8;
}

@media ${device.tablet} {

    height: 5%;
    width: 20%;
    margin-bottom: 0em;
    margin-top: 0em;
}

&:hover {
    background-color: #59b4ff;
    cursor: pointer;
}
`

export const HeaderFact = styled.h1`
font-size: 1.5em;
color: white;
z-index: 6;
width: 100%;
text-align: center;
`

export const FunFact = styled.p`
color: white;
width: 80%;
text-align: center;
`

export const ModalFormButton = styled.button`
width: 30%;
height: 1.7em;
background-color: lightblue;
z-index: 3;

&:hover {
    cursor: pointer;
    background-color: aqua;
    color: white;
}
`

export const ModalDiv = styled.div`
position: absolute;
display: none;
width: 100%;
height: 60em;
background-color: #000000a1;
left: 0em;
top: 120em;
align-items: center;
justify-content: center;
z-index: 7;
`

export const InnerModal = styled.div`
width: 50%;
border-radius: 10%;
height: 90%;
display: flex;
flex-direction: column;
background-color: white;
justify-content: flex-start;
align-items: center;
`

export const FormTitle = styled.h1`
font-size: 2em;
color: black;
width: 100%;
text-align: center;
`

export const CloseButton = styled.h1`
position: absolute;
top: .5em;
left: 1em;
color: white;
font-size: 1.9em;

&:hover {
    cursor: pointer;
    color: red;
}
`