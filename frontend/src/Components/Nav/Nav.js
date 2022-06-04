import * as Styled from "./Nav.styles"

import { useNavigate } from "react-router-dom";


const Nav = () => {
    const navigate = useNavigate();

    return (
        <Styled.Wrapper>
            <Styled.Button onClick = {()=> navigate("/")}>Home</Styled.Button>
            <Styled.Button onClick = {()=> navigate("/about")}>About Us</Styled.Button>
            <Styled.ButtonTest onClick = {()=> navigate("/serverTest")}>Ping Server</Styled.ButtonTest>
        </Styled.Wrapper>
    );
};

export default Nav;