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
height: 53em;
border: 1px solid black;
background-color: lightblue;
z-index: 1;
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
    margin-bottom: 0;
    flex-direction: row;
    justify-content: space-evenly;
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