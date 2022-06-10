import * as Styled from "./SidePanel.styles";
import { useNavigate } from "react-router-dom";

const SidePanel = () => {
    const navigate = useNavigate();
    return (
        <Styled.Wrapper>
            side panel

            <Styled.Button onClick = {()=> navigate("/admin/usersPerWeek")}>users per week</Styled.Button>
            <Styled.Button onClick = {()=> navigate("/admin/usersPerClass")}>users per class</Styled.Button>
        </Styled.Wrapper>
    );
};

export default SidePanel;