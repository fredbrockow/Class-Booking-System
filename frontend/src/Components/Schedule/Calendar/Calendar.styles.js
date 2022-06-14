import styled from "styled-components";
import { 
    class_level_color, 
    days_colors

} from "./calendar.utils";


const Week = styled.div`
    background-color: #e7e6e1;
    /* background-color: #cadefc; */

    grid-column-start: week;

    display: grid;
    grid-template-columns:
    [monday] 1fr
    [tuesday] 1fr
    [wednesday] 1fr
    [thursday] 1fr
    [friday] 1fr
    [saturday] 1fr;
`;

const WeekDayName = styled.div`
    background-color: ${props=>days_colors[props.day]};
    grid-row-start: title;
    text-align: center;
    padding-top: 8px;
    font-family: var(--font-anomaly);
    font-size: 0.9em;
    font-weight: bold;
    color: var(--MainBlack);

    border-bottom: solid 1px var(--MainBlack);
    text-transform: capitalize; 
`;

const WeekDay = styled.div`
    display: grid;
    grid-template-rows:
    [title] 0.5fr
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

    /* height : 50px; */

`;

const Hours = styled.div`
    grid-column-start: hours;
    grid-row-start: ${props=>props.time_slot};

    font-size: 0.7em;
    color: var(--MainBlack);

    align-self: flex-end;
    justify-self: flex-end;
    border-bottom: 1px solid black;

`;

const HoursWrapper = styled.div`
    width: 70px;
    display: grid;
    grid-template-rows:
    [title] 0.5fr
    [slot1] 1fr 
    [slot2] 1fr 
    [slot3] 1fr 
    [slot4] 1fr 
    [slot5] 1fr
    [slot6] 1fr;
`;

const ClassSlotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height:100%;
    padding: 0px 5px;

`;

const ClassName = styled.div`
    font-family: var(--font-secondary-header);
    text-align: center;
`;

const ClassLevel = styled.div`
    font-family: var(--font-text);
    color: var(--MainBlack);
    font-size: 0.7em;
    text-transform: capitalize; 
`;

const Wrapper = styled.div`
    display: flex;
    height: 414px;

    border-right: solid 6px var(--button-background-gray);
`;

export {
    Week,
    WeekDay, WeekDayName,
    TimeSlot, Hours, 
    ClassSlotWrapper, ClassName, ClassLevel,
    Wrapper, HoursWrapper
}