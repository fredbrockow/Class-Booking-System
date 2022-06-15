import * as Styled from "./UserClass.styles";

import { useContext, useEffect, useState } from "react";
import  AuthContext from "../../Context/AuthProvider";


import UserClassCard from "./UserClassCard/UserClassCard";
import Loading from "../Loading";
import { getTeacherById , getClassById } from "./Users.utils";

const UserClass = () => {

    const {auth, setAuth} = useContext(AuthContext);
    const [yogaClasses, setYogaClasses] = useState();
    const [teachers, setTeachers] = useState();

    const {classes , id } = auth;

    const updateUser = (data) => {

        setAuth({...auth, classes: data});
    }

    useEffect(() => {
        const getAlldata = async () => {
                
            await fetch('/class')
            .then((res) => res.json())
            .then((res) => {
                if (res.status === 200){
                    setYogaClasses(res.data);
                }
                else{
                    throw res.message
                }
            })
            .catch((err) => console.log("there was an error : ",err?.error));

            await fetch('/teacher')
            .then((res) => res.json())
            .then((res) => {
                if (res.status === 200){
                    setTeachers(res.data);
                }
                else{
                    throw res.message
                }
            }).catch((err) => console.log("there was an error : ",err?.error));

        };

            getAlldata();

    }, []);

    const handleRemoveClass = async (e, classObj) => {

        try {
            await fetch('/users/removeClass', {
                method: 'PATCH',
                headers: { 
                    'Content-Type': 'application/json' 
                        },
                credentials: 'include',

                body: JSON.stringify(
                {
                    ...classObj,
                    userId: id
                })
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 200){
                    updateUser(data.data);
                }
                else{
                    // setErrMsg(data.message.error);
                }
            })

        } catch (err) {
            // setErrMsg('Adding Class Failed');
        }
    }

    return (
        <Styled.Wrapper>
            <Styled.Title>Classes You Have Booked</Styled.Title>
            <Styled.CardsWrapper>
                {yogaClasses && teachers ?
                <>
                {classes.length < 1 ?
                    <Styled.NoClasses>
                        ...it looks like you haven't booked any classes.
                    </Styled.NoClasses>
                :
                <>
                    {classes.map((aClass,index) => {
                        const yogaClass = getClassById(aClass.classId, yogaClasses);
                        const teacher = getTeacherById(yogaClass.teacher, teachers)

                        return (
                            <UserClassCard 
                            day = {aClass.dayName}
                            timeSlot = {aClass.slot}
                            yogaClass = {yogaClass}
                            teacher = {teacher}
                            handleOnClick = {handleRemoveClass}
                            key = {`kja${index}sdj${aClass.classId}lkf${index}ejoupa${index}Idslkj${aClass.classId}lsjd`}
                            />
                        )
                    })}
                </>
                }
                </>
                :
                <Styled.LoadingWrapper>
                    <Loading message = {"Loading Booked Class..."} size = {0.2}/>                
                </Styled.LoadingWrapper>
                }
            </Styled.CardsWrapper>
        </Styled.Wrapper>
    );
};

export default UserClass;