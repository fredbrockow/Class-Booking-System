import styled from "styled-components";

import BarCharts from './BarCharts';
import { useState } from 'react';

import { createUsersPerClass, usersPerClassColor } from "./buildingDatas";

const UsersPerClass = ( {yogaClasses , calendar}) => {

    const classesData = createUsersPerClass(yogaClasses , calendar);

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
            <Title>Attendance Per Class</Title>
            <BarCharts charData = {userData}/>            
        </Wrapper>
    );
};

export default UsersPerClass;

const Wrapper = styled.div `
  width: calc(100% - 231px);
`;

const Title = styled.div`
  color: var(--MainBlack);
  font-family: var(--font-secondary-header);
  font-size: 1.4em;
  margin-top: 24px;
  margin-bottom: 34px;
`;