import * as Styled from './MainPanel.styles';

import { 
    Routes,
    Route, 
  } from "react-router-dom";

import UsersPerWeek from './BarCharts/UsersPerWeek';
import UsersPerClass from './BarCharts/UsersPerClass';

const MainPanel = () => {
    return (
        <Styled.Wrapper>
                <Routes>
                    <Route path= "/usersPerWeek" element = {<UsersPerWeek/>}/>
                    <Route path= "/usersPerClass" element = {<UsersPerClass/>}/>
                </Routes>
        </Styled.Wrapper>
    );
};

export default MainPanel;