// ProjectInfo.tsx
import React from 'react';
import styled from 'styled-components';

const Readme: React.FC = () => {
  return (
    <>
      <MainTitleSection>
        <MainTitle>전국 축제를 찾아주는 웹앱 서비스 [Ticat]</MainTitle>
      </MainTitleSection>
      <Container>
        <Section>
          <Title>📌Summary</Title>
          <Content>
            <p>
              <strong>
                전국에서 진행 또는 예정된 축제를 찾아보거나 캘린더에 등록하고, 다녀와서 스탬프까지 보상으로 제공하는
                서비스입니다.
              </strong>
            </p>
            <p>
              리액트/PWA로 개발하였으며, 스탬프,날씨 등 실시간 좌표를 사용하는 기능이 있기때문에 하기 때문에 포커스를
              모바일 디바이스에 두고 모바일뷰를 채택했습니다.
            </p>
            <p></p>
            <h2>❗주요 기능</h2>
            <li>원하는 지역 축제 찾기</li>
            <li>내 주변 축제 찾기</li>
            <li>축제 일정 캘린더 등록하기</li>
            <li>현재 내 위치에서 축제장소 길 찾기</li>
            <li>축제 상세정보 및 관련된 축제 추천</li>
            <li>해당축제와 일정거리이상 가까워지면 스탬프찍기 활성화</li>
          </Content>
        </Section>
        <Section>
          <Title>🤔Background</Title>
          <Content>
            {' '}
            <p>"나는 색다른 축제가 필요해! 매년 보던 축제는 지겨워!"</p>
            <p>
              {' '}
              축제를 소개하는 유사한 서비스들이 있지만, 대부분 자세한 설명이나 후기 등은 제공되지 않아 해당 축제에 대한
              평을 알기가 쉽지 않았습니다. 또한 대부분 웹 기반 서비스기 때문에 길을 찾아가야 하는 축제 특성상 접근성이
              좋지 않다고 느껴 그러한 단점들을 보완한 서비스를 만들어야겠다고 생각했습니다.
            </p>
            <p>
              전국에 있는 다양한 축제들에 대한 접근성을 높이고 축제에 대한 보다 자세한 정보를 제공받고 싶어서 개발하게
              됐습니다.
            </p>
          </Content>
        </Section>
        <Section>
          <Title>🔨Technology Stack</Title>
          <Content>
            {' '}
            <li>개발환경 : React / TypeScript / PWA</li>
            <li>상태관리 : Zustand</li>
            <li>스타일 : Styled-components</li>
            <li>배포 : AWS EC2 / AWS CloudFront</li>
            <li>데이터 패칭 및 캐싱 : axios / React-query</li>
          </Content>
        </Section>
        <Section>
          <Title>🔍What I learned</Title>
          <Content>
            <h2>축제 상세페이지 구현</h2>
            <li>
              축제에 대한 설명,좋아요 여부,위치,유료유무,관련블로그,유사한 축제 추천,좌표 등 페칭해야 할 데이터가
              방대했는데, 이 많은 데이터를 어떤식으로 화면단에 보여주고 또 restful 하게 서버에 요청해야 할 지 고민할 수
              있었습니다.
            </li>
            <h2>라이브러리 없이 직접 캘린더 구현</h2>
            <li>
              설계한 UI 요구사항을 이행하기 위해서는 스타일 커스텀이 제한적인 라이브러리 사용이 힘들었고, 직접 캘린더를
              구현하게 됐습니다. 이 과정에서 리액트의 상태, 이벤트 처리, 조건부 렌더링 등과 같은 기본개념을 좀 더 깊게
              이해할 수 있었습니다. 또한 라이브러리가 아니기 때문에 코드를 구조화하고, 유지보수하기 쉽다는 장점이
              있었습니다.
            </li>
            <h2>캘린더에 축제 추가 및 CRUD 구현</h2>
            <li>
              축제 일정을 서버로 POST요청 보내는 과정에서 선택했던 일정보다 하루씩 빠지는 현상이 발생했고,이러한 문제를
              해결하는 과정에서 Date객체는 시차가 존재한다는 사실을 배우게 됐습니다. 또한 다중삭제 기능을 구현하면서
              리액트에서의 데이터는 위에서 아래로 흘러야 이상적이며, 같은 컴포넌트여도 독립적인 관점에서 봐야한다는 걸
              느꼈습니다.
            </li>
            <h2>PWA로 빌드</h2>
            <li>
              PWA는 서비스 워커(Service Worker)를 사용하여 오프라인에서도 동작할 수 있습니다. 사용자가 네트워크에
              연결되어 있지 않더라도 캐시된 데이터를 통해 앱을 사용할 수 있도록 했습니다. 또한 CSR렌더링 방식인 리액트의
              특성상 SEO를 최적화 하기위한 노력을 기울여도 검색엔진에 노출되기 쉽지 않기때문에 Next.js를 이용한
              SSR렌더링도 고민했으나 마켓에 출시하여 실제 사용자를 받아보는 방법이 더 좋은 것 같아 PWA를 사용해보게
              됐습니다. PWA를 통해 빌드해보면서 앞으로 웹 생태계가 뻗어나갈 무한한 가능성과 확장성을 몸소 체감할 수
              있었습니다.
            </li>
          </Content>
        </Section>
      </Container>
    </>
  );
};

export default Readme;

// 스타일드 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto; /* 스크롤이 필요한 경우 추가 */
`;
const MainTitleSection = styled.section`
  background-color: black;
  width: 100%;
  padding: 5px 0px;
  display: flex;
  align-items: center;
`;

const Section = styled.section`
  margin: 0px 150px;
`;

const MainTitle = styled.h1`
  font-size: 24px;
  color: #faf8f8;
  margin: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #faf8f8;
  margin: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const Content = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #fffafa;
  margin: 10px;
  > h2 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
  }
  > p {
    margin-bottom: 15px;
  }
  > li {
    margin-bottom: 10px;
  }
`;
