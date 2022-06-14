import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 230px;
    
    background-color: var(--user-sidePanel);
    color: var(--MainWhite);
`;

const SubWrapper = styled.div`
    width: 100%;
    padding-top: 20px;
    padding-left: 70px;
    padding-right: 30px;
`;

const Title = styled.div`
    font-family: var(--font-secondary-header);
    font-weight: bold;
    margin-bottom: 40px;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    
`;

const SectionTitle = styled.div`
    margin-bottom: 10px;
    font-family: var(--font-anomaly);
`;

const Button = styled.button`
    text-align: end;
    background-color: transparent;
    border-color: transparent;
    border-bottom: solid 1px var(--MainWhite);
    margin-bottom: 4px;
    
    color: var(--MainWhite);

    font-family: var(--font-text);
    font-size: 0.7em;

    &:hover {
        cursor: pointer;
        color: var(--accent);
        border-bottom-color: var(--accent);

    }
`;


export {
    Wrapper, SubWrapper, Section, 
    Button, Title, SectionTitle
}