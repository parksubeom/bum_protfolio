import styled from 'styled-components';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { usePageNumberState } from '../state/atoms';
import React from 'react';
import MainInfo from '../components/info/MainInfo';
import Profile from '../components/info/Profile';
import SideBar from '../components/sidebar/SideBar';
import AniSchool from '../components/project/anischool/AniSchool';
import AniSchoolReadme from '../components/project/anischool/Readme';
import Ticat from '../components/project/ticat/Ticat';
import TicatReadme from '../components/project/ticat/Readme';
import Uncover from '../components/project/uncover/Uncover';
import UncoverReadme from '../components/project/uncover/Readme';
import ShootingStar from '../components/animation/ShootingStar';

type BubbleEffectProps = {
  $top?: string;
  $right?: string;
  $left?: string;
  $w?: string;
  $h?: string;
  $second?: string;
};

const PortfolioPage: React.FC = () => {
  const [updatingScroll, setUpdatingScroll] = useState(false);
  const setPageNumber = useSetRecoilState(usePageNumberState);
  const location = useLocation();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = (event: WheelEvent) => {
      clearTimeout(timeoutId); // 기존의 setTimeout을 클리어합니다.

      // setTimeout을 사용하여 페이지 이동 로직을 1.5초 지연시킵니다.
      timeoutId = setTimeout(() => {
        const pageNumber = event.deltaY > 0 ? 'down' : 'up';
        const isAtTop = window.scrollY === 0;
        const isAtBottom = window.scrollY + window.innerHeight === document.documentElement.scrollHeight;

        // 리드미 페이지에서는 스크롤 이벤트로 페이지 이동을 제한.
        if (location.pathname.split('/').includes('readme')) {
          return;
        }

        // 스크롤이 맨 위 또는 맨 아래에 있는 경우에만 페이지 전환
        if ((pageNumber === 'up' && isAtTop) || (pageNumber === 'down' && isAtBottom)) {
          setPageNumber(prevScroll => {
            if (pageNumber === 'up' && prevScroll > 1) {
              return prevScroll - 1;
            } else if (pageNumber === 'down' && prevScroll < 5) {
              return prevScroll + 1;
            } else {
              return prevScroll;
            }
          });
        }
      }, 250); // 1.5초의 딜레이
    };

    window.addEventListener('wheel', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('wheel', handleScroll);
      clearTimeout(timeoutId); // 컴포넌트가 언마운트될 때 timeout을 클리어합니다.
    };
  }, [location.pathname]);

  return (
    <>
      <MainSection className="flex-h-center column">
        <div className="opacity">
          <BubbleEffect $top="-250px" $right="50px"></BubbleEffect>
          <BubbleEffect $top="50px" $right="-200px" $second="7"></BubbleEffect>
          <BubbleEffect $top="500px" $left="-150px" $second="5"></BubbleEffect>
          <BubbleEffect $top="800px" $left="100px" $w="400" $h="400"></BubbleEffect>
        </div>
        {!location.pathname.split('/').includes('readme') && <SideBar />}
        <ShootingStar />
        <Routes>
          <Route path="*" element={<MainInfo />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/ticat" element={<Ticat />}></Route>
          <Route path="/ticat/readme" element={<TicatReadme />}></Route>
          <Route path="/uncover" element={<Uncover />}></Route>
          <Route path="/uncover/readme" element={<UncoverReadme />}></Route>
          <Route path="/anischool" element={<AniSchool />}></Route>
          <Route path="/anischool/readme" element={<AniSchoolReadme />}></Route>
        </Routes>
      </MainSection>
    </>
  );
};

const MainSection = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  color: var(--main-text-color);
  background-color: var(--main-bg-color);
  color: #fff;

  .opacity {
    opacity: 0;
    animation: opacity 2s 1s forwards;
  }

  @keyframes opacity {
    100% {
      opacity: 1;
    }
  }
`;

const BubbleEffect: React.FC<BubbleEffectProps> = styled.div<BubbleEffectProps>`
  position: absolute;
  width: ${({ $w }) => $w || '500'}px;
  height: ${({ $h }) => $h || '500'}px;
  background-color: rgba(202, 100, 14, 0.1);
  top: ${({ $top }) => $top || 'auto'};
  right: ${({ $right }) => $right || 'auto'};
  left: ${({ $left }) => $left || 'auto'};
  border-radius: 48%;
  animation: roundingMotion ${({ $second }) => $second || '3'}s infinite linear;

  @keyframes roundingMotion {
    50% {
      transform: rotate(180deg) scale(1.1);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default PortfolioPage;
