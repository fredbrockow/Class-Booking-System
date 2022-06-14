import * as Styled from "./SidePanel.styles";
import { useNavigate } from "react-router-dom";

const SidePanel = () => {
    const navigate = useNavigate();
    return (
        <Styled.Wrapper>
            <Styled.SubWrapper>
                <Styled.Title>Admin Actions</Styled.Title>
                <Styled.Section>
                    <Styled.SectionTitle>Edits</Styled.SectionTitle>
                    <Styled.Button onClick = {()=> navigate("/admin/editTeachers")}>Teachers</Styled.Button>
                    <Styled.Button onClick = {()=> navigate("/admin/editClasses")}>Classes</Styled.Button>
                    <Styled.Button onClick = {()=> navigate("/admin/editCalendar")}>Calendar</Styled.Button>
                </Styled.Section>
                <Styled.Section>
                    <Styled.SectionTitle>Data Insights</Styled.SectionTitle>
                    <Styled.Button onClick = {()=> navigate("/admin/usersPerWeek")}>Attendance Per Week</Styled.Button>
                    <Styled.Button onClick = {()=> navigate("/admin/usersPerClass")}>Attendance Per Class</Styled.Button>
                </Styled.Section>
            </Styled.SubWrapper>
        </Styled.Wrapper>
    );
};

export default SidePanel;