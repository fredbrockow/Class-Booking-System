import * as Styled from "./SidePanel.styles";
import { useNavigate } from "react-router-dom";

const SidePanel = () => {
    const navigate = useNavigate();
    return (
        <Styled.Wrapper>
            <Styled.Title>side panel</Styled.Title>
            <Styled.Section>
                <Styled.SectionTitle>Edits</Styled.SectionTitle>
                <Styled.Button onClick = {()=> navigate("/admin/editTeachers")}>edit teachers</Styled.Button>
                <Styled.Button onClick = {()=> navigate("/admin/editClasses")}>edit classes</Styled.Button>
                <Styled.Button onClick = {()=> navigate("/admin/editCalendar")}>edit calendar</Styled.Button>
            </Styled.Section>
            <Styled.Section>
                <Styled.SectionTitle>Data Visualization</Styled.SectionTitle>
                <Styled.Button onClick = {()=> navigate("/admin/usersPerWeek")}>users per week</Styled.Button>
                <Styled.Button onClick = {()=> navigate("/admin/usersPerClass")}>users per class</Styled.Button>
            </Styled.Section>
        </Styled.Wrapper>
    );
};

export default SidePanel;