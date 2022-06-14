import styled from "styled-components";

const Wrapper = styled.div`
    padding-top: 7px;
    padding-left: 60px;

`;

const CardsWrapper = styled.div`
  width: 680px;
  height: 380px;
  overflow-y: auto;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;

  padding: 0px 10px 20px 0px;

`;


const Title = styled.div`
    font-family: var(--font-secondary-header);
    color: var(--MainBlack);
    margin-bottom: 14px;
`;

export {
    Wrapper, CardsWrapper, Title
}