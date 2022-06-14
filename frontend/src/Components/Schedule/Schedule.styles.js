import styled from "styled-components";
import backGroundImg from '../../assets/StandingYogaPose.png';

const Wrapper = styled.div`
    height: calc(100% - 41px);
    background-image: url(${backGroundImg});
    background-position: bottom 60px right 200px; 
    background-repeat: no-repeat; 
    background-size: 10%; 

    display: flex;
    flex-direction: column;
    padding-left: 100px;

`;

const SubWrapper = styled.div`
    display: flex;
    margin-top: 20px;
`;

const RightSideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`;

const Title = styled.div`

    margin-top: 40px;
    font-family: var(--font-secondary-header);
    color: var(--MainBlack);
    
`;

const NoClassSelected = styled.div`
    font-family: var(--font-text);
    font-size: 0.8em;

    flex-grow: 1;
    color: var(--MainBlack);
    background-color: var(--semi-tranparent-grey);
    padding: 0px 20px;
    padding-top: 30px;
    margin-right: 80px;

    display: flex;

    
    & span {
        width: 100%;
        height: 40%;
        padding-top: 50px ;
        padding-right: 40%;
        padding-left: 40px;
        
        border-left: solid 1px var(--MainBlack);
        /* border-bottom: solid 1px var(--MainBlack) ; */
    }
`;

export {
    Wrapper, SubWrapper, RightSideWrapper,
    Title, NoClassSelected
}