import styled from 'styled-components';

const MainInfo: React.FC = () => {
  return (
    <InfoSection className="flex-all-center column">
      <SubTitle className="flex-all-center">
        <div>오너십을 가지고 개발하는 </div>
        <div>
          <p>프론트엔드 개발자</p>
          <div className="under-bar">
            <div className="gauge-bar"></div>
          </div>
        </div>
      </SubTitle>
      <PortfolioTitle>
        <h1>
          <span>S</span>
          <span>U</span>
          <span>B</span>
          <span>E</span>
          <span>O</span>
          <span>M</span>
          <br />
          <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>T</span>
          <span>F</span>
          <span>O</span>
          <span>L</span>
          <span>I</span>
          <span>O</span>
        </h1>
      </PortfolioTitle>

      <div>
        <p className="description-text">
          오너십을 가지고 제품을 개발하는 박수범 입니다. 내가 만들어 낼 제품의 임팩트에 대해 항상 고민하며,
          <br />더 나아가 누군가에게 꼭 필요한 걸 제공하는 개발자를 목표로 합니다.
        </p>
        <br />
        <br />
      </div>
    </InfoSection>
  );
};

export default MainInfo;

const InfoSection = styled.div`
  position: relative;
  width: 1000px;
  height: 100vh;
  z-index: 1;
  letter-spacing: -0.2px;
  text-align: center;
  animation: showup 1s 0s forwards;
  opacity: 0;

  .description-text {
    color: var(--text-color);
    line-height: 150%;
  }

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
`;

const SubTitle = styled.div`
  font-size: 35px;
  letter-spacing: -2px;

  div:nth-child(1) {
    color: var(--text-color);
  }

  div:nth-child(2) {
    position: relative;
    margin-left: 10px;
    color: var(--main-text-color);
    transition: 0.3s all ease-in-out;

    .under-bar {
      position: absolute;
      bottom: -10px;
      left: 0px;
      margin: 0px;
      width: 100%;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.1);
    }
    .gauge-bar {
      width: 0%;
      height: 2px;
      background-color: var(--main-color);
      transition: 0.3s all ease-in-out;
    }
  }

  div:nth-child(2):hover {
    color: var(--main-color);

    .gauge-bar {
      width: 100%;
    }
  }
`;

const PortfolioTitle = styled.div`
  margin: 50px 0px;
  height: 270px;

  h1 span {
    position: relative;
    top: 5px;
    display: inline-block;
    font-size: 130px;
    animation: bounce 0.7s ease infinite alternate;
    text-shadow: 0 1px 0 #d8e33d, 0 2px 0 #ebb812, 0 3px 0 #f0ab16, 0 4px 0 #f0ab16, 0 5px 0 #f0ab16;
    background: linear-gradient(to right bottom, #f0ab16 40%, #f0ab16 90%);
    color: transparent;
    -webkit-background-clip: text;
  }

  h1 span:nth-child(2) {
    animation-delay: 0.1s;
  }
  h1 span:nth-child(3) {
    animation-delay: 0.2s;
  }
  h1 span:nth-child(4) {
    animation-delay: 0.3s;
  }
  h1 span:nth-child(5) {
    animation-delay: 0.4s;
  }
  h1 span:nth-child(6) {
    animation-delay: 0.5s;
  }
  h1 span:nth-child(7) {
    animation-delay: 0.6s;
  }
  h1 span:nth-child(8) {
    animation-delay: 0.7s;
  }

  h1 span:nth-child(9) {
    animation-delay: 0.8s;
  }
  h1 span:nth-child(10) {
    animation-delay: 0.9s;
  }
  h1 span:nth-child(11) {
    animation-delay: 1s;
  }
  h1 span:nth-child(12) {
    animation-delay: 1.1s;
  }

  h1 span:nth-child(13) {
    animation-delay: 1.2s;
  }
  h1 span:nth-child(14) {
    animation-delay: 1.3s;
  }
  h1 span:nth-child(15) {
    animation-delay: 1.4s;
  }
  h1 span:nth-child(16) {
    animation-delay: 1.5s;
  }

  @keyframes bounce {
    100% {
      top: -5px;
      text-shadow: 0 1px 0 #ece9e1, 0 2px 0 #f0ab16, 0 3px 0 #f0ab16, 0 4px 0 #f0ab16, 0 5px 0 #f0ab16, 0 6px 0 #f0ab16,
        0 7px 0 #f0ab16, 0 8px 0 #f0ab16, 0 9px 0 #f0ab16, 0 50px 25px rgba(0, 0, 0, 0.2);
    }
  }
`;
