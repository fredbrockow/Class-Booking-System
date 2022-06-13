import * as Styled from "./UserProfile.styles";

import { useContext, useEffect, useState } from "react";
import  AuthContext from "../../Context/AuthProvider"

const UserProfile = () => {

    const {auth} = useContext(AuthContext);
    console.log(auth);

    const { phoneNumber , dateOfBirth, email, firstName, lastName, username} = auth;

    return (
        <Styled.Wrapper>
            <Styled.Title>{firstName}'s Profile</Styled.Title>
            <Styled.Section>
                <Styled.Field>Username :</Styled.Field>
                <Styled.Value>{username}</Styled.Value>
            </Styled.Section>
            <Styled.Section>
                <Styled.Field>First Name :</Styled.Field>
                <Styled.Value>{firstName}</Styled.Value>
            </Styled.Section>
            <Styled.Section>
                <Styled.Field>Last Name :</Styled.Field>
                <Styled.Value>{lastName}</Styled.Value>
            </Styled.Section>
            <Styled.Section>
                <Styled.Field>Email :</Styled.Field>
                <Styled.Value>{email}</Styled.Value>
            </Styled.Section>
            <Styled.Section>
                <Styled.Field>Phone Number :</Styled.Field>
                <Styled.Value>{phoneNumber}</Styled.Value>
            </Styled.Section>
            <Styled.Section>
                <Styled.Field>Date Of Birth :</Styled.Field>
                <Styled.Value>{dateOfBirth}</Styled.Value>
            </Styled.Section>
        </Styled.Wrapper>
    );
};

export default UserProfile;