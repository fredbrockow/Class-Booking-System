import * as Styled from "./UserSidePanel.styles";
import { useNavigate , Link} from "react-router-dom";

const UserSidePanel = () => {
    const navigate = useNavigate();
    return (
        // <Styled.Wrapper>
        //     <Styled.Title>side panel</Styled.Title>
        //         <Styled.Button onClick = {()=> navigate("/userProfile")}>your profile</Styled.Button>
        //         <Styled.Button onClick = {()=> navigate("user/userClass")}>your classes</Styled.Button>
        // </Styled.Wrapper>
        <Styled.Wrapper>
            <Link to="userProfile">your profile</Link>
            <Link to="userClass">your classes</Link>
        </Styled.Wrapper>
    );
};

export default UserSidePanel;