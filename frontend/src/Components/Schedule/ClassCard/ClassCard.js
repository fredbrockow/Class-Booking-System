import * as Styled from "./ClassCard.styles";

const ClassCard = ({ selectedClass }) => {

    const yogaClass = selectedClass.classSelected;

    return (
        <Styled.Wrapper>
            <Styled.CardHeader>
                <Styled.ClassTitle>{yogaClass.title}</Styled.ClassTitle>
                <Styled.CardHeaderSubWrapper>
                    <Styled.TeachedBy>Taught by {yogaClass.teacher}</Styled.TeachedBy>
                    <Styled.TimeSlot>{selectedClass.day} - {selectedClass.hours}</Styled.TimeSlot>
                </Styled.CardHeaderSubWrapper>
            </Styled.CardHeader>
            <Styled.CardContentWrapper>
                <Styled.ClassImg alt="" src={yogaClass.imgSrc} />
                <Styled.CardContentSubWrapper>
                    <Styled.ClassLevel>Level: {yogaClass.tag}</Styled.ClassLevel>
                    <Styled.ClassDescription>
                        <Styled.ClassDescriptionTitle>About This Class</Styled.ClassDescriptionTitle>
                        {yogaClass.description}
                    </Styled.ClassDescription>
                    <Styled.EnrollButton>ENROLL</Styled.EnrollButton>
                </Styled.CardContentSubWrapper>
            </Styled.CardContentWrapper>
        </Styled.Wrapper>
    );
};

export default ClassCard;