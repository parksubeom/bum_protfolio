import styled from 'styled-components';

import { stackData } from '../../data/stackData';
import { toolData } from '../../data/toolData';
import { studyingData } from '../../data/learningData';
import { useState } from 'react';

import { useRecoilState } from 'recoil';
import { useStackDataState } from '../../state/atoms';

interface handleStackProps {
  index: number;
  name: string;
  icon: JSX.Element;
  contents: string;
  color: string;
  gauge: number;
}

function Stack() {
  const [, setClickStack] = useRecoilState(useStackDataState);

  const [indexNum, setIndexNum] = useState(1);

  const handleStack = (index: number, data: any) => {
    setIndexNum(index);
    setClickStack(data);
  };

  return (
    <div>
      <StackBox>
        <h2>Stack</h2>
        <StackContent className="flex-h-center">
          {stackData.map(item => (
            <li
              key={item.index}
              className={`skill-icon ${indexNum === item.index && `icon-click`}`}
              onClick={() => {
                handleStack(item.index, item);
              }}>
              {item.icon} {item.name}
            </li>
          ))}
        </StackContent>
        <h2>Tools </h2>

        <StackContent className="flex-h-center">
          {toolData.map(item => (
            <li
              key={item.index}
              className={`skill-icon ${indexNum === item.index && `icon-click`}`}
              onClick={() => {
                handleStack(item.index, item);
              }}>
              {item.icon} {item.name}
            </li>
          ))}
        </StackContent>
        <h2>Studying</h2>

        <StackContent className="flex-h-center">
          {studyingData.map(item => (
            <li key={item.index} className="skill-icon">
              {item.icon} {item.name}
            </li>
          ))}
        </StackContent>
      </StackBox>
    </div>
  );
}

export default Stack;

const StackBox = styled.ul`
  letter-spacing: 0px;
  font-family: 'kopubM';
  line-height: 150%;
  width: 400px;

  h2 {
    font-size: 20px;
    margin: 20px 0px 10px 0px;
    font-family: 'KopubB';
  }
`;

const StackContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;

  .skill-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'kopubB';
    font-size: 14px;
    color: #4c4c4c;
    border: 1px solid #0c0c0c;
    background-color: #f9f7e4;
    padding: 0px 15px;
    height: 25px;
    border-radius: 5px;
    margin: 5px 5px 5px 0px;
    transition: all ease-in-out 0.3s;
  }

  .skill-icon > *:nth-child(1) {
    margin-right: 5px;
  }

  .skill-icon:hover {
    background-color: var(--btn-bg-color);
    color: var(--btn-st-color);
    cursor: pointer;
  }

  .icon-click {
    border: 1px solid var(--btn-st-color);
    background-color: var(--btn-bg-color);
    color: var(--btn-st-color);
    cursor: pointer;
  }
`;
