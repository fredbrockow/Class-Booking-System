import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 600px;
    height: calc(100% - 41px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin: 0 auto;
    background-color: var(--semi-tranparent-grey);
    color: var(--MainBlack);
`;

const SubWrapper = styled.div`
    border: solid 1px var(--MainBlack);
    border-radius: 12px;
    padding: 70px 50px;
    margin: 17vh 30px 0 30px;

`;

const Title = styled.h1`
    font-family: var(--font-text);
    font-size: 2.5em;
    margin-bottom: 30px;
`;

const Loginform = styled.form`
    width:20vw;
    min-width: 120px;
`;

const Field = styled.div`
    display: flex;
    min-width: 70px;
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: baseline;
`;

const Label = styled.label`
    font-family: var(--font-text);
`;

const Input = styled.input`
    background-color: var(--semi-tranparent-grey-InputField);
    border: solid 1px rgba(210,205,200,1);
    border-radius: 5px;
    height: 20px;
    padding-left: 5px;
    color: var(--MainBlack);

`;

const SubmitButton = styled.button`
    font-family:var(--font-anomaly);
    width:20vw;
    min-width: 120px;
    margin-top: 10px;

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
    color:var(--error-message);
    font-size: 1em;

    margin-top: 10px;

    .hide {
        display:none;
    }
`;


export {
    Wrapper, SubWrapper,
    Title, Loginform, Field,
    Label, Input, SubmitButton,
    ErrorSection
}