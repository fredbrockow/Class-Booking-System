import * as Styled from "./UserPanel.styles";
import { Outlet } from "react-router-dom";

import UserSidePanel from "./UserSidePanel";

const UserPanel = () => {
    return (
        <Styled.Wrapper>
            <UserSidePanel/>
            <Styled.MainUserPanel>
                <Styled.Title>My Account</Styled.Title>
                <Outlet/>
            </Styled.MainUserPanel>
        </Styled.Wrapper>
    );
};

export default UserPanel;