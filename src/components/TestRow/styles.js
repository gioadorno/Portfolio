import styled from "styled-components";

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
@media ${device.mobileS} {

}

@media ${device.mobileS} {

}
display: flex;
width: 100%;
height: 67.4em;
border-top: 1px solid white;
z-index: 2;
flex-direction: column;
justify-content: flex-end;

`

export const Footerbar = styled.footer`
    display: flex;
    background-color: #000000ba;
    overflow-x: hidden;
    align-items: center;
    height: 4em;
    border-top: 1px solid white;
    position: initial;
    width: 100%;
    bottom: 0em;
    margin-bottom: 0em;
    flex-direction: row;
    justify-content: space-evenly;
    z-index: 3;
`

export const FooterLink = styled.a`
    color: white;
    z-index: 1;
    font-style: italic;
    font-family: emoji;
    font-size: 1.2em;

    &:hover {
    color: red;
    cursor: pointer;
}
`

export const FooterText = styled.p`
color: white;
`

export const Image = styled.img`
width: 100%;
height: 38%;
z-index: 1;
position: absolute;
`

export const ImageCover = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
background-color: #5cacffc7;
z-index: 3;
align-items: center;
justify-content: flex-start;
`

export const P = styled.p`
margin-top: 3em;
font-size: 1.5em;
font-family: cursive;
color: black;
font-weight: 550;
width: 90%;
text-align: center;
`