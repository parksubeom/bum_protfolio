import * as React from 'react';
import styled from 'styled-components';
import { skillsData } from '../../../data/skillsData';
import { deploymentData } from '../../../data/deploymentData';
import { communicationData } from '../../../data/communicationData';
import StackBox from './StackBox';
const Stack: React.FC = () => {
  return (
    <StackSection>
      <StackBox Title="Skills" Data={skillsData} />
      <StackBox Title="DeployMent" Data={deploymentData} />
      <StackBox Title="Communication" Data={communicationData} />
    </StackSection>
  );
};

export default Stack;

const StackSection = styled.section`
  @media (max-width: 1440px) {
    display: flex;
    flex-direction: row;
    > div {
      width: 30%;
      > ul {
        width: 100%;
      }
    }
  }
`;
