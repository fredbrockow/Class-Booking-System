import * as Styled from "./UserSidePanel.styles";
import { Link } from "react-router-dom";

const UserSidePanel = () => {
    return (

        <Styled.Wrapper>
            <Styled.LinkWrapper>
                <Styled.Title>Your Informations</Styled.Title>
                <Link to="userProfile">Your Profile</Link>
                <Link to="userClass">Your Classes</Link>
            </Styled.LinkWrapper>
        </Styled.Wrapper>
    );
};

export default UserSidePanel;