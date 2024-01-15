import styled from 'styled-components';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import React from 'react';
import MainInfo from '../conponents/info/MainInfo';

type BubbleEffectProps = {
  top?: string;
  left?: string;
  right?: string;
  w?: string;
  h?: string;
  second?: string;
};

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainSection className="flex-h-center column">
        <p>메인페이지</p>
        <div className="opacity">
          <BubbleEffect top="-250px" right="50px"></BubbleEffect>
          <BubbleEffect top="50px" right="-200px" second="7"></BubbleEffect>
          <BubbleEffect top="500px" left="-150px" second="5"></BubbleEffect>
          <BubbleEffect top="800px" left="100px" w="400" h="400"></BubbleEffect>
        </div>
        <Routes>
          <Route path="*" element={<MainInfo />}></Route>
        </Routes>
      </MainSection>
    </>
  );
};

const MainSection = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
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

const BubbleEffect: React.FC<BubbleEffectProps> = styled.div`
  position: absolute;
  width: ${props => props.w || '500'}px;
  height: ${props => props.h || '500'}px;
  background-color: rgba(252, 22, 14, 0.05);
  top: ${props => props.top || 'auto'};
  right: ${props => props.right || 'auto'};
  left: ${props => props.left || 'auto'};
  border-radius: 48%;
  animation: roundingMotion ${props => props.second || '3'}s infinite linear;

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
