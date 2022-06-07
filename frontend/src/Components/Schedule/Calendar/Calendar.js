import * as Styled from "./Calendar.styles";

import { getClassById, classHours } from "./calendar.utils";

const Calendar = (props) => {

    const { week , yogaClasses, handleOnClick } = props;

    return (
        <Styled.Wrapper>
            <Styled.HoursWrapper>
                {classHours.map((timeSlot, index)=>{
                    return (
                        <Styled.Hours time_slot={`slot${index+1}`}>{classHours[index]}</Styled.Hours>

                    )
                })}
            </Styled.HoursWrapper>
            <Styled.Week>
                {week.map((day, index) =>{
                    return (
                    <Styled.WeekDay day={day.name}>
                        <Styled.WeekDayName 
                            day={day.name} 
                            key={`${day.name}_${index}`}
                        >
                            {day.name}
                        </Styled.WeekDayName>
                        {day.slots.map((slot, index) => {
                            if(slot){
                                let aClass = getClassById(slot, yogaClasses);
                                return (
                                    <>
                                        {slot&&(
                                            <Styled.TimeSlot 
                                                time_slot={`slot${index+1}`} 
                                                level= {aClass.tag}
                                                onClick = {(e)=> handleOnClick(e, {
                                                    classSelected: aClass,
                                                    day: day.name,
                                                    hours:classHours[index]
                                                })}
                                                key= {`slot${index+1}_${day.name}_${index}`}
                                            >
                                                {aClass.title}
                                            </Styled.TimeSlot>
                                        )}
                                    </>
                                )
                            }
                            else {
                                return null;
                            }
                        }
                            )}
                    </Styled.WeekDay>

                    )}
                    )}

            </Styled.Week>
        </Styled.Wrapper>
    );
};

export default Calendar;