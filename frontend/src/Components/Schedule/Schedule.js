import * as Styled from "./Schedule.styles";
import Calendar from "./Calendar/Calendar";
import ClassLabels from "./ClassLabels";
import ClassCard from "./ClassCard/ClassCard";

import { useState, useEffect, useCallback } from "react";


const Schedule = () => {

    const [calendar, setCalendar] = useState();
    const [selectedClass, setSelectedClass] = useState(null);

    const handleOnClick = (e, classInfo) => {
        e.stopPropagation();
        setSelectedClass(classInfo);
    }

    const handleDeselectOnClick = useCallback((e) => {
        setSelectedClass(null);
    },[]);

    useEffect(() => {
        const url = "/calendar";

        const getCalendar = async (url) => {

            try {
                await fetch (url)
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
        }
        
        getCalendar(url);

        window.addEventListener("click", handleDeselectOnClick);

        return ()=> {
            window.removeEventListener("click", handleDeselectOnClick);
        }

    }, []);



    return (
        <Styled.Wrapper>
            <Styled.Title>This Week Schedule</Styled.Title>
            {
                calendar ?
                <Styled.SubWrapper>
                    <Calendar
                        yogaClasses = {calendar.yoga_classes}
                        week = {calendar.calendar}
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