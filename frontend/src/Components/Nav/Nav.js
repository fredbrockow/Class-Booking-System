import * as Styled from "./Nav.styles"

import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import { isObjectEmpty } from "../../utils";

const Nav = () => {
    const navigate = useNavigate();

    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
        setAuth({});
    }

    return (
        <Styled.Wrapper>
            <Styled.Button onClick = {()=> navigate("/")}>Home</Styled.Button>
            <Styled.Button onClick = {()=> navigate("/about")}>About Us</Styled.Button>
            <Styled.ButtonTest onClick = {()=> navigate("/serverTest")}>Ping Server</Styled.ButtonTest>
            <Styled.Button onClick = {()=> navigate("/myClass")}>for users</Styled.Button>
             <Styled.Button onClick = {()=> navigate("/admin")}>for admin</Styled.Button>
            {
                isObjectEmpty(auth) ?
                <Styled.Button onClick = {()=> navigate("/login")}>Login</Styled.Button>
                :
                <>
                    <Styled.Button onClick = {handleLogout}>Logout</Styled.Button>
                    <p> welcome back {auth.username}</p>
                </>

            }

        </Styled.Wrapper>
    );
};

export default Nav;