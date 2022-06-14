import styled from "styled-components";
import backGroundImg from '../../assets/SittingYogaPose.png';

const Wrapper = styled.div`
    display: flex;
    height: calc(100% - 41px);

    background-image: url(${backGroundImg});
    background-position: bottom 60px right 120px; 
    background-repeat: no-repeat; 
    background-size: 15%; 
`;

const MainUserPanel = styled.div`
    width: 100%;
`;

const Title = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;
    text-align:center;
    font-family: var(--font-main-header);
    color: var(--MainBlack);
    font-size: 1.7em;
`;

export {
    Wrapper, MainUserPanel, Title
}