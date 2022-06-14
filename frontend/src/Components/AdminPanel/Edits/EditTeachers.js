
import * as Styled from "./Form.styles";

import { useRef, useState, useEffect } from 'react';


const EditTeachers = ({teachers, setTeachers}) => {

    const userRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const [successMsg, setSuccessMsg] = useState('')
    const [errMsg, setErrMsg] = useState('');

    const handleOnClick = () => {
        setSuccessMsg("");
    }


    useEffect(() => {
        userRef.current.focus();

        window.addEventListener("click", handleOnClick);
        return ()=> {
            window.removeEventListener("click", handleOnClick);
        }
    }, []);

    useEffect(() => {
        setErrMsg("");

    }, [firstName, lastName, username, email, phoneNumber]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('/admin/teacher', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                        },
                credentials: 'include',

                body: JSON.stringify(
                {
                    firstName, 
                    lastName,
                    username,
                    email,
                    phoneNumber
                })
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 200){
                    setFirstName('');
                    setLastName('');
                    setUsername('');
                    setEmail('')
                    setPhoneNumber('');
                    setSuccessMsg(data.message.success);
                    setTeachers([...teachers, data.data ]);
                }
                else{
                    setErrMsg(data.message.error);
                }
            })

        } catch (err) {
            setErrMsg('Adding Teacher Failed');
        }
    }

    return (
        <Styled.Wrapper>
            <Styled.Title>Add a New Teacher</Styled.Title>
                    <Styled.Form onSubmit={handleSubmit}>
                        <Styled.Section>
                            <Styled.Label htmlFor="firstName">First Name:</Styled.Label>
                            <Styled.Input
                                type="text"
                                id="firstName"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                                required
                            />
                        </Styled.Section>
                        <Styled.Section>
                            <Styled.Label htmlFor="lastName">Last Name:</Styled.Label>
                            <Styled.Input
                                type="text"
                                id="lastName"
                                autoComplete="off"
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
                                required
                            />
                        </Styled.Section>
                        <Styled.Section>
                            <Styled.Label htmlFor="username">User Name:</Styled.Label>
                            <Styled.Input
                                type="text"
                                id="username"
                                autoComplete="off"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                            />
                        </Styled.Section>
                        <Styled.Section>
                            <Styled.Label htmlFor="email">Email:</Styled.Label>
                            <Styled.Input
                                type="email"
                                id="email"
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                        </Styled.Section>
                        <Styled.Section>
                            <Styled.Label htmlFor="phoneNumber">Phone Number:</Styled.Label>
                            <Styled.Input
                                type="phone"
                                id="phoneNumber"
                                autoComplete="off"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                value={phoneNumber}
                                required
                            />
                        </Styled.Section>
                        <Styled.Section>
                            <Styled.SubmitButton type="submit">Add New Teacher</Styled.SubmitButton>
                        </Styled.Section>

                    </Styled.Form>

                    <Styled.SuccessSection className={successMsg ? "success_msg" : "hide"}>{successMsg}</Styled.SuccessSection>
                    <Styled.ErrorSection className={errMsg ? "error_msg" : "hide"}>{errMsg}</Styled.ErrorSection>
        </Styled.Wrapper>
    );
};

export default EditTeachers;