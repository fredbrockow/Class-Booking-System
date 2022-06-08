import * as Styled from "./ClassCard.styles";

import { useEffect, useState } from "react";

const ClassCard = ({ selectedClass }) => {

    const yogaClass = selectedClass.classSelected;
    const [teacher, setTeacher] = useState(null);

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
                        <Styled.EnrollButton>ENROLL</Styled.EnrollButton>
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