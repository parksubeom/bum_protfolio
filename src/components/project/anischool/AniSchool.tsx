import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SliderShow from '../../slide/SliderShow';
import { anischoolBtn } from '../../../data/urlData';
import { AniSchoolimageData } from '../../../data/imgData';

const AniSchool: React.FC = () => {
  const navigate = useNavigate();
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  const readmeBtnHandle = () => {
    console.log('눌림');
    navigate('/anischool/readme');
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
          프로필 업로드에 얼굴을 공개하기 꺼려워하는 사람들을 위한 서비스로, 귀여운 동물 이미지를 생성하는
          프로젝트입니다. 프론트엔드 개발과 캐릭터 디자인 기획에 참여하여, 랜덤 요소 적용, 레어 요소 설정, 이미지 저장
          등의 기능을 구현했습니다. 주요 개발과정은 블로그에 공유되어 있으며, 프로젝트를 통해 SEO를 제외한 전반적인 성능
          최적화를 진행했습니다. 코드 최적화와 리소스 최적화를 통해 라이트하우스 성능 개선을 달성하고, 사용자 중심의
          디자인을 강조하며 프로젝트 성과로는 200명 이상의 실제 사용자 경험과 37건의 피드백, 유지보수 경험을 얻었습니다.
          특히, 사용자 입장에서의 개발 고민을 통해 팀원과의 커뮤니케이션과 고객 니즈 파악의 중요성을 깨달았습니다.
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
        <div>
          <button onClick={readmeBtnHandle}>자세히보기</button>
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
    color: var(--main-texㅉt-color);
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
