import styled from "styled-components";
import { ImSpinner3 } from "react-icons/im";
import { keyframes } from "styled-components";

const Loading = ({message, size}) => {
    return (
        <Wrapper>
            <ImSpinner3/>
            <Message size={size}>{message}</Message>
        </Wrapper>
    );
};

const spin = keyframes`
    0%{
        transform: rotate(0deg);
        opacity:0.4;
    }
    50%{
        opacity:0.2;
    }

    100% {
        transform : rotate(360deg);
        opacity:0.4;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    font-size: 7em;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    
    & svg{
        color: var(--fontColorMidGrey);
        
        font-size: 0.3em;
        animation: ${spin} 1s linear infinite;

    }
`;

const Message = styled.div`
    margin-top: 0.3em;
    font-size: ${props=>props.size}em;
`;

export default Loading;