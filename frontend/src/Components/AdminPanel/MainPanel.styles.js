import styled from "styled-components";

const Wrapper = styled.div`
    background-color:var(--admin-background-mainPanel);
    flex-grow: 1;
    padding-top: 24px;
    padding-left: 20vw;
`;

const LoadingWrapper = styled.div`
    color: var(--MainBlack);
    margin-left: -240px;
`;

export {
    Wrapper, LoadingWrapper
}