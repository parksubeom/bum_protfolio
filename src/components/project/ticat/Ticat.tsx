import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SliderShow from '../../slide/SliderShow';
import { ticatBtn } from '../../../data/urlData';
import { TicatimageData } from '../../../data/imgData';
import PublicButton from '../../../common/Button';

const Ticat: React.FC = () => {
  const navigate = useNavigate();

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  const readmeBtnHandle = () => {
    navigate('/ticat/readme');
  };

  return (
    <TicatSection className="flex-all-center">
      <div className="project-image">
        <SliderShow images={TicatimageData} />
      </div>
      <div className="project-info flex-v-center column">
        <span className="pj-num">PROJECT 01</span>
        <span className="pj-name">전국의 모든 축제를 찾아주는 : TICAT</span>
        <p>
          전국에서 진행 또는 예정된 축제를 찾아보거나 캘린더에 등록하고, 다녀와서 스탬프까지 보상으로 제공하는
          서비스입니다. 반응형 css 및 Animation 동작구현 과 함께 전반적인 UI/UX 구축을 담당했으며, kakao map API 를
          이용한 지도 안내 서비스 및 상세페이지, 캘린더 페이지, 날씨 API 를 통한 서비스 축제위치 날씨 제공 등을 도맡아
          진행하였습니다.
        </p>
        <p>PWA를 통해 빌드해보면서 앞으로 웹 생태계가 뻗어나갈 무한한 가능성과 확장성을 몸소 체감할 수 있었습니다.</p>
        <div>
          {ticatBtn.map((url, idx) => (
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
    </TicatSection>
  );
};

export default Ticat;

const TicatSection = styled.div`
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
