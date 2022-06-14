import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    border-bottom: solid 1px var(--MainBlack);
    height: 40px;
`;

const Button = styled.button`
    cursor: pointer;
    color: var(--MainBlack);
    background-color: transparent;
    border-color: transparent;
    font-family: var(--font-text);
    margin-left: 15px;

    &:hover {
        border-bottom: solid 2px var(--MainBlack);
    }
`;

const AdminButton = styled(Button)`
    font-family: var(--font-anomaly);
    font-weight: bold;
    font-size: 0.7em;
`;

const AccountButton = styled(Button)`
    font-family: var(--font-anomaly);
    font-weight: bold;
    font-size: 0.7em;

    & svg {
        margin-bottom: -1px;
    }
`;

const LoginButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    
    color: var(--MainBlack);
    border : solid 1px var(--MainBlack);
    border-radius: 0.2em;

    height: 25px;
    align-self: center;
    padding: 0 1.5em;
    margin-left: 15px;

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

const LeftGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    min-width: 200px;
    margin-left: 80px;

`;

const MiddleGroup = styled.div`
    flex-grow: 2;
    
    display: flex;
    justify-content: flex-end;
`;

const RightGroup = styled.div`
    display: flex;
    justify-content: flex-end;

    min-width: 300px;
    margin-right: 80px;
`;





export {
    Wrapper,
    Button, AdminButton, AccountButton, LoginButton,
    LeftGroup, MiddleGroup, RightGroup
}