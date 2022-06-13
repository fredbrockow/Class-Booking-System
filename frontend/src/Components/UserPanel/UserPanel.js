import * as Styled from "./UserPanel.styles";
import { Outlet } from "react-router-dom";

import UserSidePanel from "./UserSidePanel";

const UserPanel = () => {
    return (
        <Styled.Wrapper>
            <UserSidePanel/>
            <Styled.MainPanel>
                <Styled.Title>THIS IS THE USER PANEL</Styled.Title>
                <Outlet/>
            </Styled.MainPanel>
        </Styled.Wrapper>
    );
};

export default UserPanel;