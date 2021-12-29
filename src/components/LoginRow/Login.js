import { Div, Background, BackgroundCover, LeftDiv, MiddleDiv, RightDiv, Header, LoginDiv, InputDiv, Input, Label, ButtonDiv, CreateButton, LoginButton, Select, Paragraph, CreateConfirm, LoggedDiv, InnerLeft, InnerRight, SecurityText, RedColorButton, BlueColorButton, GreenColorButton, WhiteColorButton, Box, ProfileDiv, Logout, HeaderFact, FunFact, ModalFormButton, ModalDiv, InnerModal, FormTitle, CloseButton } from "./styles";
import image from '../Video/pexels-burst-373974.jpg';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userCreate, signin } from '../../actions/login';


const initialState = { name: '', password: '', confirmPassword: '', securityLevel: '' };

const loginInitialState = { name: '', password: '' };

const Login = ({ header, label, options, create, login, loginButton, name }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Get logged in user info
    const user = JSON.parse(localStorage.getItem('profile'));
    const [user1, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const [createUser, setCreateUser] = useState(initialState);
    // State for login fields
    const [loginData, setLoginData] = useState(loginInitialState);


    const handleChange = (e) => {
        setCreateUser({ ...createUser, [e.target.name] : e.target.value })
    };

        // Submit new user to Database
        const createUserSubmit = (e) => {
            e.preventDefault();
            document.querySelector('.createButton').style.display = 'none';
            document.querySelector('.createConfirm').style.display = 'flex';
            dispatch(userCreate(createUser));
        };
    

        
        const loginChange = (e) => {
            setLoginData({ ...loginData, [e.target.name]: e.target.value })
        };
        
        const loginSubmit = (e) => {
            e.preventDefault();
            dispatch(signin(loginData, navigate))
        };
        const boxBlue = () => {
            document.querySelector('.box').style.backgroundColor = 'blue';
        };
        const boxRed = () => {
            document.querySelector('.box').style.backgroundColor = 'red';
        };
        const boxWhite = () => {
            document.querySelector('.box').style.backgroundColor = 'white';
        };
        const boxGreen = () => {
            document.querySelector('.box').style.backgroundColor = 'green';
        };

            // Logout Function
    const logoutClick = () => {
        dispatch({ type: 'LOGOUT' })

        navigate('/');

        user = null
    };

    const onMouseOver = () => {
        document.querySelector('.closeForm').style = 'color: red; cursor: pointer'
    };

    const onMouseOut = () => {
        document.querySelector('.closeForm').style = 'color: white'
    };

    const openForm = () => {
        document.querySelector('.modalForm').style = 'display: flex;'
    }

    const closingForm = () => {
        document.querySelector('.modalForm').style = 'display: none;'
    }

    return (
        <Div>
            <Background src={image} />
            <BackgroundCover>
                <LeftDiv>
                    <Header>
                        {header.create}
                    </Header>
                    <LoginDiv onSubmit={createUserSubmit}>
                        <InputDiv>
                            <Label>
                                {label.username}
                            </Label>
                            <Input name={name.name} required autoFocus onChange={handleChange} />
                        </InputDiv>
                        <InputDiv>
                            <Label>
                                {label.password}
                            </Label>
                            <Input type={'password'}  name={name.password} required autoFocus onChange={handleChange} />
                        </InputDiv>
                        <InputDiv>
                            <Label>
                                {label.confirmPassword}
                            </Label>
                            <Input type={'password'}  name={name.confirmPassword} required autoFocus onChange={handleChange} />
                        </InputDiv>
                        <InputDiv>
                            <Label>
                                {label.security}
                            </Label>
                            <Select name={name.securityLevel} required autoFocus onChange={handleChange} >
                                <option />
                                {/* <option>
                                    {options.level1}
                                </option> */}
                                <option>
                                    {options.level2}
                                </option>
                                <option>
                                    {options.level3}
                                </option>
                                <option>
                                    {options.master}
                                </option>
                            </Select>
                        </InputDiv>
                            <CreateConfirm className={'createConfirm'} />
                        <CreateButton className="createButton">
                            {create}
                        </CreateButton>
                    </LoginDiv>
                </LeftDiv>
                <MiddleDiv>
                    <Header>
                        {header.login}
                    </Header>
                    <LoginDiv onSubmit={loginSubmit}>
                        <InputDiv>
                            <Label>
                                {login.username}
                            </Label>
                            <Input name={name.loginName} onChange={loginChange} required autoFocus />
                        </InputDiv>
                        <InputDiv>
                            <Label>
                                {login.password}
                            </Label>
                            <Input type={'password'} name={name.loginPass} onChange={loginChange} required autoFocus />
                        </InputDiv>
                        <LoginButton>
                            {loginButton}
                        </LoginButton>
                        <Paragraph>
                            This section is to showcase creating a user and logging in with Authentication. I have also added a feature, if you have different security privileges, you will see different information related to that security level on the right hand side. Passwords are also encrypted utilizing Bcrypt. For general security reasons, please do not use a password you typically use, on this website, even though they are encrypted. Just makeup an easy one, so you can look at the features. <br/> Plus I have included fun facts about myself!
                        </Paragraph>
                    </LoginDiv>
                </MiddleDiv>
                <RightDiv>
                    <Header>
                        {header.logged}{user?.result?.name}
                    </Header>
                        {user?.result?.securityLevel == 'Master' ? (
                            <LoggedDiv>
                                <InnerLeft>
                                    <Logout onClick={logoutClick}>
                                        Logout
                                    </Logout>
                                    <SecurityText>
                                        Security Level: Master
                                    </SecurityText>
                                    <BlueColorButton onClick={boxBlue}>
                                        Blue
                                    </BlueColorButton>
                                    <WhiteColorButton onClick={boxWhite}>
                                        White
                                    </WhiteColorButton>
                                    <RedColorButton onClick={boxRed}>
                                        Red
                                    </RedColorButton>
                                    <GreenColorButton onClick={boxGreen}>
                                        Green
                                    </GreenColorButton>
                                    <Box className="box">
                                    </Box>
                                </InnerLeft>
                                <InnerRight>
                                    <HeaderFact>
                                        Fun Fact About Me:
                                    </HeaderFact>
                                    <FunFact>
                                        At one point in my life, I took classes in 3D modeling and animation. I love creatind 3D architecture of buildings, homes, etc. Basically anything that allows me to be creative with design and engineer how certain things function. Along with that I also utilized that skill to dive in to creating video games and messing around with different engines. <br/><br/> Funny thing is I actually went to school for Audio Engineering initially, which I do enjoy as well. I guess I really enjoy engineering and pioneering in general!
                                    </FunFact>
                                </InnerRight>
                            </LoggedDiv>
                        ) : user?.result?.securityLevel == 'Level 3' ? (
                            <LoggedDiv>
                                <InnerLeft>
                                    <Logout onClick={logoutClick}>
                                        Logout
                                    </Logout>
                                    <SecurityText>
                                        Security Level: Level 3
                                    </SecurityText>
                                    <SecurityText style={{ fontSize: '1.2em' }}>
                                        Clicking the 'Open Form' button will open up a modal form. The form itself has no functionality other than to showcase the 'Modal' aspect.
                                    </SecurityText>
                                    <ModalFormButton onClick={openForm}>
                                        Open Form
                                    </ModalFormButton>
                                    <ModalDiv className="modalForm">
                                        <CloseButton onClick={closingForm}>
                                            Close
                                        </CloseButton>
                                        <InnerModal>
                                            <FormTitle>
                                                Modal Page
                                            </FormTitle>
                                            <Label style={{ textAlign: 'center', width: '100%' }}>
                                                Hello
                                            </Label>
                                            <Input style={{ height: '2%', width: '50%' }} />
                                            <Label style={{ textAlign: 'center', width: '100%' }}>
                                                Have
                                            </Label>
                                            <Input style={{ height: '2%', width: '50%' }}/>
                                            <Label style={{ textAlign: 'center', width: '100%' }}>
                                                A
                                            </Label>
                                            <Input style={{ height: '2%', width: '50%' }}/>
                                            <Label style={{ textAlign: 'center', width: '100%' }}>
                                                Nice
                                            </Label>
                                            <Input style={{ height: '2%', width: '50%' }}/>
                                            <Label style={{ textAlign: 'center', width: '100%' }}>
                                                Day
                                            </Label>
                                            <Input style={{ height: '2%', width: '50%' }}/>
                                        </InnerModal>
                                    </ModalDiv>
                                </InnerLeft>
                                <InnerRight>
                                    <HeaderFact>
                                        Fun Fact About Me:
                                    </HeaderFact>
                                    <FunFact>
                                        I've been involved in doing fitness and weightlifting for a good 15+ years now. I generally workout 5-6 days a week and have actually thought about competing on stage in physique competitions. <br/><br/> I have owned two businesses in the past that I had started. One I had a gym where I train individuals to better themselves in every aspect. I really do enjoy teaching others, as well as learning. I also had a video production company, where I would shoot videos for businesses here in Arizona. I did everything from capturing video, audio, utilized lighting, and edited videos as well as audio.
                                    </FunFact>
                                </InnerRight>
                            </LoggedDiv>
                        ) : user?.result?.securityLevel == 'Level 2' ? (
                            <LoggedDiv>
                                <InnerLeft>
                                    <Logout onClick={logoutClick}>
                                        Logout
                                    </Logout>
                                    <SecurityText>
                                        Security Level: Level 2
                                    </SecurityText>
                                </InnerLeft>
                                <InnerRight>
                                    <HeaderFact>
                                        Fun Fact About Me:
                                    </HeaderFact>
                                    <FunFact>
                                        Something I really enjoy doing is designing websites. Being able to convert someone's needs and wants in to an actual website/display is something I find challenging and exciting. It allows me to grow a lot and improve my skills as a developer. <br/><br/> As you see, this portfolio was created utilizing programming languages such as: React, Javascript, Node JS, Express, MongoDB/Mongoose, and Styled-Components.
                                    </FunFact>
                                </InnerRight>
                            </LoggedDiv>
                        ) : user?.result?.securityLevel == 'Level 1' ? (
                            <LoggedDiv>
                            <InnerLeft>
                                <Logout onClick={logoutClick}>
                                    Logout
                                </Logout>
                                <SecurityText>
                                    Security Level: Level 1
                                </SecurityText>
                            </InnerLeft>
                            <InnerRight>
                                <HeaderFact>
                                    Fun Fact About Me:
                                </HeaderFact>
                                <FunFact>
                                    I have a lot of different skills that shock people initially. One obviously being I have the skills, as a Full Stack Developer utilizing MERN, to build full stack applications. I know how to produce music, am a Certified Personal Trainer, produce/edit videos, broke two fitness records in high school, play multiple sports, and at one point I was able to build 3D model architecture utilizing 3DS Max. Did I also mention I DJ'ed at big events and had a manager? 
                                </FunFact>
                            </InnerRight>
                        </LoggedDiv>
                        ) : null}
                </RightDiv>
            </BackgroundCover>
        </Div>
    )
}

Login.defaultProps = {
    header: {
        create: 'Create User',
        login: 'Login',
        logged: 'Logged in as: '
    },
    label: {
        username: 'Create Username:',
        email: 'Enter an Email Address',
        password: 'Create Password',
        confirmPassword: 'Confirm Password',
        security: 'Select Security Level'
    },
    options: {
        level1: 'Level 1',
        level2: 'Level 2',
        level3: 'Level 3',
        master: 'Master'
    },
    create: 'Create User',
    loginButton: 'Login',
    login: {
        username: 'Enter Username',
        password: 'Enter in your password'
    },
    name: {
        email: 'email',
        password: 'password',
        name: 'name',
        confirmPassword: 'confirmPassword',
        securityLevel: 'securityLevel',
        loginName: 'name',
        loginPass: 'password'
    },
}

export default Login
