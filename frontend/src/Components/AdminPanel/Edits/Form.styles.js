import styled from "styled-components";

const Wrapper = styled.div`
    color: var(--MainBlack);
`;

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 10px;

    font-family: var(--font-text);
    font-size: 0.8em;
`;

const Title = styled.h1`
    margin-bottom: 24px;
    font-family: var(--font-anomaly);
`;

const Form = styled.form`
    width:fit-content;
    min-width: 120px;
    padding: 30px 45px;
    border-left: solid 1px var(--MainBlack);
    border-bottom: solid 1px var(--MainBlack);

`;

const Label = styled.label`
    margin-right: 5px;
`;

const Input = styled.input`
    background-color: var(--semi-tranparent-grey-InputField);
    border: solid 1px rgba(210,205,200,1);
    border-radius: 5px;
    height: 20px;
    padding-left: 5px;
    color: var(--MainBlack);

`;

const TextArea = styled.textarea`
    background-color: var(--semi-tranparent-grey-InputField);
    border-radius: 5px;
    height: 40px;
    padding-left: 5px;
    color: var(--MainBlack);
    border: none;
    outline: none;
    resize: none;
`;

const SubmitButton = styled.button`
    font-family:var(--font-anomaly);
    margin-top: 20px;
    width: 100%;
    background-color: transparent;
    font-size: 1.3em;
    color: var(--MainBlack);
    border: solid 1px var(--MainBlack);

    cursor: pointer;
    transition: all 200ms ease-in;

    &:hover{
        cursor: pointer;
        color:black;
        border-color: var(--MainBlack);
        background-color: rgba(210,205,200,1);
        opacity: 0.7;
    }

    &:active{
        transform: translateY(3px) ;
    }
`;

const ErrorSection = styled.div`

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

const Select = styled.select`
    cursor: pointer;
    background-color: var(--semi-tranparent-grey-InputField);
    color: var(--MainBlack);
    min-width:40px;
    padding: 5px 0px;
    text-align: right;

    & option {
        color: var(--MainBlack);
        background-color: var(--semi-tranparent-grey-InputField);;
        /* text-align: left; */
    }
`;

export {
    Wrapper, Section,
    Form, Label, Input, Title, TextArea, Select,
    SubmitButton,
    ErrorSection, SuccessSection
}