import * as Styled from "./ClassLabels.styles";

const ClassLabels = () => {
    return (
        <Styled.Wrapper>
            <Styled.Title>Yoga Class Levels</Styled.Title>
            <Styled.SubWrapper>
                <Styled.Section>
                    <Styled.Field>Beginner:</Styled.Field>
                    <Styled.Value>This is where it all starts. Learn basic alignment, breath and relaxation.</Styled.Value>
                </Styled.Section>
                <Styled.Section>
                    <Styled.Field>Intermediate:</Styled.Field>
                    <Styled.Value>You can't get enough yoga! You can hold a Triangle pose for days.</Styled.Value>
                </Styled.Section>
                <Styled.Section>
                    <Styled.Field>Advanced:</Styled.Field>
                    <Styled.Value>You know the Sanskrit names of the poses. Your friends all say you're a nicer person since you started yoga.</Styled.Value>
                </Styled.Section>
            </Styled.SubWrapper>
        </Styled.Wrapper>
    );
};

export default ClassLabels;