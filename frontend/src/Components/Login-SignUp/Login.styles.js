import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    max-width: 420px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin: 0 auto;


    background-color: aliceblue;
    margin-top: 60px;
`;

const Title = styled.h1`

`;

const Loginform = styled.form`

    width:20vw;
    min-width: 120px;

`;

const Label = styled.label``;

const Input = styled.input``;

const SubmitButton = styled.button``;


export {
    Wrapper, Title, Loginform,
    Label, Input, SubmitButton
}