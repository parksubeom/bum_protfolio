import styled from 'styled-components';
import * as React from 'react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useStackDataState } from '../../../state/atoms';

type IconType = {
  component: React.ComponentType<{ color: string }>;
  color: string;
};

type SkillsData = {
  index: number;
  name: string;
  icon: IconType;
  contents: string;
  color: string;
  gauge: number;
};

const StackBox = ({ Data, Title }: { Title: string; Data: SkillsData[] }) => {
  const setClickStack = useSetRecoilState(useStackDataState);
  const [indexNum, setIndexNum] = useState(1);

  const handleStack = (index: number, data: SkillsData) => {
    setIndexNum(index);
    setClickStack(data);
  };
  return (
    <div>
      <StackBoxComponent>
        <h2>{Title}</h2>
        <StackContent className="flex-h-center">
          {Data &&
            Data.map(item => (
              <li
                key={item.index}
                className={`skill-icon ${indexNum === item.index && `icon-click`}`}
                onClick={() => {
                  handleStack(item.index, item);
                }}>
                {
                  React.createElement(item.icon.component, {
                    color: item.icon.color,
                  }) as React.ReactElement
                }{' '}
                {item.name}
              </li>
            ))}
        </StackContent>
      </StackBoxComponent>
    </div>
  );
};
export default StackBox;

const StackBoxComponent = styled.ul`
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
    color: #898888;
    border: 1px solid #898888;
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
    background-color: #f8f0a8;
    color: #252525;
    cursor: pointer;
  }

  .icon-click {
    border: px solid #252525;
    background-color: #f8f0a8;
    color: #252525;
    cursor: pointer;
  }
`;
