import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

const TheFour = styled.div`
    font-family: var(--font-main-header);
    font-weight:normal;
    font-size: 5em;
    color: var(--MainBlack);
`;

const TheSubFour = styled.div`
    font-family: var(--font-secondary-header);
    font-weight:normal;
    font-size: 2em;
    color: var(--MainBlack);
    letter-spacing: 5px;
    margin-top: 24px;;

`;

const Img = styled.img`
    margin-top: 30px;
    height: 300px;
`;

export {
    Wrapper, TheFour, TheSubFour, Img
}