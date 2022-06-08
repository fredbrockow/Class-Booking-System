import * as Styled from "./Calendar.styles";

import { getClassById, classHours } from "./calendar.utils";

const Calendar = (props) => {

    const { week , yogaClasses, handleOnClick } = props;

    return (
        <Styled.Wrapper>
            <Styled.HoursWrapper>
                {classHours.map((timeSlot, index)=>{
                    return (
                        <Styled.Hours 
                            time_slot={`slot${index+1}`}
                            key = {`9873${index}525jkgnmxy_${index}98a${index}qlj`}
                        >
                            {classHours[index]}
                        </Styled.Hours>
                    )
                })}
            </Styled.HoursWrapper>
            <Styled.Week>
                {week.map((day, index) =>{
                    return (
                    <Styled.WeekDay day={day.dayName} key={`kjhjhfds${day._id}sdfs${index}sfdtqt`}>
                        {Object.keys(day).map((key, index)=>{
                            if(key ==='_id'){
                                return null;
                            }
                            if (key === 'dayName'){
                                return (
                                <Styled.WeekDayName 
                                    day={day[key]} 
                                    key={`873jkds${index}lfkjghluhg${index}khlalj_${index}kjdskhadghf`}
                                >
                                    {day[key]}
                                </Styled.WeekDayName>
                                )
                            }
                            else{
                                if(day[key]!==null){
                                    let aClass = getClassById(day[key].class, yogaClasses);
                                    return (
                                        <Styled.TimeSlot 
                                            time_slot={key} 
                                            level= {aClass.tag}
                                            onClick = {(e)=> handleOnClick(e, {
                                                classSelected: aClass,
                                                day: day.dayName,
                                                hours:classHours[index]
                                            })}
                                            key= {`lkdhfjkhjkshdf_${day.dayName}sdfnjkhkjhdsf_${index}`}
                                        >
                                            {aClass.title}
                                        </Styled.TimeSlot>
                                    )}
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