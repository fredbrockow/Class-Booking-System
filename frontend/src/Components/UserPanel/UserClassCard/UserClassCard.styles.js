import styled from "styled-components";

const Wrapper = styled.div`
    width: 50%;
    background-color: lightgray;
`;

const CardHeader = styled.div``;

const CardHeaderSubWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ClassTitle = styled.div``;

const TeachedBy = styled.div``;

const TimeSlot = styled.div``;

const CardContentWrapper = styled.div`
    display:flex;
`;

const CardContentSubWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ClassImg = styled.img`
    height: 5em;

`;

const ClassLevel = styled.div``;

const ClassDescription = styled.div``;

const ClassDescriptionTitle = styled.div``;

const RemoveButton = styled.button`
    align-self: end;
`;

export {
    Wrapper,CardHeader, CardHeaderSubWrapper, 
    CardContentWrapper, CardContentSubWrapper,
    ClassTitle, TeachedBy, TimeSlot,
    ClassImg, ClassLevel, ClassDescription, ClassDescriptionTitle,
    RemoveButton
}