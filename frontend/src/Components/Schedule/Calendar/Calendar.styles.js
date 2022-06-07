import styled from "styled-components";
import { 
    class_level_color, 
    slot_color, days_colors

} from "./calendar.utils";


const Week = styled.div`
    background-color: #f5f5f5;

    grid-column-start: week;

    display: grid;
    grid-template-columns:
    [monday] 1fr
    [tuesday] 1fr
    [wednesday] 1fr;
`;

const WeekDayName = styled.div`
    background-color: ${props=>days_colors[props.day]};
    grid-row-start: title;
`;

const WeekDay = styled.div`
    display: grid;
    grid-template-rows:
    [title] 1fr
    [slot1] 1fr 
    [slot2] 1fr 
    [slot3] 1fr 
    [slot4] 1fr 
    [slot5] 1fr
    [slot6] 1fr;

    grid-column-start: ${props => props.day};
`;

const TimeSlot = styled.div`
    background-color: ${props=>class_level_color[props.level]};
    grid-row-start: ${props=>props.time_slot};

    height : 50px;

`;

const Hours = styled.div`
    grid-column-start: hours;
    grid-row-start: ${props=>props.time_slot};

    font-size: 0.7em;

    align-self: flex-end;
    justify-self: flex-end;
    border-bottom: 1px solid black;

`;

const HoursWrapper = styled.div`
    display: grid;
    grid-template-rows:
    [title] 1fr
    [slot1] 1fr 
    [slot2] 1fr 
    [slot3] 1fr 
    [slot4] 1fr 
    [slot5] 1fr
    [slot6] 1fr;
`;

const Wrapper = styled.div`
    display: flex;
`;

export {
    Week,
    WeekDay, WeekDayName,
    TimeSlot, Hours,
    Wrapper, HoursWrapper
}