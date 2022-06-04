

import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Layout;