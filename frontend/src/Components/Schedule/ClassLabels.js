import * as Styled from "./ClassLabels.styles";

const ClassLabels = () => {
    return (
        <Styled.Wrapper>
            <Styled.Title>About the difficulty levels:</Styled.Title>
            <Styled.SubWrapper>
                <Styled.Section>
                    <Styled.Field>beginner:</Styled.Field>
                    <Styled.Value>and here is something about the beginner level</Styled.Value>
                </Styled.Section>
                <Styled.Section>
                    <Styled.Field>intermediate:</Styled.Field>
                    <Styled.Value>and now we are talking about that level of difficulty</Styled.Value>
                </Styled.Section>
                <Styled.Section>
                    <Styled.Field>advanced:</Styled.Field>
                    <Styled.Value>so advanced level, this is some more text so we can fill this line, maybe I should write about the weather</Styled.Value>
                </Styled.Section>
            </Styled.SubWrapper>

            
        </Styled.Wrapper>
    );
};

export default ClassLabels;