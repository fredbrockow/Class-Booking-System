import * as Styled from "./Form.styles";

import { useState, useEffect} from "react";

import { formatingClasses, formatingCalendar } from "../Admin.utils";
import CustomSelector from "./CustomSelector";

const EditCalendar = ({teachers , classes, calendar, setCalendar }) => {

    const [yogaClass, setYogaClass] = useState('');
    const [day, setDay] = useState('');
    const [timeSlot, setTimeSlot] = useState('');


    const [successMsg, setSuccessMsg] = useState('')
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        window.addEventListener("click", handleOnClick);
        return ()=> {
            window.removeEventListener("click", handleOnClick);
        }
    }, []);

    useEffect(() => {
        setErrMsg("");

    }, [yogaClass, day, timeSlot]);

    const handleOnClick = () => {
        setSuccessMsg("");
    }

    const updateCalendar = (data, dayName) => {

        const newCalendar = calendar.filter(day => day.dayName !== dayName);

        newCalendar.push(data);
        setCalendar([...newCalendar]);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
 
           try {
            await fetch('/admin/calendar', {
                method: 'PATCH',
                headers: { 
                    'Content-Type': 'application/json' 
                        },
                credentials: 'include',

                body: JSON.stringify(
                {
                    dayName: day,
                    slotKey : `${timeSlot}`,
                    class: yogaClass     
                })
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 200){

                    //update the calendar with the POST Returned value
                    updateCalendar(data.data, day);
                    setSuccessMsg(data.message.success);
                }
                else{
                    setErrMsg(data.message.error);
                }
            })

        } catch (err) {
            setErrMsg('Adding Class to the Calendar Failed');
        }
    }

    const handleClassSelectChange = (e) => {
        setYogaClass(e.target.value)
    }

    const handleDaySelectChange = (e) => {
        setDay(e.target.value)
    }
    
    const handleTimeSlotSelectChange = (e) => {
        setTimeSlot(e.target.value)
    }
    const formatedClassesData = formatingClasses (classes, teachers);
    const formatedCalendarData = formatingCalendar (calendar);


    return (
        <Styled.Wrapper>
            <Styled.Title>Add a Class To The Calendar</Styled.Title>
            <Styled.Form onSubmit={handleSubmit}>
                <Styled.Section>
                    <Styled.Label htmlFor ="class"> select a class to assign </Styled.Label>
                    <CustomSelector 
                        label = "select a class"
                        selectedValue = {yogaClass}
                        data = {formatedClassesData}
                        handleSelectChange = {handleClassSelectChange}
                        id = "class"
                    />
                </Styled.Section>
                <Styled.Section>
                    <Styled.Label htmlFor ="day"> select a day in the calendar </Styled.Label>
                    <CustomSelector 
                        label = "select a day"
                        selectedValue = {day}
                        data = {formatedCalendarData.days}
                        handleSelectChange = {handleDaySelectChange}
                        id = "day"
                    />
                </Styled.Section>
                <Styled.Section>
                    {day && 
                    <>
                        <Styled.Label htmlFor ="hour"> select a time slot for this day </Styled.Label>
                        <CustomSelector 
                            label = {
                                formatedCalendarData[`${day}`].length <1 ?
                            "no time slot free ":
                            "select time slot"
                            }
                            selectedValue = {timeSlot}
                            data = {formatedCalendarData[`${day}`]}
                            handleSelectChange = {handleTimeSlotSelectChange}
                            id = "day"
                        />
                    </>
                    }
                </Styled.Section>
                <Styled.Section>
                    <Styled.SubmitButton type="submit">Add New Class</Styled.SubmitButton>
                </Styled.Section>
            </Styled.Form>

            <Styled.SuccessSection className={successMsg ? "success_msg" : "hide"}>{successMsg}</Styled.SuccessSection>
            <Styled.ErrorSection className={errMsg ? "error_msg" : "hide"}>{errMsg}</Styled.ErrorSection>

        </Styled.Wrapper>
    );
};

export default EditCalendar;