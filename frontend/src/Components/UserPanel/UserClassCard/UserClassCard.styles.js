import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    padding: 16px 0px;
    color: var(--MainBlack);
    border-bottom: solid 1px var(--MainBlack);
`;

const CardHeader = styled.div`
    display:flex;
`;

const CardHeaderSubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 12px;
    font-family: var(--font-text);
    width:100%;
`;

const TimeSlot = styled.div`
    font-family: var(--font-anomaly);

    span {
        text-transform: capitalize;
        font-size: 1.2em;
    }
`;

const CardContentWrapper = styled.div`
    display:flex;
    align-items:baseline;
    justify-content: flex-start;
`;

const ClassTitle = styled.div`
    font-family: var(--font-secondary-header);
`;

const TeachedBy = styled.div`
    font-size: 0.8em;
    margin-left: 6px;
`;

const ClassLevel = styled.div`
    font-size: 0.8em;
    margin-left: 4px;
`;

const RemoveButton = styled.button`
    align-self: flex-end;

    color: var(--MainBlack);
    border-color:var(--MainBlack);

    padding: 5px 20px;
    background-color: transparent;

    transition: all 200ms ease-in;

    &:hover {
        cursor: pointer;
        color: black;
        border-color: var(--MainBlack);
        background-color: rgba(210,205,200,1);
        opacity: 0.7;
    }
    &:active{
        transform: translateY(3px) ;
    }
`;

const CardContentSubWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
`;

const ClassImg = styled.img`
    height: 3.5em;

`;


const ClassDescription = styled.div``;

const ClassDescriptionTitle = styled.div``;



export {
    Wrapper,CardHeader, CardHeaderSubWrapper, 
    CardContentWrapper, CardContentSubWrapper,
    ClassTitle, TeachedBy, TimeSlot,
    ClassImg, ClassLevel, ClassDescription, ClassDescriptionTitle,
    RemoveButton
}