import * as Styled from "./ClassCard.styles";

import { useContext, useEffect, useState } from "react";
import  AuthContext from "../../../Context/AuthProvider"

import { hours_to_slot, MAX_STUDENT_PER_CLASS, isObjectEmpty } from "../../../utils"

const ClassCard = ({ selectedClass, handleOnClick }) => {

    const {auth} = useContext(AuthContext);

    const yogaClass = selectedClass.classSelected;
    const [teacher, setTeacher] = useState(null);

    const isAlreadyBooked = (yogaClass) => {
        let isBooked = false;

        const slot = hours_to_slot[yogaClass.hours];
        const arrClasses = auth.classes;

        if (arrClasses.length > 0 ) {
            arrClasses.forEach ((klass) => {
                if (klass.dayName !== yogaClass.dayName) return;
                if (klass.slot !== slot) return;
                if (klass.classId !== yogaClass.id) return;

                isBooked =true;
            })
        }
         return isBooked;
    }

    console.log(selectedClass);
    
    useEffect(() => {

        const teacherUrl = `/teacher/${yogaClass.teacher}`;

        const getTeacher = async (url) => {

            try {
                await fetch (url)
                .then(res => res.json())
                .then((res) => {
                    if(res.status === 200){
                        setTeacher(res.data);
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
        getTeacher(teacherUrl);
    
    }, []);

    return (
        <Styled.Wrapper>
            {teacher ?
            <>
                <Styled.CardHeader>
                    <Styled.ClassTitle>{yogaClass.title}</Styled.ClassTitle>
                    <Styled.CardHeaderSubWrapper>
                        <Styled.TeachedBy>Taught by {teacher.firstName} {teacher.lastName}</Styled.TeachedBy>
                        <Styled.TimeSlot>{selectedClass.day} - {selectedClass.hours}</Styled.TimeSlot>
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

                        {selectedClass.attending >= MAX_STUDENT_PER_CLASS ? 
                        <>
                        Class Full
                        </>
                        :
                        <>
                        {!isObjectEmpty(auth) && isAlreadyBooked( 
                            { 
                                dayName : selectedClass.day,
                                hours: selectedClass.hours,
                                id : yogaClass.id
                            }
                        ) ?
                        "Already Booked"
                        :
                        <Styled.EnrollButton 
                            onClick ={(e) => handleOnClick(e, {
                                dayName : selectedClass.day,
                                hours: selectedClass.hours,
                                id : yogaClass.id
                            }
                        )}
                        >
                            ENROLL
                        </Styled.EnrollButton>
                        }
                        
                        </>
                        }
                    </Styled.CardContentSubWrapper>
                </Styled.CardContentWrapper>
            </>
            :
            <>
                Loading ...
                </>    
            }
        </Styled.Wrapper>
    );
};

export default ClassCard;