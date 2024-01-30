import * as React from 'react';
import { skillsData } from '../../../data/skillsData';
import { deploymentData } from '../../../data/deploymentData';
import { communicationData } from '../../../data/communicationData';
import StackBox from './StackBox';
const Stack: React.FC = () => {
  return (
    <>
      <StackBox Title="Skills" Data={skillsData} />
      <StackBox Title="DeployMent" Data={deploymentData} />
      <StackBox Title="Communication" Data={communicationData} />
    </>
  );
};

export default Stack;
