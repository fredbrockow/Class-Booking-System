import * as Styled from "./UserClassCard.styles";

import {slot_to_hours} from "../../../utils"

const UserClassCard = ( { day, timeSlot, yogaClass, teacher, handleOnClick }) => {

    return (
        <Styled.Wrapper>
        <Styled.CardHeader>
            <Styled.ClassImg alt="" src={yogaClass.imgSrc} />
            <Styled.CardHeaderSubWrapper>
                <Styled.TimeSlot><span>{day}</span> - {slot_to_hours[timeSlot]}</Styled.TimeSlot>
                <Styled.CardContentWrapper>
                    <Styled.ClassTitle>{yogaClass.title}</Styled.ClassTitle>
                    <Styled.TeachedBy>- Taught by {teacher.firstName} {teacher.lastName}</Styled.TeachedBy>
                    <Styled.ClassLevel>- Level: {yogaClass.tag}</Styled.ClassLevel>
                    <Styled.CardContentSubWrapper>
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
            </Styled.CardHeaderSubWrapper>
        </Styled.CardHeader>




        <Styled.CardContentWrapper>
            <Styled.CardContentSubWrapper>
                {/* <Styled.ClassDescription>
                    <Styled.ClassDescriptionTitle>About This Class</Styled.ClassDescriptionTitle>
                    {yogaClass.description}
                </Styled.ClassDescription> */}

            </Styled.CardContentSubWrapper>
        </Styled.CardContentWrapper>
        </Styled.Wrapper>
    );
};

export default UserClassCard;