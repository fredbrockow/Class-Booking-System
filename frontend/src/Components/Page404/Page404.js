import * as Styled from "./Page404.styles";
import yogaPose404 from "../../assets/404YogaPose.png";

const Page404 = () => {
    return (
        <Styled.Wrapper>
            <Styled.TheFour>404</Styled.TheFour>
            <Styled.TheSubFour> Exhale, Nothing Here...</Styled.TheSubFour>
            <Styled.Img alt="" src={yogaPose404}/>
        </Styled.Wrapper>
    );
};

export default Page404;