import * as React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useStackDataState } from '../../state/atoms';
import { useEffect } from 'react';

interface IntroductionBoxProps {
  color: string;
  $gauge: number;
}
const Introduction: React.FC = () => {
  const [clickStack] = useRecoilState(useStackDataState);

  useEffect(() => {
    // clickStack이 변경될 때마다 애니메이션을 다시 시작
    const element = document.querySelector('.stack-icon') as HTMLElement;
    element.style.animation = 'none';
    void element.offsetWidth; // reflow
    element.style.animation = `scale 0.5s 0s forwards`;

    const element2 = document.querySelector('.text-box') as HTMLElement;
    element2.style.animation = 'none';
    void element2.offsetWidth; // reflow
    element2.style.animation = `opacityAni 0.5s 0s forwards`;
  }, [clickStack]);

  return (
    <IntroductionBox
      key={clickStack.index}
      className="flex-all-center column"
      color={clickStack.color}
      $gauge={clickStack.gauge}>
      <div className="text-box flex-all-center column">
        <div className="stack-icon">
          {
            React.createElement(clickStack.icon.component, {
              color: clickStack.icon.color,
            }) as React.ReactElement
          }
        </div>
        <span className="stack-name">{clickStack.name}</span>
        <div className="stack-gauge">
          <div className="gauge-box flex-all-center">{clickStack.gauge}%</div>
        </div>
        <p className="stack-intro">{clickStack.contents}</p>
      </div>
    </IntroductionBox>
  );
};
export default Introduction;

const IntroductionBox = styled.div<IntroductionBoxProps>`
  font-family: 'KopubB';
  text-align: center;

  .stack-icon {
    margin-top: 30px;
    width: 350px;
    min-height: 350px;
    font-size: 18rem;
  }

  .stack-name {
    font-size: 40px;
    color: var(--text-color);
    text-transform: uppercase;
  }

  .stack-gauge {
    margin: 30px;
    width: 250px;
    min-height: 10px;
    border: 2px solid var(--text-color);
    border-radius: 30px;
    padding: 3px;

    .gauge-box {
      width: ${({ $gauge }) => $gauge ?? 100}%;
      height: 100%;
      background-color: var(--text-color);
      border-radius: 30px;
      font-size: 14px;
      color: #000;
      transition: 0.5s all ease-in-out;
    }
  }

  .stack-intro {
    line-height: 150%;
  }

  @keyframes scale {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 0.7;
    }
  }

  @keyframes opacityAni {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
