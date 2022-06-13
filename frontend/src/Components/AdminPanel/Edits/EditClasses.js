
import * as Styled from "./Form.styles";

import { useRef, useState, useEffect } from 'react';

import { formatingTeachers } from "../Admin.utils";
import CustomSelector from "./CustomSelector";


const EditClasses = ({teachers, classes, setClasses}) => {

    const userRef = useRef();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const [teacher, setTeacher] = useState();

    const [successMsg, setSuccessMsg] = useState('')
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();

        window.addEventListener("click", handleOnClick);
        return ()=> {
            window.removeEventListener("click", handleOnClick);
        }
    }, []);

    useEffect(() => {
        setErrMsg("");

    }, [title, description, tag, teacher]);

    const handleSelectChange = (e) => {
        setTeacher(e.target.value);
    }
    
    const handleOnClick = () => {
        setSuccessMsg("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('/admin/class', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                        },
                credentials: 'include',

                body: JSON.stringify(
                {
                    title,
                    description,
                    tag,
                    teacher,
                    capacity : 25,
                    isActive: false
                })
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 200){

                    setTitle('');
                    setDescription('')
                    setTag('')
                    setTeacher('')

                    setClasses([...classes, data.data])
                    setSuccessMsg(data.message.success);
                }
                else{
                    setErrMsg(data.message.error);
                }
            })

        } catch (err) {
            setErrMsg('Adding Class Failed');
        }
    }

    const formatedTeacherData = formatingTeachers (teachers);

    return (
        <Styled.Wrapper>
            <Styled.Title>Add a New Class</Styled.Title>
                    <Styled.Form onSubmit={handleSubmit}>
                        <Styled.Label htmlFor="title">first name:</Styled.Label>
                        <Styled.Input
                            type="text"
                            id="title"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                        <Styled.Label htmlFor="description">description</Styled.Label>
                        <Styled.TextArea
                            id="description"
                            autoComplete="off"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            required
                        />
                        <Styled.Label htmlFor ="tag"> Choose a tag for this class</Styled.Label>
                        <Styled.Select 
                            id="tag" 
                            onChange={(e) => setTag(e.target.value)} 
                            value= {tag}
                            required>
                            <option value ="" >Choose a Tag</option>
                            <option value = 'beginner' >beginner</option>
                            <option value = 'intermediate' >intermediate</option>
                            <option value = 'advanced' >advanced</option>
                        </Styled.Select>
                        <Styled.Label htmlFor ="teacher"> Assign a teacher for this class</Styled.Label>
                        <CustomSelector 
                            label = "Assign a Teacher"
                            selectedValue = {teacher}
                            data = {formatedTeacherData}
                            handleSelectChange = {handleSelectChange}
                            id = "teacher"
                        />


                        <Styled.SubmitButton type="submit">Add New Class</Styled.SubmitButton>
                    </Styled.Form>

                    <Styled.SuccessSection className={successMsg ? "success_msg" : "hide"}>{successMsg}</Styled.SuccessSection>
                    <Styled.ErrorSection className={errMsg ? "error_msg" : "hide"}>{errMsg}</Styled.ErrorSection>
        </Styled.Wrapper>
    );
};

export default EditClasses;
