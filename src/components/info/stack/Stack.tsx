import * as React from 'react';
import { skillsData } from '../../../data/skillsData';
import { deploymentData } from '../../../data/deploymentData';
import { communicationData } from '../../../data/communicationData';
import StackBox from './StackBox';
const Stack: React.FC = () => {
  return (
    <>
      <StackBox Data={skillsData} />
      <StackBox Data={deploymentData} />
      <StackBox Data={communicationData} />
    </>
  );
};

export default Stack;
