import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    color: var(--MainBlack);
`;

const MainWrapper= styled.div`
    display: flex;
    margin-top: 14vh;
    margin-left: 14vw;
`;

const MainSubWrapper = styled.div`
    padding-top: 4vh;
`;

const HeaderImg= styled.img`
    width: 25vw;
    margin-right: -3.8vw;
`;

const Title = styled.div`
    font-family: var(--font-main-header);
    font-weight:100 ;
    font-size: 4.3em;
`;

const Subtitle = styled.div`
    margin-top: 1vh;
    font-family: var(--font-secondary-header);
`;

const ParagraphWrapper = styled.div`
    width: 540px;
    margin-top: 10px;
    margin-left: 45%;
`;

const ParagraphTitle = styled.div`
    font-family: var(--font-secondary-header);
    font-size: 1.2em;
`;

const ParagraphSubTitle = styled.div`
    font-family: var(--font-text);
    font-size:  0.8em;
    padding-top: 5px;
`;

const ParagraphSubWrapper = styled.div`
    margin-top: 15px;
    display: flex;
    
    font-family: var(--font-text);
    font-size: 0.8em;
`;

const Content = styled.div`
    line-height: 1.2em;
    font-size: 0.9em;
`;

const Button = styled.button`
    font-family: var(--font-text);
    color: var(--MainBlack);
    font-size: 0.8em;
    
    align-self: flex-end;
    min-width: 130px;
    height: 40px;
    margin-left: 20px;

    border: solid 1px var(--MainBlack);
    border-radius: 0.5em;
    background-color: transparent;

    transition: all 200ms ease-in;

    &:hover{
        cursor: pointer;
        color:black;
        border-color: var(--MainBlack);
        background-color: rgba(210,205,200,1);
        opacity: 0.7;
    }

    &:active{
        transform: translateY(3px) ;
    }

    & svg {
        margin-bottom: -3px;
        font-size: 1.3em;
    }
`;

export {
    Wrapper, MainWrapper, MainSubWrapper,
    HeaderImg,
    Title, Subtitle,
    ParagraphWrapper, ParagraphSubWrapper,
    ParagraphTitle, ParagraphSubTitle,
    Content, Button
}