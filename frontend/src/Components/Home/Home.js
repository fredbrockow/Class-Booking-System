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
                    <Styled.Title>My Yoga Studio</Styled.Title>
                    <Styled.Subtitle>Something about that place that is Super Great</Styled.Subtitle>
                </Styled.MainSubWrapper>
            </Styled.MainWrapper>
            <Styled.ParagraphWrapper>
                <Styled.ParagraphTitle>Our Classes</Styled.ParagraphTitle>
                <Styled.ParagraphSubTitle>Something About The Philosophy, etc..</Styled.ParagraphSubTitle>
                <Styled.ParagraphSubWrapper>
                    <Styled.Content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                    </Styled.Content>
                    <Styled.Button onClick={() => navigate('/schedule')}>Go To Schedule <BsArrowRightShort/></Styled.Button>
                </Styled.ParagraphSubWrapper>
            </Styled.ParagraphWrapper>


        </Styled.Wrapper>
    )
};

export default Home;