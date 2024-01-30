import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SliderShow from '../../slide/SliderShow';
import { uncoverBtn } from '../../../data/urlData';
import { UncoverimageData } from '../../../data/imgData';

const Uncover: React.FC = () => {
  const navigate = useNavigate();
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  const readmeBtnHandle = () => {
    navigate('/uncover/readme');
  };

  return (
    <UncoverSection className="flex-all-center">
      <div className="project-image">
        <SliderShow images={UncoverimageData} />
      </div>
      <div className="project-info flex-v-center column">
        <span className="pj-num">PROJECT 02</span>
        <span className="pj-name">노 카피라이트 음원 스트리밍 서비스 : Uncover</span>
        <p>2023.05 ~ 2023.6 (6인 프로젝트)</p>
        <p>
          저작권이 없는 노카피라이트 음원을 스트리밍 할 수 있으며,자신만의 플레이리스트를 만들어서 다른사람들과 공유할
          수 있는 스트리밍 서비스입니다. 이론만 들어 감이 오지않던 <span>타입스크립트</span>를 직접 도입해 본 첫
          프로젝트이며, 이외에도 전역상태관리, <span>OAuth 2.0</span> 등의 개념을 한 번 더 깊게 다질 수 있었습니다.
          스타일드 컴포넌트를 이용하여 <span>재사용성 높은 스타일드컴포넌트를 설계</span>를 해 볼 수 있었고,{' '}
          <span>동적 스타일링 및 조건부 스타일링</span>을 경험하면서 좋은 UI/UX에 대해 고민하는 계기도 되었습니다. 어떤
          기능을 구현하냐보다, 사용자의 사용성에 집중해보며 유저친화적인 서비스를 설계하기위해 고민할 수 있었던 좋은
          기회였다고 생각합니다.
        </p>
        <div>
          {uncoverBtn.map((url, idx) => (
            <button
              key={idx}
              onClick={() => {
                handleExternalLink(url.url);
              }}>
              {React.createElement(url.icon.component) as React.ReactElement} {url.name}
            </button>
          ))}
        </div>
        <div>
          <button onClick={readmeBtnHandle}>자세히보기</button>
        </div>
      </div>
    </UncoverSection>
  );
};

export default Uncover;

const UncoverSection = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  line-height: 160%;

  .project-image {
    height: 100%;
    width: 35%;
  }
  .project-info {
    height: 70%;
    width: 50%;
    animation: showup 1s 0s forwards;
    @keyframes showup {
      0% {
        transform: translateY(-50px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }

  .pj-num {
    font-size: 2.3rem;
    font-family: 'Lime';
    color: var(--main-color);
  }

  .pj-name {
    height: 40px;
    font-size: 2.5rem;
    font-family: 'Lime';
    margin-top: 15px;
    text-transform: uppercase;
    padding-top: 10px;

    background: linear-gradient(to right bottom, var(--main-color), var(--sub-color) 60%);
    color: transparent;
    -webkit-background-clip: text;
  }

  p {
    word-break: keep-all;
    font-family: 'KopubB';
    width: 65%;
    margin: 20px 0px 20px 0px;
    color: var(--main-text-color);
    > span {
      color: #f65b5b;
      font-weight: 600;
    }
  }

  button {
    margin: 15px 15px 0px 0px;
    font-family: 'KopubB';
    font-size: 17px;
    /* color: var(--btn-st-color);
        border: 1px solid rgb(143, 138, 226, 0.5);
        background-color: var(--btn-bg-color); */
    color: #4c4c4c;
    border: none;
    background-color: #f1c32b;
    padding: 7px 25px;
    border-radius: 5px;
    transition: 0.3s all ease-in-out;
    > *:nth-child(1) {
      margin-right: 5px;
      transform: translateY(3px);
    }
  }

  button:hover {
    border: 1px solid rgb(143, 138, 226, 0.5);
    background-color: var(--btn-bg-color);
  }

  ul {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
  }
  .skill-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'kopubB';
    color: #4c4c4c;
    font-size: 14px;
    border: 1px solid #0c0c0c;
    padding: 0px 15px;
    height: 25px;
    border-radius: 5px;
    margin: 5px 5px 5px 0px;
    background-color: #181a14;
    transition: all ease-in-out 0.3s;
  }

  .skill-icon > *:nth-child(1) {
    margin-right: 5px;
  }
`;
