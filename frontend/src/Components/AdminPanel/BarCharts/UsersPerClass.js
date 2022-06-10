import styled from "styled-components";


import BarCharts from './BarCharts';
import { useState } from 'react';

import { createUsersPerClass, usersPerClassColor } from "../DataSet/buildingDatas";

const UsersPerClass = () => {

    const classesData = createUsersPerClass();

    const [userData, setUserData] = useState({
        labels: classesData.keys.map((data) => data),
        datasets: [
          {
            label:"Users Per Class",
            data: classesData.data.map((data) => data.numOfStudent),
            backgroundColor: [ usersPerClassColor.total],
          },
          {
            label:"Users Per Class Normalized",
            data: classesData.data.map((data) => {
                if (data.numOfStudent === 0 ) {
                    return 0;
                }
                else {
                    return (data.numOfStudent/data.numOfClass).toFixed(1)
                }
            }),
            backgroundColor: [ usersPerClassColor.normalized],
          },
        ],
      });
    return (
        <Wrapper>
            TEST
            <BarCharts charData = {userData}/>            
        </Wrapper>
    );
};

export default UsersPerClass;

const Wrapper = styled.div`
    width: 80%;
`;