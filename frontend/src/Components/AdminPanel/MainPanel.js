import * as Styled from './MainPanel.styles';

import { 
    Routes,
    Route, 
  } from "react-router-dom";

  import { useEffect, useState } from 'react';

import EditTeachers from './Edits/EditTeachers';
import EditClasses from './Edits/EditClasses';
import EditCalendar from './Edits/EditCalendar';

import UsersPerWeek from './BarCharts/UsersPerWeek';
import UsersPerClass from './BarCharts/UsersPerClass';

import Loading from "../Loading";

const MainPanel = () => {

    const [teachers, setTeachers] = useState(null);
    const [calendar, setCalendar] = useState(null)
    const [yogaClasses, setYogaClasses] = useState(null);
    const [users, setUsers] = useState(null);

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

            await fetch('/calendar')
            .then((res) => res.json())
            .then((res) => {
                if (res.status === 200){
                    setCalendar(res.data);
                }
                else{
                    throw res.message
                }
            }).catch((err) => console.log("there was an error : ",err?.error));
            
            await fetch('/admin/users')
            .then((res) => res.json())
            .then((res) => {
                if (res.status === 200){
                    setUsers(res.data);
                }
                else{
                    throw res.message
                }
            }).catch((err) => console.log("there was an error : ",err?.error));
        };

        getAlldata();

    },[])

    return (
        <Styled.Wrapper>
                {teachers && yogaClasses && calendar ?
                <>
                {/* <div>All set up! Please select an Admin Action</div> */}
                    <Routes>
                        <Route path= "/editTeachers" element = {<EditTeachers teachers = {teachers} setTeachers = {setTeachers}/>}/>
                        <Route path= "/editClasses" element = {<EditClasses teachers = {teachers} classes = {yogaClasses} setClasses = {setYogaClasses}/>}/>
                        <Route path= "/editCalendar" element = {<EditCalendar teachers = {teachers} classes = {yogaClasses} calendar = {calendar} setCalendar = {setCalendar}/>}/>
                        <Route path= "/usersPerWeek" element = {<UsersPerWeek calendar = {calendar}/>}/>
                        <Route path= "/usersPerClass" element = {<UsersPerClass calendar = {calendar} yogaClasses = {yogaClasses}/>}/>
                    </Routes>
                </>
                :
                <Styled.LoadingWrapper>
                    <Loading message = {"Please wait while the Admin Panel is being prepared ..."} size = {0.2}/>                
                </Styled.LoadingWrapper>
                }
        </Styled.Wrapper>
    );
};

export default MainPanel;