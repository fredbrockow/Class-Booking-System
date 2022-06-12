import * as Styled from "./Schedule.styles";
import Calendar from "./Calendar/Calendar";
import ClassLabels from "./ClassLabels";
import ClassCard from "./ClassCard/ClassCard";

import { useState, useEffect, useCallback } from "react";


const Schedule = () => {

    const [calendar, setCalendar] = useState();
    const [yogaClass, setYogaClass]= useState()
    const [selectedClass, setSelectedClass] = useState(null);

    const handleOnClick = (e, classInfo) => {
        e.stopPropagation();
        console.log(classInfo);
        setSelectedClass(classInfo);
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
                        <ClassCard selectedClass= {selectedClass}/>
                        :
                        "no class Selected"
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