import styled from "styled-components";
import backGroundImg from '../../assets/bande_PageAccueil.png';

import { Outlet } from "react-router-dom";

import Nav from "../Nav/Nav";

const Layout = () => {
    return (
        <Wrapper>
            <Nav/>
            <Outlet/>
        </Wrapper>
    );
};

export default Layout;

const Wrapper = styled.div`
    background-image: url(${backGroundImg});
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    
    height:100vh;
`;