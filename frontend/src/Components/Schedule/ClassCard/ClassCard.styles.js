import styled from "styled-components";

const Wrapper = styled.div`
    font-family: var(--font-text);
    font-size: 0.8em;

    height: 100%;
    
    color: var(--MainBlack);
    background-color: var(--admin-background-mainPanel);
    padding: 0px 20px;
    padding-top: 30px;
    margin-right: 80px;
`;

const CardHeader = styled.div``;

const CardHeaderSubWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: solid 1px var(--MainBlack) ;
`;

const ClassTitle = styled.div`
    font-family: var(--font-secondary-header);
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 8px;
`;

const TeachedBy = styled.div``;

const TimeSlot = styled.div``;

const CardContentWrapper = styled.div`
    display:flex;
`;

const CardContentSubWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`;

const ClassImg = styled.img`
    height: 7em;
    padding-right: 8px;

`;

const ClassLevel = styled.div`
    margin-bottom: 10px;
`;

const ClassDescription = styled.div`

`;

const ClassDescriptionTitle = styled.div`
    font-family: var(--font-text);
    text-decoration: underline;
    margin-bottom: 2px;
`;

const EnrollButton = styled.button`
    align-self: end;
    font-family:var(--font-anomaly);
    width:20vw;
    min-width: 120px;
    margin-top: 10px;

    background-color: transparent;
    font-size: 1.3em;
    color: var(--MainBlack);
    border: solid 1px var(--MainBlack);

    cursor: pointer;
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
`;

export {
    Wrapper,CardHeader, CardHeaderSubWrapper, 
    CardContentWrapper, CardContentSubWrapper,
    ClassTitle, TeachedBy, TimeSlot,
    ClassImg, ClassLevel, ClassDescription, ClassDescriptionTitle,
    EnrollButton
}