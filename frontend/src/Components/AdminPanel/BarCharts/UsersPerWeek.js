import styled from "styled-components";


import BarCharts from './BarCharts';
import { useState } from 'react';

import { createUsersPerDayDataSet, classHours, slotColors} from "./buildingDatas";

const UsersPerWeek = ({calendar}) => {

    const yogaData = createUsersPerDayDataSet(calendar);

    const stackKey = "stack1";

    const [userData, setUserData] = useState({
        labels: yogaData.keys.map((data) => data),
        datasets: [
          {
            stack: stackKey,
            label:classHours[0],
            data: yogaData.data.slot1.map((data) => data),
            backgroundColor: [ slotColors.slot1],
          },
          {
            stack: stackKey,
            label:classHours[1],
            data: yogaData.data.slot2.map((data) => data),
            backgroundColor: [slotColors.slot2],
          },
          {
            stack: stackKey,
            label:classHours[2],
            data: yogaData.data.slot3.map((data) => data),
            backgroundColor: [slotColors.slot3],
          },
          {
            stack: stackKey,
            label:classHours[3],
            data: yogaData.data.slot4.map((data) => data),
            backgroundColor: [slotColors.slot4],
          },
          {
            stack: stackKey,
            label:classHours[4],
            data: yogaData.data.slot5.map((data) => data),
            backgroundColor: [slotColors.slot5],
          },
          {
            stack: stackKey,
            label:classHours[5],
            data: yogaData.data.slot6.map((data) => data),
            backgroundColor: [slotColors.slot6],
          },
        ],
      });
     
    return (
        <Wrapper>
            <Title>Attendance Per Week</Title>
            <BarCharts charData = {userData}/>            
        </Wrapper>
    );
};

export default UsersPerWeek;

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