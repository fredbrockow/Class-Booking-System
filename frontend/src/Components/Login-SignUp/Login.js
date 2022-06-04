import * as Styled from "./Login.styles"

import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../Context/AuthProvider";


const Login = () => {

    const { setAuth } = useContext(AuthContext);

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('/auth', {
                method: 'POST',
            
                headers: { 
                    'Content-Type': 'application/json' 
                        },
                credentials: 'include',

                body: JSON.stringify({user, pwd})
            
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                setUser('');
                setPwd('');
                setSuccess(true);
            })


        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Styled.Wrapper>
            <Styled.Title>Sign In</Styled.Title>
                    <Styled.Loginform onSubmit={handleSubmit}>
                        <Styled.Label htmlFor="username">Username:</Styled.Label>
                        <Styled.Input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <Styled.Label htmlFor="password">Password:</Styled.Label>
                        <Styled.Input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <Styled.SubmitButton type="submit">Sign In</Styled.SubmitButton>
                    </Styled.Loginform>
        </Styled.Wrapper>
    );
};

export default Login;