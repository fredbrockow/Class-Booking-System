import * as Styled from "./Schedule.styles";
import Calendar from "./Calendar/Calendar";
import ClassLabels from "./ClassLabels";
import ClassCard from "./ClassCard/ClassCard";

import { useNavigate} from "react-router-dom";
import { useContext, useState, useEffect, useCallback } from "react";
import  AuthContext from "../../Context/AuthProvider"

import { isObjectEmpty, hours_to_slot } from "../../utils";


const Schedule = () => {
    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext);

    const [calendar, setCalendar] = useState();
    const [yogaClass, setYogaClass]= useState()
    const [selectedClass, setSelectedClass] = useState(null);


    const sortCalendar = (calendar) => {
        const sortingArr = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const sortedCalendar = [];

        sortingArr.forEach (day => {
            sortedCalendar.push(
                calendar.find(element => element.dayName === day)
            ) 
        })
        return sortedCalendar;
    }

    const updateCalendar = (data, dayName) => {

        const newCalendar = calendar.filter(day => day.dayName !== dayName);
        newCalendar.push(data);
        const sortedCalendar = sortCalendar(newCalendar);
        setCalendar([...sortedCalendar]);
    };

    const updateUser = (data) => {
        const newClassArr = auth.classes;
        newClassArr.push(data);
        setAuth({...auth, classes: newClassArr});
    }

    const handleOnClick = (e, classInfo) => {
        e.stopPropagation();
        setSelectedClass(classInfo);
    }

    const handleOnClickEnroll = async (e , classSelected) => {
        e.stopPropagation();

        if (isObjectEmpty(auth)){
            navigate("/login");
        }
        else{

            try {
                await fetch('/users/addClass', {
                    method: 'PATCH',
                    headers: { 
                        'Content-Type': 'application/json' 
                            },
                    credentials: 'include',
    
                    body: JSON.stringify(
                    {
                        userId: auth.id,
                        classId : classSelected.id,
                        dayName: classSelected.dayName,
                        slotKey: hours_to_slot[classSelected.hours]
                    })
                })
                .then((res) => res.json())
                .then((data) => {
                    if(data.status === 200){
                        console.log("data.data ", data.data);
                        updateCalendar(data.data.calendar, classSelected.dayName);
                        updateUser (data.data.user);

                    }
                    else{
                        // setErrMsg(data.message.error);
                    }
                })
    
            } catch (err) {
                // setErrMsg('Adding Class Failed');
            }
        }
    }

    const handleDeselectOnClick = useCallback((e) => {
        setSelectedClass(null);
    },[]);

    useEffect(() => {
        const calendarUrl = "/calendar";
        const classesUrl = "/class";

        const getCalendar = async (calendarUrl, classesUrl) => {

            try {
                await fetch (calendarUrl)
                .then(res => res.json())
                .then((res) => {
                    if(res.status === 200){

                        setCalendar(res.data);
                    }
                    else{
                        throw res.message;
                    }
                });
            }
            catch (err) {
                console.log("there was an error ",err);
            }

            try {
                await fetch (classesUrl)
                .then(res => res.json())
                .then((res) => {
                    if(res.status === 200){
                        setYogaClass(res.data);
                    }
                    else{
                        throw res.message;
                    }
                });
            }
            catch (err) {
                console.log("there was an error ",err);
            }
        }
        
        getCalendar(calendarUrl,classesUrl);

        window.addEventListener("click", handleDeselectOnClick);

        return ()=> {
            window.removeEventListener("click", handleDeselectOnClick);
        }

    }, []);


    return (
        <Styled.Wrapper>
            <Styled.Title>This Week Schedule</Styled.Title>
            {
                calendar && yogaClass ?
                <Styled.SubWrapper>
                    <Calendar
                        yogaClasses = {yogaClass}
                        week = {calendar}
                        handleOnClick = {handleOnClick}
                    />
                    <Styled.RightSideWrapper>
                        <ClassLabels />
                        {selectedClass !== null ?
                        <ClassCard selectedClass= {selectedClass} handleOnClick = {handleOnClickEnroll}/>
                        :
                        <Styled.NoClassSelected><span>Click on the calendar to book a class and learn more about it</span></Styled.NoClassSelected>
                        }
                    </Styled.RightSideWrapper>
                </Styled.SubWrapper>
                :
                <>
                Loading...
                </>
            }
        </Styled.Wrapper>
    );
};

export default Schedule;