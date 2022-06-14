import styled from "styled-components";


const Wrapper = styled.div`
    padding-left: 120px;
    height: calc(100% - 107px);

    color: var(--MainBlack);
`;

const Title = styled.div`
    font-family: var(--font-secondary-header);
    font-size: 1.2em;
    margin-bottom: 24px;
`;

const Section = styled.div`
    display: flex;
    font-family: var(--font-text);
    font-size: 0.9em;
    margin-bottom: 8px;

    &.civil, &.email {
        margin-top : 16px;
    }
`;

const Field = styled.div``;

const Value = styled.div`
    margin-left: 10px;
`;

export {
    Wrapper, 
    Title, Section, Field, Value
}