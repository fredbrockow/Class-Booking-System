import styled from "styled-components";

const Wrapper = styled.div`
    font-family: var(--font-text);
    font-size: 0.8em;
    
    color: var(--MainBlack);
    background-color: var(--semi-tranparent-grey);
    padding: 8px 20px;
    margin-right: 80px;
`;

const SubWrapper = styled.div``;

const Title = styled.div`
    font-family: var(--font-anomaly);
    font-size: 1.6em;
    margin-bottom: 10px;
`;

const Section = styled.div`
    margin-bottom: 6px;
`;

const Field = styled.div`
    font-weight: bold;
    margin-bottom: 2px;
`;

const Value = styled.div``;

export {
    Wrapper, SubWrapper, Section,
    Title, Field, Value
}