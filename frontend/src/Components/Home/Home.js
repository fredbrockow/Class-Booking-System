import * as Styled from "./Home.styles";
import MainPageYogaPose from '../../assets/MainYogaPose.png';
import { BsArrowRightShort } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <Styled.Wrapper>
            <Styled.MainWrapper>
                <Styled.HeaderImg alt='' src={MainPageYogaPose}/>
                <Styled.MainSubWrapper>
                    <Styled.Title>Ananda Yoga</Styled.Title>
                    <Styled.Subtitle>Find your bliss, one breath at a time</Styled.Subtitle>
                </Styled.MainSubWrapper>
            </Styled.MainWrapper>
            <Styled.ParagraphWrapper>
                <Styled.ParagraphTitle>Our Classes</Styled.ParagraphTitle>
                <Styled.ParagraphSubTitle>Yoga for Every Body</Styled.ParagraphSubTitle>
                <Styled.ParagraphSubWrapper>
                    <Styled.Content>
                    At Ananda Yoga, our priority is yoga that makes every body feel good, taught by experienced teachers who 
                    care about your practice. No supermodels. No sermons. No toxin shaming and no flim flam shimmy sham. 
                    Just solid teaching, intelligent sequencing and endorphins aplenty.
                    </Styled.Content>
                    <Styled.Button onClick={() => navigate('/schedule')}>Go To Schedule <BsArrowRightShort/></Styled.Button>
                </Styled.ParagraphSubWrapper>
            </Styled.ParagraphWrapper>
        </Styled.Wrapper>
    )
};

export default Home;