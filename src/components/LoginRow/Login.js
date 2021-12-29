import { Div, Background, BackgroundCover, LeftDiv, MiddleDiv, RightDiv, Header, LoginDiv, InputDiv, Input, Label, ButtonDiv, CreateButton, LoginButton, Select, Paragraph, CreateConfirm } from "./styles";
import image from '../Video/pexels-burst-373974.jpg';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userCreate, signin } from '../../actions/login';

const initialState = { name: '', email: '', password: '', confirmPassword: '', securityLevel: '' };

const loginInitialState = { loginName: '', loginPassword: '' };

const Login = ({ header, label, options, create, login, loginButton, name }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Get logged in user info
    const user = JSON.parse(localStorage.getItem('profile'));

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
            document.querySelector('.createConfirm').style.display = 'flex'
            dispatch(userCreate(createUser));
        };
    

        const loginSubmit = (e) => {
            dispatch(signin(loginData, navigate))
        };

        const loginChange = (e) => {
            setLoginData({ ...loginData, [e.target.name]: e.target.value })
        };

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
                                {label.email}
                            </Label>
                            <Input name={name.email} required autoFocus onChange={handleChange} />
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
                            <Select name={name.security} required autoFocus onChange={handleChange} >
                                <option />
                                <option>
                                    {options.level1}
                                </option>
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
                        <ButtonDiv>
                        <CreateConfirm className="createConfirm" />

                        </ButtonDiv>
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
                            This section is to showcase creating a user and logging in with Authentication. I have also added a feature, if you have different security privileges, you will see different information related to that security level on the right hand side. Passwords are also encrypted utilizing Bcrypt. For general security reasons, please do not use a password you typically use, on this website, even though they are encrypted. Just makeup an easy one, so you can look at the features. <br/> The page will refresh once you login, so it will appropriately log you in.
                        </Paragraph>
                    </LoginDiv>
                </MiddleDiv>
                <RightDiv>
                    <Header>
                        {header.logged}{user?.result?.name}
                    </Header>
                        {user?.result?.securityLevel == 'Master' ? (
                            <p>
                                Master
                            </p>
                        ) : user?.result?.securityLevel == 'level3' ? (
                            <p>
                                Level 3
                            </p>
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
        loginName: 'loginName',
        loginPass: 'loginPass'
    },
}

export default Login
