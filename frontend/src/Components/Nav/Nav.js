import * as Styled from "./Nav.styles";
import { VscAccount } from "react-icons/vsc";

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
            <Styled.LeftGroup>
                <Styled.AdminButton onClick = {()=> navigate("/admin")}>ADMIN PANEL</Styled.AdminButton>
            </Styled.LeftGroup>
            <Styled.MiddleGroup>
                <Styled.Button onClick = {()=> navigate("/")}>Home</Styled.Button>
                <Styled.Button onClick = {()=> navigate("/schedule")}>Schedule</Styled.Button>
                <Styled.Button onClick = {()=> navigate("/about")}>About Us</Styled.Button>
            </Styled.MiddleGroup>
            <Styled.RightGroup>
                <Styled.AccountButton onClick = {()=> navigate("/user")}>My Account <VscAccount/></Styled.AccountButton>
                {
                    isObjectEmpty(auth) ?
                    <Styled.LoginButton onClick = {()=> navigate("/login")}>Log In</Styled.LoginButton>
                    :
                    <>
                        <Styled.LoginButton onClick = {handleLogout}>Logout</Styled.LoginButton>
                        {/* <p> welcome back {auth.username}</p> */}
                    </>

                }

            </Styled.RightGroup>

        </Styled.Wrapper>
    );
};

export default Nav;