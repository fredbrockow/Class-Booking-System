import styled from "styled-components";

const Wrapper = styled.div``;

const Button = styled.button``;

const ButtonTest = styled(Button)`
    background-color: var( --testColor);
`;

export {
    Wrapper,
    Button, ButtonTest
}