import styled from "styled-components";
import backGroundImg from '../../assets/StandingYogaPose.png';

const Wrapper = styled.div`
    height: calc(100% - 41px);
    background-image: url(${backGroundImg});
    background-position: bottom 60px right 200px; 
    background-repeat: no-repeat; 
    background-size: 10%; 
`;

const SubWrapper = styled.div`
    display: flex;
`;

const RightSideWrapper = styled.div`

    margin-left: 2em;

`;

const Title = styled.div``;

export {
    Wrapper, SubWrapper, RightSideWrapper,
    Title
}