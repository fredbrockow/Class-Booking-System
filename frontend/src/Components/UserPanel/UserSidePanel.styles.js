import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--user-sidePanel);
    width: 230px;
`;

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 35px;

    & a {
        color:var(--MainWhite);
        font-family: var(--font-text);
        font-size: 0.8em;
        text-decoration: none;
        margin-bottom: 20px;

        align-self: flex-end;
    }
`;

const Title = styled.div`
    color:var(--MainWhite);
    font-family: var(--font-secondary-header);
    font-weight: bold;

    margin-bottom: 30px;
`;

const Button = styled.button``;

export {
    Wrapper, LinkWrapper, 
    Title, Button
}