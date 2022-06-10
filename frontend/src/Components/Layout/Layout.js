import styled from "styled-components";

import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";

const Layout = () => {
    return (
        <Wrapper>
            <Header/>
            <Nav/>
            <Outlet/>
        </Wrapper>
    );
};

export default Layout;

const Wrapper = styled.div`
    & > div:last-child {
        height:90vh;

    }
`;