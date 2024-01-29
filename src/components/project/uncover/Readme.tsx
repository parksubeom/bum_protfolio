// ProjectInfo.tsx
import React from 'react';
import styled from 'styled-components';

const Readme: React.FC = () => {
  return (
    <>
      <MainTitleSection>
        <MainTitle>노 카피라이트 음원 스트리밍 서비스 [UNCOVER]</MainTitle>
      </MainTitleSection>
      <Container>
        <Section>
          <Title>📌Summary</Title>
          <Content>
            <p>
              <strong>
                저작권이 없는 노카피라이트 음원을 스트리밍 할 수 있으며,자신만의 플레이리스트를 만들어서 다른사람들과
                공유할 수 있는 스트리밍 서비스입니다.
              </strong>
            </p>
            <p>
              이론만 들어 감이 오지않던 타입스크립트를 직접 도입해 본 첫 프로젝트이며, 이외에도 전역상태관리, OAuth 2.0
              등의 개념을 한 번 더 깊게 다질 수 있었습니다.
            </p>
            <p>
              스타일드 컴포넌트를 이용하여 재사용성 높은 스타일드컴포넌트를 설계해 볼 수 있었고, 동적 스타일링 및 조건부
              스타일링을 경험하면서 좋은 UI/UX에 대해 고민하는 계기도 되었습니다.
            </p>
            <p>
              어떤 기능을 구현하냐보다, 사용자의 사용성에 집중해보며 유저친화적인 서비스를 설계하기위해 고민할 수 있었던
              좋은 기회였다고 생각합니다.
            </p>
            <h2>❗주요 기능</h2>
            <li>음원 스트리밍</li>
            <li>음원 다운로드</li>
            <li>음원 태그에 따라 분류 및 서칭</li>
            <li>플레이리스트 CRUD</li>
            <li>플레이리스트 댓글 CRUD</li>
            <li>음원이 영상에 어울리는지 핏을 확인하는 믹싱페이지</li>
          </Content>
        </Section>
        <Section>
          <Title>🤔Background</Title>
          <Content>
            {' '}
            <p>
              저는 취미로 방송 스트리밍과 유튜브 편집을 했었습니다. 유튜브 영상은 저작권 있는 음원을 추가하면 수익을 낼
              수 없었고, 그렇기에 저작권 없는 음원들을 일일이 찾으러다녀야 했고 그 음원이 내 영상 분위기에 맞는지
              하나하나 비교해야하는 수고를 겪어야했습니다.
            </p>
            <p>
              저는 그럴 때마다 어딘가에 저작권없이 편하게 사용가능한 음원들이 모여있고, 그 자리에서 영상과 음원의 핏까지
              비교해볼 수 있는 서비스가 있다면 좋겠다고 생각했습니다. 오직 영상을 위해서가 아니라도 대부분의 노
              카피라이트 음원은 가사가 없는 멜로디 음원인 경우가 많은데, 이러한 음원들은 업무를 할 때나 자기전
              수면음악으로 사용하기에 아주 적절해 보였습니다.
            </p>
            <p>
              음원 스트리밍기능을 추가해야겠다 생각했고, 나아가 자신만의 테마를 가진 플레이리스트를 만들어 서로 공유까지
              되게 한다면 단순히 음원 다운로드 서비스가 아닌 괜찮은 음원 스트리밍 서비스가 될것이라 생각했기에 이
              프로젝트를 시작하게 됐습니다.
            </p>
          </Content>
        </Section>
        <Section>
          <Title>🔨Technology Stack</Title>
          <Content>
            {' '}
            <li>개발환경 : React / TypeScript </li>
            <li>상태관리 : Recoil</li>
            <li>스타일 : Styled-components</li>
            <li>배포 : AWS EC2 / AWS CloudFront</li>
            <li>데이터 패칭 및 캐싱 : axios / React-query</li>
          </Content>
        </Section>
        <Section>
          <Title>🔍What I learned</Title>
          <Content>
            <h2>Oauth2로그인 및 로컬 로그인기능 구현 </h2>
            <li>
              그동안 수 없이 해온 로그인 인증의 플로우를자세히 알아볼 수 있는 기회였습니다. 또한 프론트엔드와 백엔드
              간의 통합을 위해 API통신, 토큰 교환 등의 작업을 수행함으로써 클라이언트와 서버 간의 협업 방식을 익힐 수
              있었습니다. 클라이언트에서 외부 플래폼으로 인가코드를 요청하고, 그에대한 응답을 다시 서버로 보내며 수 많은
              응답코드에 대한 익힐 수 있었습니다.
            </li>
            <h2>믹싱 페이지 구현</h2>
            <li>
              음원과 영상의 핏이 적합한지 대조해 볼 수 있는 믹싱페이지 구현을 맡았습니다. 그러기 위해서는 비디오와
              오디오를 동시에 조작해야했고, 그러기 위해선 DOM 조작이 필요했습니다. 이전 토이프로젝트에서는 쿼리 셀렉터를
              통해 DOM을 조작했지만, 리액트 공식문서를 살펴보니 리액트는 선언형 프로그래밍을 권장하는데 쿼리 셀렉터는
              명령형 프로그래밍에 더 가깝기 때문에 useRef를 사용하여 이러한 고민을 해결했습니다.
            </li>
            <h2>반응형 웹 레이아웃 구현</h2>
            <li>
              미디어 쿼리를 활용하여 다양한 화면 크기와 해상도에 대응해볼 수 있었습니다. 또한 Flexbox 를 이용하여
              요소들을 효율적으로 정렬하고 배치하는 방법을 배웠습니다. 이전까지는 크기단위는 px만 사용해봤었는데 반응형
              디자인을 위해 rem,em,% 등 여러가지 단위를 이해하고 사용해볼 수 있었습니다.
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
