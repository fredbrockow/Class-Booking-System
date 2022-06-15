
import * as Styled from "./AboutUs.styles";
import concordiaLogo from "../../assets/ConcordiaLogo.png";
import adobeXD from "../../assets/adobeXD.png";
import cplusplus from "../../assets/cplusplus.png";
import express from "../../assets/express.png";
import javascript from "../../assets/javascript.png";
import MongoDb from "../../assets/MongoDb.png";
import NodeJS from "../../assets/NodeJS.png";
import Me from "../../assets/Outlined4FA_NOFILL.png";
import react_icon from "../../assets/React-icon.png"


const AboutUs = () => {
    return (
        <Styled.Wrapper>
            <Styled.HeaderWrapper>
                <Styled.ImgConcordiaLogo alt = "" src = {concordiaLogo} />
                <Styled.HeaderSubWrapper>
                    <Styled.Title>Final Project for Concordia Continuing Education</Styled.Title>
                    <Styled.SubTitle>Web Development Bootcamp - Cohort CB-WD-14-A - Spring 2022</Styled.SubTitle>
                </Styled.HeaderSubWrapper>
            </Styled.HeaderWrapper>
            <Styled.AboutMeWrapper>
                <Styled.AboutMeSubWrapper>
                    <Styled.Name>Fred Brockow</Styled.Name>
                    <Styled.MyBigPicture alt="" src={Me}/>
                </Styled.AboutMeSubWrapper>
                    <Styled.SkillsLogo>
                        <Styled.SkillsLogoImg alt="" src={react_icon}/>
                        <Styled.SkillsLogoImg alt="" src={javascript}/>
                        <Styled.SkillsLogoImg alt="" src={NodeJS}/>
                        <Styled.SkillsLogoImg alt="" src={cplusplus}/>
                        <Styled.SkillsLogoImg alt="" src={adobeXD}/>
                        <Styled.SkillsLogoImg id="express" alt="" src={express}/>
                        <Styled.SkillsLogoImg id = "mongo" alt="" src={MongoDb}/>
                    </Styled.SkillsLogo>
            </Styled.AboutMeWrapper>
            <Styled.CreditsWrapper>
                <Styled.Credits>Special thanks to the cohort's teachers:</Styled.Credits>
                <Styled.Teacher> - Andrew Diles</Styled.Teacher>
                <Styled.Teacher> - Nick Hayashi</Styled.Teacher>
                <Styled.Teacher> - Francis Poliquin</Styled.Teacher>
                <Styled.Teacher> - Rony Kordashi</Styled.Teacher>
            </Styled.CreditsWrapper>
        </Styled.Wrapper>
    );
};

export default AboutUs;