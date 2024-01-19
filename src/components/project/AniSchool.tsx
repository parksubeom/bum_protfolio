import React from 'react';
import styled from 'styled-components';
import SliderShow from '../slide/SliderShow';
import { anischoolBtn } from '../../data/urlData';
import { AniSchoolimageData } from '../../data/imgData';

const AniSchool: React.FC = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <AniSchoolSection className="flex-all-center">
      <div className="project-image">
        <SliderShow images={AniSchoolimageData} />
      </div>
      <div className="project-info flex-v-center column">
        <span className="pj-num">PROJECT 03</span>
        <span className="pj-name">귀여운 동물 프로필 생성기 : AniSchool</span>
        <p>
          다양한 축제 정보를 효과적으로 제공하여 사용자가 쉽고 빠르게 주변의 지역 축제를 찾아볼 수 있도록 도와주는
          축제안내 서비스입니다. 반응형 css 및 Animation 동작구현 과 함께 전반적인 UI/UX 구축을 담당했으며, kakao map
          API 를 이용한 지도 안내 서비스 및 메인 페이지, 서칭바, 날씨 API 를 통한 서비스 제공을 도맡아 진행하였습니다.
        </p>
        <div>
          {anischoolBtn.map((url, idx) => (
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
    </AniSchoolSection>
  );
};

export default AniSchool;

const AniSchoolSection = styled.div`
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
