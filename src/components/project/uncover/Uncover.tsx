import React from 'react';
import styled from 'styled-components';
import SliderShow from '../../slide/SliderShow';
import { uncoverBtn } from '../../../data/urlData';
import { UncoverimageData } from '../../../data/imgData';

const Uncover: React.FC = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <UncoverSection className="flex-all-center">
      <div className="project-image">
        <SliderShow images={UncoverimageData} />
      </div>
      <div className="project-info flex-v-center column">
        <span className="pj-num">PROJECT 02</span>
        <span className="pj-name">노 카피라이트 음원 스트리밍 서비스 : Uncover</span>
        <p>
          - 🎧No Copyright 뮤직 스트리밍 사이트 - UNCOVER : 이런 음악은 처음이지? - 유튜브 편집을 할 때 마다 저작권 없는
          음원을 찾는 과정이 너무 번거롭고 귀찮았는데, 그러한 불편함을 개선하고 더불어 세상에 알려지지 않은 숨겨진
          음악들을 알리자 라는 취지로 개발했습니다. - 무료라는 장점과 “피팅룸” 이라는 믹싱페이지에서 영상과 음원의 핏이
          맞는지 대조해 볼 수 있는 차별점을 뒀습니다
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
      </div>
    </UncoverSection>
  );
};

export default Uncover;

const UncoverSection = styled.div`
  width: 100%;
  height: 100%;
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
    margin: 40px 0px 50px 0px;
    color: var(--main-text-color);
  }

  button {
    margin: 0px 15px 0px 0px;
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