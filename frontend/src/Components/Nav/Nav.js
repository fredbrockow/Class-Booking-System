import styled from "styled-components";

import { useNavigate } from "react-router-dom";


const Nav = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Button onClick = {()=> navigate("/")}>Home</Button>
            <Button onClick = {()=> navigate("/about")}>About Us</Button>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const Button = styled.button``;

export default Nav;