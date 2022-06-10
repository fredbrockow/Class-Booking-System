import * as Styled from "./AdminPanel.styles";

import SidePanel from "./SidePanel";
import MainPanel from "./MainPanel";

const AdminPanel = () => {
    return (
        <Styled.Wrapper>
            <SidePanel/>
            <MainPanel/>
        </Styled.Wrapper>
    );
};

export default AdminPanel;