import * as Styled from "./UserClassCard.styles";

import {slot_to_hours} from "../../../utils"

const UserClassCard = ( { day, timeSlot, yogaClass, teacher, handleOnClick }) => {

    return (
        <Styled.Wrapper>
        <Styled.CardHeader>
            <Styled.ClassTitle>{yogaClass.title}</Styled.ClassTitle>
            <Styled.CardHeaderSubWrapper>
                <Styled.TeachedBy>Taught by {teacher.firstName} {teacher.lastName}</Styled.TeachedBy>
                <Styled.TimeSlot>{day} - {slot_to_hours[timeSlot]}</Styled.TimeSlot>
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
                <Styled.RemoveButton 
                    onClick = {(e)=> {
                        handleOnClick(e, {
                            dayName: day,
                            slotKey : timeSlot,
                            classId : yogaClass.id
                        })
                    }}>
                    Remove this Class
                </Styled.RemoveButton>
            </Styled.CardContentSubWrapper>
        </Styled.CardContentWrapper>
        </Styled.Wrapper>
    );
};

export default UserClassCard;