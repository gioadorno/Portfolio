import { Div, Footerbar, FooterLink, Image, ImageCover, P } from "./styles";
import photo from '../Video/pexels-sebastian-voortman-189349.jpg';

const Showcase = () => {
    return (
        <>
        <Div>
            <ImageCover>
                <P>
                The section above showcases creating a user and logging in with Authentication. I have also added a feature, if you have different security privileges, you will see different information related to that security level on the right hand side. Passwords are also encrypted utilizing Bcrypt. For general security reasons, please do not use a password you typically use, on this website, even though they are encrypted. Just makeup an easy one, so you can look at the features. Plus I have included fun facts about myself! <br/><br/> Below you will find links related to my professional experience. <br/><br/> Thank you for taking the time in viewing my portfolio, that showcases a very small chunk of what I have to offer!
                </P>
            </ImageCover>
            <Footerbar>
                <FooterLink href="https://github.com/gioadorno">
                    Github
                </FooterLink>
                <FooterLink href="https://www.linkedin.com/in/giovanni-adorno-16709a1a8/">
                    LinkedIn
                </FooterLink>
                <FooterLink href="https://docs.google.com/document/d/1R13vjcN8bIpmn__JcC06SIkrnAB_5yrkkn1Uf90T0vM/edit?usp=sharing">
                    Resume
                </FooterLink>
            </Footerbar>
        </Div>
        </>
    )
}

export default Showcase
