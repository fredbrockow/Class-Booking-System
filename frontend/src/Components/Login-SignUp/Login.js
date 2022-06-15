import * as Styled from "./Login.styles";
import { useNavigate, useLocation } from "react-router-dom";

import { useRef, useState, useEffect } from 'react';
import useAuth from "../../Hooks/useAuth";


const Login = () => {

    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();

    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');


    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [username, pwd]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('/login', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                        },
                credentials: 'include',

                body: JSON.stringify({username, pwd})
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 200){
                    setUsername('');
                    setPwd('');
                    
                    /** when it's time for Jswt */
                    // const accessToken = response?.data?.accessToken;
                    // const roles = response?.data?.roles;
                    
                    // setAuth({ username, pwd, roles, accessToken });
                    setAuth({...data.data });
                    navigate(from, { replace: true });
                }
                else if (data.status === 404){
                    setErrMsg("user not found");
                }
                else{
                    setErrMsg('Login Failed');
                }
            })

        } catch (err) {
            setErrMsg('Login Failed');
        }
    }

    return (
        <Styled.Wrapper>
            <Styled.SubWrapper>
                <Styled.Title>Log In</Styled.Title>
                    <Styled.Loginform onSubmit={handleSubmit}>
                        <Styled.Field>
                            <Styled.Label htmlFor="username">Username:</Styled.Label>
                            <Styled.Input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                            />
                        </Styled.Field>
                        <Styled.Field>
                            <Styled.Label htmlFor="password">Password:</Styled.Label>
                            <Styled.Input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                        </Styled.Field>
                        <Styled.SubmitButton type="submit">Log In</Styled.SubmitButton>
                    </Styled.Loginform>
                    <Styled.ErrorSection className={errMsg ? "error_msg" : "hide"}>{errMsg}</Styled.ErrorSection>
            </Styled.SubWrapper>
        </Styled.Wrapper>
    );
};

export default Login;