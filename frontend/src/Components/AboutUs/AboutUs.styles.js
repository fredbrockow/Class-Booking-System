import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;;
`;

const HeaderWrapper = styled.div`
    display: flex;
`;

const HeaderSubWrapper = styled.div`
    color: var(--MainBlack);
`;

const Title = styled.div`
    font-family: var(--font-main-header);
    font-size: 1.2em;
    margin-bottom: 14px;
`;

const SubTitle = styled.div`
    font-family: var(--font-secondary-header);
    font-size: 0.8em;
    margin-bottom: 20px;
`;

const ImgConcordiaLogo = styled.img `
    height: 45px;
    margin-right: 40px;
`;

const AboutMeWrapper = styled.div`
    /* align-self: flex-end; */
    width: 30%;
    margin-left: 160px;
    margin-top: 10px;
`;

const AboutMeSubWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    color: var(--MainBlack);
`;

const Name = styled.div`
    margin-top: 50px;
    font-family: var(--font-text);
    font-size: 2.4em;

`;

const SkillsLogo = styled.div`

`;

const SkillsLogoImg = styled.img`
     width:30px;
     margin-right: 14px;

     &#express {
        height: 20px;
     }

     &#mongo{
        height : 20px;
        width: 40px;
     }
`;

const MyBigPicture = styled.img`
    height: 120px;
`;

const CreditsWrapper = styled.div`

    color: var(--MainBlack);
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 640px;
    margin-top: 100px;
`;

const Credits = styled.div`
    font-family: var(--font-anomaly);
    font-weight: bold;
    margin-bottom: 12px;
`;

const Teacher = styled.div`
    margin-left: 30px;
    margin-bottom: 6px;
    font-size: 0.9em;
`;

export {
    Wrapper, HeaderWrapper, HeaderSubWrapper,
    AboutMeWrapper, AboutMeSubWrapper,
    ImgConcordiaLogo, Title, SubTitle,
    Name, SkillsLogo, SkillsLogoImg, MyBigPicture,
    CreditsWrapper, Credits, Teacher
}