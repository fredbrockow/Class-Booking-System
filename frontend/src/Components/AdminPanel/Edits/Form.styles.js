import styled from "styled-components";



const Wrapper = styled.div``;

const Title = styled.h1`

`;

const Form = styled.form`

    width:20vw;
    min-width: 120px;

`;

const Label = styled.label``;

const Input = styled.input``;

const SubmitButton = styled.button``;

const ErrorSection = styled.div`
    color:red;
    font-size: 1em;

    .hide {
        display:none;
    }
`;

const SuccessSection = styled.div`
    color:green;
    font-size: 1em;

    .hide {
        display:none;
    }
`;

const TextArea = styled.textarea`
    background-color: lightgray;
    border: none;
    outline: none;
    resize: none;
`;
const Select = styled.select`
    cursor: pointer;
    border-color: red;
    background-color: lightgray;
    color: red;
    min-width:40px;
    text-align: center;

    & option {
        color: blue;
        background-color: yellow;
        /* text-align: left; */
    }
`;

export {
    Wrapper,
    Form, Label, Input, Title, TextArea, Select,
    SubmitButton,
    ErrorSection, SuccessSection
}